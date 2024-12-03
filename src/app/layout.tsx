import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const jetbrainMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight:["100", "200", "300", "400", "500", "600",
"700", "800"],
  variable: "--font-jetbrainsMono"
});

export const metadata: Metadata = {
  title: "DeveloperSegatto",
  description: "my personal porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={jetbrainMono.variable}>
        <Header></Header>
        <PageTransition>
          {children}
        </PageTransition>
        
      </body>
    </html>
  );
}