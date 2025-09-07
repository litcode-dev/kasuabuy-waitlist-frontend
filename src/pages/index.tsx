import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useTranslation } from 'next-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageModal from '@/components/LanguageModal';
// import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WaitlistSection from '@/components/WaitlistSection';
import BottomSection from '@/components/BottomSection';
import { FloatingNav } from '@/components/floating-nav';

export default function Home() {
//   const { t } = useTranslation('common');
  const { showLanguageModal, setShowLanguageModal } = useLanguage();

  // Test function to trigger language modal
//   const testLanguageModal = () => {
//     localStorage.removeItem('preferred-language');
//     setShowLanguageModal(true);
//   };

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>KasuaBuy - Northern Nigeria&apos;s Premier Marketplace | Join Waitlist 2025</title>
        <meta name="description" content="Join KasuaBuy waitlist - Northern Nigeria's revolutionary marketplace launching 2025. Connect local businesses, artisans & consumers. Buy & sell authentic products in Hausa & English. Support Arewa entrepreneurs today!" />
        <meta name="keywords" content="KasuaBuy waitlist, Northern Nigeria marketplace, Hausa marketplace, Arewa ecommerce, local business Nigeria, artisans marketplace, Nigerian entrepreneurs, Kano marketplace, Kaduna business, Sokoto traders, Maiduguri commerce, Gombe market, Bauchi sellers, Katsina business, Jigawa marketplace, Yobe commerce, Borno traders, Kebbi market, Zamfara business, traditional crafts Nigeria, Islamic marketplace, Fulani products, Hausa traders" />
        <meta name="author" content="KasuaBuy Team" />
        <meta name="creator" content="KasuaBuy" />
        <meta name="publisher" content="KasuaBuy" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="English, Hausa" />
        <meta name="geo.region" content="NG" />
        <meta name="geo.country" content="Nigeria" />
        <meta name="geo.placename" content="Northern Nigeria" />
        <meta name="ICBM" content="11.0, 8.0" />
        <meta name="DC.title" content="KasuaBuy - Northern Nigeria Marketplace" />
        <meta name="DC.creator" content="KasuaBuy Team" />
        <meta name="DC.subject" content="Northern Nigeria marketplace, ecommerce, local business" />
        <meta name="DC.description" content="Revolutionary marketplace for Northern Nigeria launching 2025" />
        <meta name="DC.publisher" content="KasuaBuy" />
        <meta name="DC.contributor" content="Northern Nigeria Business Community" />
        <meta name="DC.date" content="2025" />
        <meta name="DC.type" content="website" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://kasuabuy.com" />
        <meta name="DC.language" content="en, ha" />
        <meta name="DC.coverage" content="Northern Nigeria" />
        <meta name="DC.rights" content="© 2025 KasuaBuy. All rights reserved." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://kasuabuy.com" />
        
        {/* Viewport and Charset */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Enhanced Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ha_NG" />
        <meta property="og:url" content="https://kasuabuy.com" />
        <meta property="og:site_name" content="KasuaBuy" />
        <meta property="og:title" content="KasuaBuy - Join Northern Nigeria's Revolutionary Marketplace Waitlist" />
        <meta property="og:description" content="🚀 Join KasuaBuy waitlist today! Northern Nigeria's first bilingual marketplace launching 2025. Connect with local artisans, entrepreneurs & consumers. Support Arewa businesses. Early access guaranteed!" />
        <meta property="og:image" content="https://kasuabuy.com/Kasuabuy.png" />
        <meta property="og:image:secure_url" content="https://kasuabuy.com/Kasuabuy.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="KasuaBuy - Northern Nigeria's Revolutionary Marketplace launching 2025" />
        <meta property="og:image:type" content="image/png" />
        <meta property="article:author" content="KasuaBuy Team" />
        <meta property="article:publisher" content="https://kasuabuy.com" />
        <meta property="og:updated_time" content="2025-01-01T00:00:00Z" />
        
        {/* Enhanced Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@KasuaBuy" />
        <meta name="twitter:creator" content="@KasuaBuy" />
        <meta name="twitter:title" content="🚀 Join KasuaBuy Waitlist - Northern Nigeria's Revolutionary Marketplace" />
        <meta name="twitter:description" content="Join the waitlist for Northern Nigeria's first bilingual marketplace! Launching 2025. Connect local businesses, artisans & consumers. Support Arewa entrepreneurs. Early access guaranteed!" />
        <meta name="twitter:image" content="https://kasuabuy.com/Kasuabuy.png" />
        <meta name="twitter:image:alt" content="KasuaBuy - Northern Nigeria's Revolutionary Marketplace launching 2025" />
        <meta name="twitter:domain" content="kasuabuy.com" />
        <meta name="twitter:url" content="https://kasuabuy.com" />
        <meta name="twitter:label1" content="Launch Date" />
        <meta name="twitter:data1" content="2025" />
        <meta name="twitter:label2" content="Region" />
        <meta name="twitter:data2" content="Northern Nigeria" />
        
        {/* Icons and Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/Kasuabuy.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Performance and Security */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Theme and App Configuration */}
        <meta name="theme-color" content="#5F017B" />
        <meta name="msapplication-TileColor" content="#5F017B" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="KasuaBuy" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "KasuaBuy",
              "alternateName": "KasuaBuy Marketplace",
              "url": "https://kasuabuy.com",
              "description": "Northern Nigeria's revolutionary marketplace launching 2025. Connect local businesses, artisans, and consumers in a bilingual platform supporting Hausa and English.",
              "inLanguage": ["en", "ha"],
              "audience": {
                "@type": "Audience",
                "geographicArea": {
                  "@type": "Place",
                  "name": "Northern Nigeria",
                  "containedInPlace": {
                    "@type": "Country",
                    "name": "Nigeria"
                  }
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://kasuabuy.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "KasuaBuy",
                "url": "https://kasuabuy.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://kasuabuy.com/Kasuabuy.png",
                  "width": 1200,
                  "height": 630
                },
                "sameAs": [
                  "https://twitter.com/KasuaBuy",
                  "https://facebook.com/KasuaBuy",
                  "https://instagram.com/KasuaBuy"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "areaServed": "NG",
                  "availableLanguage": ["English", "Hausa"]
                }
              },
              "mainEntity": {
                "@type": "WebApplication",
                "name": "KasuaBuy Marketplace",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "NGN",
                  "availability": "https://schema.org/ComingSoon"
                },
                "featureList": [
                  "Bilingual marketplace (English & Hausa)",
                  "Local business directory",
                  "Artisan marketplace",
                  "Secure payment system",
                  "Community networking",
                  "Mobile-first design"
                ]
              }
            })
          }}
        />
      </Head>
      
      <div className="h-[100svh] md:h-[70dvh] lg:h-[100dvh] bg-gray-50">
        {/* Test Button for Language Modal - Remove in production */}
      {/* <button
        onClick={testLanguageModal}
        className="fixed top-4 right-4 z-50 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition-colors"
        style={{ fontSize: '12px' }}
      >
        Test Language Modal
      </button> */}

      {/* Language Selection Modal */}
      <LanguageModal
        isOpen={showLanguageModal}
        onClose={() => setShowLanguageModal(false)}
      />

      {/* Floating Navigation */}
      {/* <KasuaBuyFloatingNav /> */}

      <FloatingNav />

      {/* Header */}
      {/* <Header /> */}

      {/* Hero Section */}
      <HeroSection />

      {/* Waitlist Section */}
      <WaitlistSection />

        {/* Bottom Section */}
        <BottomSection />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
