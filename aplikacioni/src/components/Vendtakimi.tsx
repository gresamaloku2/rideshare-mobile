"use client";

import { useState } from "react";

type GjendjaLokacionit =
  | "idle"
  | "loading"
  | "success"
  | "denied"
  | "timeout"
  | "unavailable";

export default function Vendtakimi() {
  const [teksti, setTeksti] = useState("");
  const [vendtakimi, setVendtakimi] = useState("");
  const [gabimi, setGabimi] = useState("");
  const [gjendja, setGjendja] = useState<GjendjaLokacionit>("idle");
  const [statusMesazhi, setStatusMesazhi] = useState("");
  const [saktesia, setSaktesia] = useState<number | null>(null);

  const konfirmo = () => {
    const iPastruar = teksti.trim();
    if (!iPastruar) {
      setGabimi("Ju lutem shkruani një vendtakim të vlefshëm.");
      return;
    }
    setGabimi("");
    setVendtakimi(iPastruar);
  };

  const merrVendndodhjen = () => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      setGjendja("unavailable");
      setStatusMesazhi("Gjeolokalizimi nuk mbështetet nga kjo pajisje.");
      return;
    }

    setGjendja("loading");
    setStatusMesazhi("Po kërkojmë vendndodhjen...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const acc = Math.round(position.coords.accuracy);
        setSaktesia(acc);
        setGjendja("success");
        setStatusMesazhi("Pozicioni u mor.");
      },
      (error) => {
        if (error.code === 1) {
          // PERMISSION_DENIED
          setGjendja("denied");
          setStatusMesazhi("Leja u refuzua. Shkruaj vendtakimin vetë.");
        } else if (error.code === 3) {
          // TIMEOUT
          setGjendja("timeout");
          setStatusMesazhi("Koha mbaroi. Shkruaj vendtakimin vetë.");
        } else {
          // POSITION_UNAVAILABLE (kodi 2) ose tjetër
          setGjendja("unavailable");
          setStatusMesazhi("Vendndodhja nuk është e disponueshme. Shkruaj vendtakimin vetë.");
        }
      },
      { timeout: 10000 }
    );
  };

  return (
    <section
      style={{
        border: "1px solid #cbd5e1",
        borderRadius: "8px",
        padding: "1rem",
        marginTop: "1.5rem",
        backgroundColor: "#f8fafc",
      }}
    >
      <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", color: "#1e293b" }}>
        Vendtakimi i udhëtimit
      </h2>

      <div style={{ marginBottom: "1rem" }}>
        <button
          type="button"
          data-testid="locate-me"
          onClick={merrVendndodhjen}
          disabled={gjendja === "loading"}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: gjendja === "loading" ? "not-allowed" : "pointer",
            fontWeight: "500",
          }}
        >
          {gjendja === "loading" ? "Po kërkohet..." : "Përdor vendndodhjen time"}
        </button>

        <p
          data-testid="location-status"
          data-state={gjendja}
          style={{
            marginTop: "0.5rem",
            fontSize: "0.9rem",
            color: gjendja === "denied" || gjendja === "timeout" || gjendja === "unavailable" ? "#b91c1c" : "#334155",
          }}
        >
          {statusMesazhi}
        </p>

        <p
          data-testid="location-accuracy"
          style={{ fontSize: "0.85rem", color: "#64748b" }}
        >
          {saktesia !== null ? `Saktësia: rreth ${saktesia} m` : ""}
        </p>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <label
          htmlFor="meeting-input-field"
          style={{ display: "block", marginBottom: "0.35rem", fontWeight: "500", color: "#334155" }}
        >
          Shkruaj vendtakimin:
        </label>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <input
            id="meeting-input-field"
            type="text"
            data-testid="meeting-input"
            value={teksti}
            onChange={(e) => setTeksti(e.target.value)}
            placeholder="P.sh. Biblioteka, Stacioni..."
            style={{
              flex: "1",
              minWidth: "200px",
              padding: "0.5rem",
              border: "1px solid #94a3b8",
              borderRadius: "6px",
            }}
          />
          <button
            type="button"
            data-testid="confirm-meeting"
            onClick={konfirmo}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Konfirmo në telefon
          </button>
        </div>

        <p
          data-testid="meeting-error"
          role="alert"
          style={{
            color: "#dc2626",
            fontSize: "0.85rem",
            marginTop: "0.35rem",
            minHeight: "1.2rem",
          }}
        >
          {gabimi}
        </p>
      </div>

      <div
        style={{
          marginTop: "1rem",
          padding: "0.75rem",
          backgroundColor: "#ffffff",
          borderRadius: "6px",
          border: "1px solid #e2e8f0",
        }}
      >
        <p style={{ margin: 0, color: "#1e293b" }}>
          Vendtakimi i konfirmuar:{" "}
          <strong data-testid="confirmed-meeting">{vendtakimi}</strong>
        </p>
      </div>
    </section>
  );
}
