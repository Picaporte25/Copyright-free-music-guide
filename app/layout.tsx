import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
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
      <body className="min-h-full" style={{ margin: 0, padding: 0 }}>
        {children}
        <Analytics />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://copyright-free-music-guide.vercel.app/#webpage",
                  "url": "https://copyright-free-music-guide.vercel.app/",
                  "name": "The Content Creator Guide to AI-Generated, Copyright-Free Music",
                  "isPartOf": {
                    "@id": "https://copyright-free-music-guide.vercel.app/#website"
                  },
                  "description": "Comprehensive guide for content creators on understanding and using AI-generated, copyright-free music. Learn about licensing, benefits, and practical applications for YouTube, podcasts, and social media.",
                  "inLanguage": "en-US",
                  "potentialAction": [
                    {
                      "@type": "ReadAction",
                      "target": ["https://copyright-free-music-guide.vercel.app/"]
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://copyright-free-music-guide.vercel.app/#website",
                  "url": "https://copyright-free-music-guide.vercel.app/",
                  "name": "Copyright-Free Music Guide",
                  "description": "Comprehensive guide for content creators on understanding and using AI-generated, copyright-free music.",
                  "publisher": {
                    "@id": "https://copyright-free-music-guide.vercel.app/#organization"
                  },
                  "inLanguage": "en-US"
                },
                {
                  "@type": "Organization",
                  "@id": "https://copyright-free-music-guide.vercel.app/#organization",
                  "name": "PearlSonic",
                  "url": "https://pearl-sonic.vercel.app",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://pearl-sonic.vercel.app/logo.png",
                    "caption": "PearlSonic Logo"
                  },
                  "sameAs": [
                    "https://pearl-sonic.vercel.app"
                  ]
                },
                {
                  "@type": "Article",
                  "@id": "https://copyright-free-music-guide.vercel.app/#article",
                  "isPartOf": {
                    "@id": "https://copyright-free-music-guide.vercel.app/#webpage"
                  },
                  "author": {
                    "@id": "https://copyright-free-music-guide.vercel.app/#organization"
                  },
                  "headline": "The Content Creator Guide to AI-Generated, Copyright-Free Music",
                  "datePublished": "2026-04-07",
                  "dateModified": "2026-04-08",
                  "mainEntityOfPage": {
                    "@id": "https://copyright-free-music-guide.vercel.app/#webpage"
                  },
                  "wordCount": 1800,
                  "commentCount": 0,
                  "publisher": {
                    "@id": "https://copyright-free-music-guide.vercel.app/#organization"
                  },
                  "image": {
                    "@id": "https://copyright-free-music-guide.vercel.app/#primaryimage"
                  },
                  "thumbnailUrl": "https://copyright-free-music-guide.vercel.app/og-image.jpg",
                  "inLanguage": "en-US",
                  "potentialAction": [
                    {
                      "@type": "CommentAction",
                      "name": "Comment",
                      "target": ["https://copyright-free-music-guide.vercel.app/#respond"]
                    }
                  ]
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://copyright-free-music-guide.vercel.app/"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
