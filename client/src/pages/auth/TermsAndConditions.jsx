import React from "react";
import StaticPageLayout from "./StaticPageLayout";

function TermsAndConditions() {
  return (
    <StaticPageLayout>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Terms & Conditions</h1>
      
      <p className="mb-4">
        Welcome to <strong>SmartKart</strong>. By using our website or services, you agree to these Terms & Conditions. Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Our Services</h2>
      <p className="mb-4">
        To shop on SmartKart, you must create an account and provide accurate, up-to-date information. You are responsible for maintaining the confidentiality of your login credentials.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Digital Content & Software</h2>
      <p className="mb-4">
        All content, including images, text, and software, is the property of SmartKart or its licensors and is protected by copyright laws. Unauthorized use is strictly prohibited.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Availability & Connectivity</h2>
      <p className="mb-4">
        Some services may require an internet connection. SmartKart is not responsible for third-party internet charges or outages that may affect your experience.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Privacy & Data</h2>
      <p className="mb-4">
        We collect and process personal data in accordance with our <a href="/privacy-policy" className="text-primary underline">Privacy Policy</a>. By using SmartKart, you consent to this processing.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
      <p className="mb-4">
        SmartKart may update these Terms from time to time. Continued use of the site constitutes acceptance of any changes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Disclaimer & Liability</h2>
      <p className="mb-4">
        All products sold on SmartKart are provided "as is" without warranties. Our liability is limited to the maximum extent permitted by law.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p>
        For help or inquiries, please contact us at <a href="/contact" className="text-primary underline">smartkart.com/contact</a>.
      </p>
    </div>
    </StaticPageLayout>
  );
}

export default TermsAndConditions;
