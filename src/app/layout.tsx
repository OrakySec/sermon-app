import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "300 Plans de Prédications Prêts à l'Emploi !",
  description: "Des messages inspirés, structurés et prêts à être prêchés pour transformer votre congrégation.",
};
import Tracking from "@/components/Tracking";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased">
        <Tracking />
        {children}
      </body>
    </html>
  );
}
