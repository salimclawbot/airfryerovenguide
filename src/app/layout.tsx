import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Home Coffee Spot", template: "%s | Home Coffee Spot" },
  description: "Expert guides to home coffee brewing, espresso machines, grinders, and beans.",
  metadataBase: new URL("https://homecoffeespot.com"),
  alternates: { canonical: "https://homecoffeespot.com" },
  openGraph: { siteName: "Home Coffee Spot", type: "website", title: "Home Coffee Spot", description: "Expert guides to home coffee brewing, espresso machines, grinders, and beans.", url: "https://homecoffeespot.com" },
  twitter: { card: "summary_large_image", title: "Home Coffee Spot", description: "Expert guides to home coffee brewing, espresso machines, grinders, and beans." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={`${inter.className} antialiased`}><Header /><main className="min-h-screen">{children}</main><Footer /></body></html>);
}
