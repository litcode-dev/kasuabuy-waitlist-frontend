import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { FloatingNav } from '../components/floating-nav';
import BottomSection from '../components/BottomSection';

export default function Privacy() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Privacy Policy | KasuaBuy</title>
        <meta name="description" content="Privacy Policy for KasuaBuy - Northern Nigeria's Premier Marketplace." />
      </Head>

      <div className="bg-gray-50 min-h-screen flex flex-col">
        <FloatingNav />

        <main className="flex-grow container mx-auto px-4 py-24 md:py-32 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#5F017B] mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">KasuaBuy Technologies Ltd<br/>Last Updated: December 2025</p>

            <div className="space-y-8 text-gray-700">
              <section>
                <p className="mb-4">
                  KasuaBuy Technologies Ltd (“KasuaBuy”, “we”, “our”, “us”) operates a digital marketplace that connects users with independent vendors offering goods and services across multiple categories. Your privacy matters to us, and this Privacy Policy explains how we collect, use, protect, and share your personal information when you use our website or mobile application (together called the “Platform”).
                </p>
                <p className="mb-4">
                  “Personal information” means any information that can identify you, such as your name, phone number, email address, delivery address, or other related data.
                </p>
                <p>
                  By using KasuaBuy, you agree to this Privacy Policy and our Terms & Conditions. If you have any questions, you can contact us at <a href="mailto:support@kasuabuy.com" className="text-[#5F017B] hover:underline">support@kasuabuy.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">1. Updates to This Privacy Policy</h2>
                <p className="mb-4">We may update this Privacy Policy from time to time to reflect:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>changes in the law (including the Nigeria Data Protection Act (NDPA) 2023),</li>
                  <li>improvements to our services,</li>
                  <li>new features or technologies.</li>
                </ul>
                <p>Whenever we make changes, we will update this page and notify users through the app or website where required.</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">2. How We Collect Personal Information</h2>
                <p className="mb-4">We collect personal information when you:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>create or update a KasuaBuy account;</li>
                  <li>place an order or request a service;</li>
                  <li>contact customer support;</li>
                  <li>subscribe to notifications, promotions, or newsletters;</li>
                  <li>participate in surveys, promotions, or campaigns;</li>
                  <li>use or browse our Platform;</li>
                  <li>give consent for us to collect data from third parties where allowed by law (such as payment processors or fraud-prevention services).</li>
                </ul>
                <p>We only collect information that is necessary to provide our services.</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">3. Cookies and Similar Technologies</h2>
                <p className="mb-4">KasuaBuy uses cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>remember your preferences,</li>
                  <li>understand how you use our Platform,</li>
                  <li>improve performance and user experience.</li>
                </ul>
                <p>Cookies do not identify you personally on their own and do not damage your device. You can control cookies through your browser settings, but disabling them may affect how the Platform works.</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">4. How We Use Your Information</h2>
                <p className="mb-4">We may use your personal information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>provide and manage our marketplace services;</li>
                  <li>connect you with nearby vendors;</li>
                  <li>process orders, payments, and deliveries;</li>
                  <li>communicate with you about orders, updates, or support issues;</li>
                  <li>improve and personalize your experience;</li>
                  <li>prevent fraud and unauthorized activities;</li>
                  <li>comply with legal and regulatory obligations;</li>
                  <li>conduct research, analytics, and service improvement;</li>
                  <li>send promotional messages (where you have consented);</li>
                  <li>generate aggregated reports for vendors (without identifying you personally).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">5. Consent</h2>
                <p className="mb-4">
                  By creating an account or using KasuaBuy, you consent to the collection and use of your personal information as described in this Policy.
                </p>
                <p>
                  You may withdraw your consent or request changes to how your data is processed by contacting <a href="mailto:support@kasuabuy.com" className="text-[#5F017B] hover:underline">support@kasuabuy.com</a>. If you withdraw consent for essential data processing, you may no longer be able to use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">6. Legal Basis for Processing Data</h2>
                <p className="mb-4">We process your personal data because:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>it is necessary to perform our contract with you (e.g., fulfilling orders);</li>
                  <li>we have your consent;</li>
                  <li>we are required to comply with legal obligations;</li>
                  <li>it is in our legitimate business interest (such as fraud prevention).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">7. Types of Personal Information We Collect</h2>
                <p className="mb-4">Depending on how you use KasuaBuy, we may collect:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>account details (name, email, phone number, address);</li>
                  <li>order and transaction history;</li>
                  <li>delivery location information;</li>
                  <li>device and technical data (device type, OS, IP address);</li>
                  <li>payment-related information (processed securely by third-party providers);</li>
                  <li>communication records with customer support;</li>
                  <li>survey or feedback responses (where voluntarily provided).</li>
                </ul>
                <p>If you provide third-party information, you confirm that you have obtained their consent.</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Services</h2>
                <p>
                  KasuaBuy may link to or integrate with third-party services (such as payment providers or social media platforms). These third parties operate independently and have their own privacy policies. We encourage you to review them before sharing information.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">9. Location Information</h2>
                <p className="mb-4">To function properly, KasuaBuy may request access to your location to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>show vendors near you,</li>
                  <li>improve delivery accuracy.</li>
                </ul>
                <p>Location access can be controlled through your device settings.</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">10. Communications</h2>
                <p className="mb-4">We may record communications made through our Platform (such as in-app chats or emails) for:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>customer support,</li>
                  <li>quality assurance,</li>
                  <li>fraud prevention,</li>
                  <li>dispute resolution.</li>
                </ul>
                <p>By using these features, you consent to such recording.</p>
              </section>
              
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">11. Surveys and Feedback</h2>
                <p>
                  Participation in surveys is optional. Any information you provide will be used to improve our services and handled in line with this Policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">12. Sharing Your Information</h2>
                <p className="mb-4">We do not sell or rent your personal information.</p>
                <p className="mb-4">We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>vendors and logistics partners (to fulfill orders);</li>
                  <li>payment processors;</li>
                  <li>customer support and service providers;</li>
                  <li>legal or regulatory authorities where required by law;</li>
                  <li>auditors, investors, or professional advisers (under confidentiality).</li>
                </ul>
                <p>All third parties are required to protect your data and use it only for approved purposes.</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">13. Data Security</h2>
                <p className="mb-4">We use technical, physical, and administrative safeguards to protect your information, including:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>encryption,</li>
                  <li>secure servers,</li>
                  <li>restricted access controls.</li>
                </ul>
                <p>However, no system is completely secure, and you are responsible for keeping your login details confidential.</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">14. Data Retention</h2>
                <p className="mb-4">We retain personal information only for as long as necessary to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>provide our services,</li>
                  <li>comply with legal obligations,</li>
                  <li>resolve disputes,</li>
                  <li>prevent fraud.</li>
                </ul>
                <p>When data is no longer needed, it is securely deleted or anonymized.</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">15. Marketing Communications</h2>
                <p>
                  If you opt in, we may send you promotions and updates. You can unsubscribe at any time. Transactional messages (such as order confirmations) will still be sent when required.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">16. Your Data Rights</h2>
                <p className="mb-4">Under applicable data protection laws, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>access your personal data;</li>
                  <li>correct inaccurate information;</li>
                  <li>request deletion or restriction of processing;</li>
                  <li>withdraw consent;</li>
                  <li>request data portability (where applicable).</li>
                </ul>
                <p>Requests can be made via <a href="mailto:support@kasuabuy.com" className="text-[#5F017B] hover:underline">support@kasuabuy.com</a>, and we may verify your identity before responding.</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">17. Data Protection Officer (DPO)</h2>
                <p className="mb-2">KasuaBuy has appointed a Data Protection Officer in line with NDPA 2023.</p>
                <p><a href="mailto:legal@kasuabuy.com" className="text-[#5F017B] hover:underline">legal@kasuabuy.com</a></p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">18. Governing Law</h2>
                <p>
                  This Privacy Policy is governed by the laws of the Federal Republic of Nigeria.
                </p>
              </section>
            </div>
          </div>
        </main>

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
