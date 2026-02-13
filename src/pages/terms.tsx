import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useTranslation } from 'next-i18next';
import { FloatingNav } from '../components/floating-nav';
import BottomSection from '../components/BottomSection';

export default function Terms() {
  // const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Terms & Conditions | KasuaBuy</title>
        <meta name="description" content="Terms & Conditions for KasuaBuy - Northern Nigeria's Premier Marketplace." />
      </Head>

      <div className="bg-gray-50 min-h-screen flex flex-col">
        <FloatingNav />

        <main className="flex-grow container mx-auto px-4 py-24 md:py-32 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#5F017B] mb-8">KASUABUY TERMS & CONDITIONS</h1>
            <p className="text-gray-600 mb-8">Welcome to KasuaBuy<br/>Last Updated: 16 December 2025</p>

            <div className="space-y-8 text-gray-700">
              <section>
                <p className="mb-4">
                  KasuaBuy is a digital marketplace platform operated by KasuaBuy Technologies Ltd (“KasuaBuy”, “we”, “our”, “us”).
                </p>
                <p className="mb-4">
                  By accessing or using the KasuaBuy mobile application or website (together called the “Platform”), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the Platform.
                </p>
                <p>
                  We know legal terms can be long, but they are important. Please read them carefully.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">1. General Terms</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>1.1 These Terms govern how you access and use the KasuaBuy Platform and all related services.</li>
                  <li>1.2 By using KasuaBuy, you confirm that you accept these Terms and agree to follow them.</li>
                  <li>1.3 If you violate any part of these Terms, we may suspend or terminate your access to the Platform.</li>
                  <li>1.4 We may update these Terms from time to time. Any changes will be communicated on the Platform and will take effect immediately.</li>
                  <li>1.5 If you do not agree with any update, you should stop using the Platform.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">2. What KasuaBuy Does</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>2.1 KasuaBuy is a multi-category marketplace that connects Users with independent vendors across different categories such as food, groceries, household items, fashion, electronics, local market goods, and services.</li>
                  <li>2.2 KasuaBuy does NOT sell products directly. Vendors list and sell their own products and services on the Platform.</li>
                  <li>2.3 KasuaBuy only provides the technology, payment coordination, and logistics support that make transactions possible.</li>
                  <li>2.4 Vendors on KasuaBuy are independent businesses. KasuaBuy does not own, control, or manage their operations.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">3. Prohibited Items (Very Important)</h2>
                <p className="mb-4">3.1 The following items and services are strictly prohibited on KasuaBuy:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Over-the-counter (OTC) drugs</li>
                  <li>Prescription drugs</li>
                  <li>Medical or pharmaceutical products</li>
                  <li>Any illegal, restricted, or regulated goods</li>
                </ul>
                <ul className="list-disc pl-6 space-y-2">
                  <li>3.2 Vendors who list prohibited items may have their accounts suspended or permanently removed.</li>
                  <li>3.3 KasuaBuy will not be liable for any illegal listings uploaded by vendors.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">4. Platform Availability</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>4.1 We do not guarantee that the Platform will always be available or error-free.</li>
                  <li>4.2 KasuaBuy is not responsible for interruptions caused by maintenance, technical issues, or external factors.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">5. User Accounts & Registration</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>5.1 You must be 18 years or older to use KasuaBuy.</li>
                  <li>5.2 To place orders, you must create an account and provide accurate information including your name, phone number, and delivery address.</li>
                  <li>5.3 You are responsible for keeping your login details secure.</li>
                  <li>5.4 Any activity carried out using your account is your responsibility.</li>
                  <li>5.5 We may request additional information to verify your identity.</li>
                  <li>5.6 You may close your account at any time.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">6. Payments</h2>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>6.1 Payments on KasuaBuy are processed through third-party payment providers.</li>
                  <li>6.2 Accepted payment methods may include:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Cards</li>
                      <li>Bank transfers</li>
                      <li>Wallets</li>
                      <li>QR payments</li>
                      <li>Any other payment options made available</li>
                    </ul>
                  </li>
                  <li>6.3 KasuaBuy does not store your card or banking details.</li>
                  <li>6.4 Prices and delivery fees are shown at checkout before confirmation.</li>
                  <li>6.5 Once payment is completed, the order is considered confirmed.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">7. Orders & Cancellations</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>7.1 Orders can only be cancelled before they are accepted by the vendor.</li>
                  <li>7.2 Once a vendor accepts an order, cancellation may no longer be possible.</li>
                  <li>7.3 KasuaBuy is not responsible for vendor stock availability or pricing changes.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">8. Delivery</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>8.1 Delivery may be handled by KasuaBuy logistics partners or third-party riders.</li>
                  <li>8.2 You are responsible for providing accurate delivery details.</li>
                  <li>8.3 Failed deliveries due to incorrect information may not be refunded.</li>
                  <li>8.4 If an order is incomplete or incorrect, contact customer support immediately.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">9. Vendor Responsibility</h2>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>9.1 Vendors are responsible for:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Product quality</li>
                      <li>Accuracy of descriptions</li>
                      <li>Compliance with applicable laws</li>
                    </ul>
                  </li>
                  <li>9.2 KasuaBuy does not guarantee the quality, safety, or legality of vendor products.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">10. Intellectual Property</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>10.1 All content on the Platform belongs to KasuaBuy or its licensors.</li>
                  <li>10.2 You may not copy, modify, or reuse any part of the Platform without written permission.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">11. No Professional Advice</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>11.1 Content on KasuaBuy is provided for general information only.</li>
                  <li>11.2 You should not rely on Platform content as professional or commercial advice.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">12. Limitation of Liability</h2>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>12.1 KasuaBuy is not liable for:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Vendor actions or omissions</li>
                      <li>Product defects</li>
                      <li>Delivery delays</li>
                      <li>Losses arising from Platform downtime</li>
                    </ul>
                  </li>
                  <li>12.2 Use of the Platform is at your own risk, to the fullest extent permitted by law.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">13. Indemnity</h2>
                <p className="mb-4">13.1 You agree to indemnify KasuaBuy against claims arising from:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your misuse of the Platform</li>
                  <li>Violation of these Terms</li>
                  <li>Breach of applicable laws</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">14. Account Suspension & Termination</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>14.1 We may suspend or terminate accounts for violations of these Terms.</li>
                  <li>14.2 Termination takes effect immediately once communicated.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">15. Restricted Use</h2>
                <p className="mb-4">15.1 You must not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Platform for illegal purposes</li>
                  <li>Attempt to reverse-engineer the Platform</li>
                  <li>Engage in fraud or abuse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">16. Electronic Communication</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>16.1 By using KasuaBuy, you consent to receiving electronic communications.</li>
                  <li>16.2 Electronic records are considered legally valid.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">17. Privacy & Data</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>17.1 KasuaBuy collects and processes personal data according to its Privacy Policy.</li>
                  <li>17.2 We only share data when necessary to complete transactions or as required by law.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">18. Complaints & Support</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>18.1 Complaints can be submitted via in-app support or official KasuaBuy contact channels.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">19. Promotions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>19.1 Promotional codes are subject to specific rules and may expire.</li>
                  <li>19.2 Promo codes have no cash value and may be withdrawn at any time.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">20. Governing Law</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>20.1 These Terms are governed by the laws of the Federal Republic of Nigeria.</li>
                  <li>20.2 Any disputes shall be resolved in Nigerian courts.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">21. Severability</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>21.1 If any part of these Terms is found invalid, the remaining sections remain enforceable.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">22. Final Note</h2>
                <p>
                  KasuaBuy acts only as a technology marketplace and is not the seller of goods listed on the Platform.
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
