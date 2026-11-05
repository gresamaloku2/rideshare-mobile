import type { Metadata } from "next";
import "./globals.css";
import Pwa from "@/components/Pwa";

export const metadata: Metadata = {
  title: "RideShare AAB",
  description: "Aplikacion për ndarjen e udhëtimeve për në AAB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq">
      <body>
        <Pwa />
        {children}
      </body>
    </html>
  );
}
