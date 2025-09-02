import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "KasuaBuy - Northern Nigeria's Premier Marketplace | Connect Buyers & Sellers",
  description: "KasuaBuy is Northern Nigeria's leading marketplace connecting local businesses, artisans, and consumers. Discover authentic products, support local entrepreneurs, and experience seamless buying and selling in Hausa and English.",
  keywords: "Northern Nigeria marketplace, Hausa marketplace, local business, artisans, buyers sellers, Nigerian ecommerce, Arewa marketplace, local products, traditional crafts",
  authors: [{ name: "KasuaBuy Team" }],
  creator: "KasuaBuy",
  publisher: "KasuaBuy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ha_NG',
    url: 'https://kasuabuy.com',
    siteName: 'KasuaBuy',
    title: 'KasuaBuy - Northern Nigeria\'s Premier Marketplace',
    description: 'Connect with local businesses, artisans, and consumers in Northern Nigeria. Discover authentic products and support local entrepreneurs on KasuaBuy.',
    images: [
      {
        url: '/Kasuabuy.png',
        width: 1200,
        height: 630,
        alt: 'KasuaBuy - Northern Nigeria Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@KasuaBuy',
    creator: '@KasuaBuy',
    title: 'KasuaBuy - Northern Nigeria\'s Premier Marketplace',
    description: 'Connect with local businesses, artisans, and consumers in Northern Nigeria. Discover authentic products and support local entrepreneurs.',
    images: ['/Kasuabuy.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/Kasuabuy.png',
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': '#5F017B',
    'msapplication-TileColor': '#5F017B',
    'msapplication-config': '/browserconfig.xml',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
