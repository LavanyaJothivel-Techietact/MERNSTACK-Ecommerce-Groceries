import StaticPageLayout from "./StaticPageLayout";

function AboutUsPage() {
    return (
    <StaticPageLayout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">About SmartKart</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          At <strong>SmartKart</strong>, we aim to make online shopping seamless, secure, and satisfying for everyone.
        </p>
  
        <div className="grid gap-8 lg:grid-cols-2 mt-10">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-700">
              We’re here to connect quality products with smart buyers. Whether it's fashion, electronics, or home goods, SmartKart ensures a smooth shopping experience with fast delivery and top-notch service.
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Wide range of products from trusted brands</li>
              <li>Secure payment methods</li>
              <li>Fast and reliable delivery</li>
              <li>Friendly customer support</li>
              <li>Easy returns and refunds</li>
            </ul>
          </div>
        </div>
  
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-700">
            Have questions or need help? Reach out to us at{" "}
            <a href="mailto:support@smartkart.com" className="text-blue-600 underline">
              support@smartkart.com
            </a>
          </p>
        </div>
      </div>
      </StaticPageLayout>
    );
  }
  
  export default AboutUsPage;
  