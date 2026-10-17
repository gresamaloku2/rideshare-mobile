import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RideShare",
  description: "Aplikacion për ndarjen e udhëtimeve për në AAB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
