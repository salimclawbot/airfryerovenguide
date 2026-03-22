import Script from 'next/script';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Air Fryer Zone — Best Air Fryer Toaster Ovens (2026)", template: "%s | Air Fryer Zone" },
  description: "Expert-tested air fryer toaster oven reviews, buying guides and comparisons for 2026. Find the best air fryer oven for your kitchen.",
  metadataBase: new URL("https://airfryerzone.com"),
  alternates: { canonical: "https://airfryerzone.com" },
  openGraph: {
    siteName: "Air Fryer Zone",
    type: "website",
    locale: "en_US",
    title: "Air Fryer Zone — Best Air Fryer Toaster Ovens (2026)",
    description: "Expert-tested air fryer toaster oven reviews and buying guides for 2026.",
    url: "https://airfryerzone.com",
    images: [{ url: "https://airfryerzone.com/og-image.jpg", width: 1200, height: 630, alt: "Air Fryer Zone" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Fryer Zone — Best Air Fryer Toaster Ovens (2026)",
    description: "Expert-tested air fryer toaster oven reviews and buying guides for 2026.",
    images: ["https://airfryerzone.com/og-image.jpg"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Air Fryer Zone",
  "url": "https://airfryerzone.com",
  "description": "Expert air fryer toaster oven reviews and buying guides",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://airfryerzone.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KR6CBFT5B7" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KR6CBFT5B7');
        `}</Script>
      </body>
    </html>
  );
}
