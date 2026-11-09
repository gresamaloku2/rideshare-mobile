import Vendtakimi from "@/components/Vendtakimi";

export const metadata = {
  title: "Java 8 · Testimi i Vendtakimit",
};

export default function Java08TestPage() {
  const udhetimiFiktiv = {
    shoferi: "Dritoni",
    nisja: "Ferizaj",
    destinacioni: "Prishtinë (Kolegji AAB)",
    ora: "08:15",
    vende: 2,
  };

  return (
    <main style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem", fontFamily: "sans-serif" }}>
      <h1>RideShare — Prova e Vendtakimit</h1>
      <p style={{ color: "#475569" }}>
        Udhëtimi testues i {udhetimiFiktiv.shoferi}: {udhetimiFiktiv.nisja} → {udhetimiFiktiv.destinacioni} ({udhetimiFiktiv.ora})
      </p>

      <Vendtakimi />
    </main>
  );
}
