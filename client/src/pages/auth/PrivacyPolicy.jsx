import React from 'react';
import StaticPageLayout from './StaticPageLayout';

const PrivacyPolicy = () => {
  return (
    <StaticPageLayout>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-6">Last Updated: April 29, 2025</p>

      <p className="mb-4">
        Welcome to <strong>SmartKart</strong>! Your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, mobile app, and services (together, “SmartKart Services”).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>You Provide:</strong> Name, address, email, phone number, and payment details.</li>
        <li><strong>Automatic Collection:</strong> Device info, browsing behavior, IP address, and cookies.</li>
        <li><strong>From Other Sources:</strong> Delivery and payment partners may share updated info.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Why We Collect Your Data</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To process and deliver your orders.</li>
        <li>To personalize your shopping experience.</li>
        <li>To provide customer support and improve our services.</li>
        <li>To detect and prevent fraud.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies & Identifiers</h2>
      <p className="mb-4">
        We use cookies to enhance your experience, analyze traffic, and show relevant offers.
        You can manage cookie preferences through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Sharing Your Information</h2>
      <p className="mb-4">
        We do <strong>not sell</strong> your personal data. We may share it with:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Trusted third-party partners (e.g., delivery and payment services).</li>
        <li>Legal authorities, if required by law.</li>
        <li>Service providers under confidentiality agreements.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Choices</h2>
      <ul className="list-disc list-inside mb-4">
        <li>You can update your account info at any time.</li>
        <li>You can opt out of marketing emails and interest-based ads.</li>
        <li>You may disable cookies, but some features may not work properly.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Data Security</h2>
      <p className="mb-4">
        We use encryption, secure servers, and best practices to protect your data. However, always protect your account and sign out when using shared devices.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Children’s Privacy</h2>
      <p className="mb-4">
        SmartKart does not knowingly collect data from users under 18 without parental consent.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy as needed. Please check this page regularly. Continued use of SmartKart Services means you agree to these changes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
      <p className="mb-4">
        If you have questions or concerns, please contact our support team at <a href="mailto:privacy@smartkart.com" className="text-blue-600 hover:underline">privacy@smartkart.com</a>.
      </p>
    </div>
    </StaticPageLayout>
    
  );
};

export default PrivacyPolicy;
