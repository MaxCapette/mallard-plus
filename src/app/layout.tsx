import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google"; // Correct import statement for IBM Plex Mono

import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: "400" });


export const metadata: Metadata = {
  title: "Mallard plus",
  description: "Bievenue sur le site de Mallard plus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.className}>{children}</body>
    </html>
  );
}
