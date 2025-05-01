import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import StaticPageLayout from "./StaticPageLayout";

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "Click the Register button on the top right and fill out the required details to create your account.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit cards, debit cards, UPI, and net banking.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, once your order is shipped, you'll receive an email with the tracking information.",
  },
  {
    question: "What is the return policy?",
    answer:
      "We offer a 7-day return policy. Items must be unused and in original packaging.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach out to our support team via the Contact Us page or email support@smartkart.com.",
  },
];

function FaqPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <StaticPageLayout>
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-900"
            >
              {faq.question}
              {activeIndex === index ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    </StaticPageLayout>
  );
}

export default FaqPage;
