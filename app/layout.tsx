import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Amos Kipkirui Ngeno | Software Engineer & Entrepreneur",
  description: "Portfolio of Amos Kipkirui Ngeno \u2014 Software Engineer, Fintech Entrepreneur, and Multi-disciplinary Builder based in Kenya.",
  openGraph: {
    title: "Amos Kipkirui Ngeno | Software Engineer & Entrepreneur",
    description: "Software Engineer, Fintech Entrepreneur, and Multi-disciplinary Builder based in Kenya.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col">
        {/* Atmospheric background */}
        <div className="gradient-mesh" aria-hidden="true" />
        <div className="grain-overlay" aria-hidden="true" />

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main id="main-content" className="relative z-10 flex-1 pt-24">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
