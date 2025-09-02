import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export type Language = 'en' | 'ha';

export function useLanguage() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  useEffect(() => {
    // Check if language is already selected and stored
    const storedLanguage = localStorage.getItem('preferred-language') as Language;
    
    if (storedLanguage && ['en', 'ha'].includes(storedLanguage)) {
      setSelectedLanguage(storedLanguage);
      // Only change locale if it's different and router is ready
      if (router.isReady && router.locale !== storedLanguage) {
        router.push(router.asPath, router.asPath, { locale: storedLanguage, shallow: false });
      }
    } else {
      // Show language selection modal if no language is stored
      setShowLanguageModal(true);
    }
  }, [router.isReady, router.locale]);

  const selectLanguage = (language: Language) => {
    // Store the selected language
    localStorage.setItem('preferred-language', language);
    setSelectedLanguage(language);
    setShowLanguageModal(false);
    
    // Change the locale using next-i18next router and reload to ensure translations update
    if (router.locale !== language) {
      router.push(router.asPath, router.asPath, { locale: language, shallow: false }).then(() => {
        // Force reload to ensure translations are properly loaded
        window.location.reload();
      });
    }
  };

  const getCurrentLanguage = (): Language => {
    return selectedLanguage || (router.locale as Language) || 'en';
  };

  return {
    selectedLanguage,
    showLanguageModal,
    setShowLanguageModal,
    selectLanguage,
    getCurrentLanguage,
  };
}