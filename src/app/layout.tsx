import type { Metadata } from "next";
import { Abel } from "next/font/google";
import "./globals.css";

const abel = Abel({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Desenvolvedor Henrique Vergili",
  description: "Portfolio de projetos do desenvolvedor em front end, Henrique Vergili",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={abel.className}>{children}</body>
    </html>
  );
}
