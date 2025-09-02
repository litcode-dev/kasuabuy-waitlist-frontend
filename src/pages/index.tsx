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
        <title>KasuaBuy - Northern Nigeria&apos;s Premier Marketplace | Connect Buyers & Sellers</title>
        <meta name="description" content="KasuaBuy is Northern Nigeria's leading marketplace connecting local businesses, artisans, and consumers. Discover authentic products, support local entrepreneurs, and experience seamless buying and selling in Hausa and English." />
        <meta name="keywords" content="Northern Nigeria marketplace, Hausa marketplace, local business, artisans, buyers sellers, Nigerian ecommerce, Arewa marketplace, local products, traditional crafts" />
        <meta name="author" content="KasuaBuy Team" />
        <meta name="creator" content="KasuaBuy" />
        <meta name="publisher" content="KasuaBuy" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        
        {/* Viewport and Charset */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ha_NG" />
        <meta property="og:url" content="https://kasuabuy.com" />
        <meta property="og:site_name" content="KasuaBuy" />
        <meta property="og:title" content="KasuaBuy - Northern Nigeria's Premier Marketplace" />
        <meta property="og:description" content="Connect with local businesses, artisans, and consumers in Northern Nigeria. Discover authentic products and support local entrepreneurs on KasuaBuy." />
        <meta property="og:image" content="/Kasuabuy.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="KasuaBuy - Northern Nigeria Marketplace" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@KasuaBuy" />
        <meta name="twitter:creator" content="@KasuaBuy" />
        <meta name="twitter:title" content="KasuaBuy - Northern Nigeria's Premier Marketplace" />
        <meta name="twitter:description" content="Connect with local businesses, artisans, and consumers in Northern Nigeria. Discover authentic products and support local entrepreneurs." />
        <meta name="twitter:image" content="/Kasuabuy.png" />
        
        {/* Icons and Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/Kasuabuy.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme and App Configuration */}
        <meta name="theme-color" content="#5F017B" />
        <meta name="msapplication-TileColor" content="#5F017B" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
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
