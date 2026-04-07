import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "The Content Creator Guide to AI-Generated, Copyright-Free Music",
  description: "Comprehensive guide for content creators on understanding and using AI-generated, copyright-free music. Learn about licensing, benefits, and practical applications for YouTube, podcasts, and social media.",
  keywords: "copyright free music, AI generated music, content creator music, royalty free music guide, music licensing, AI music for YouTube, podcast music",
  authors: [{ name: "Copyright-Free Music Guide" }],
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
  openGraph: {
    title: "The Content Creator Guide to AI-Generated, Copyright-Free Music",
    description: "Comprehensive guide for content creators on understanding and using AI-generated, copyright-free music.",
    url: "https://copyright-free-music-guide.vercel.app",
    siteName: "Copyright-Free Music Guide",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Music Guide for Content Creators"
      }
    ],
    locale: "en_US",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Content Creator Guide to AI-Generated, Copyright-Free Music",
    description: "Comprehensive guide for content creators on understanding and using AI-generated, copyright-free music.",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://copyright-free-music-guide.vercel.app"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} style={{ margin: 0, padding: 0 }}>
      <body className="min-h-full" style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
