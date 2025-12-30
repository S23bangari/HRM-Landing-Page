"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faq = [
  {
    title: "What are HR Management Services?",
    answer: [
      "HR Management Services refer to professional support that helps businesses manage recruitment, payroll, attendance, performance, employee data, and compliance. It reduces manual work and improves workforce productivity through structured HR processes and automation.",
    ],
  },
  {
    title: "Why does a business need Human Resource Management Services?",
    answer: [
      "Streamline hiring, onboarding, and payroll",
      "Automate attendance & leave management",
      "Maintain compliance and legal documentation",
      "Improve employee engagement & retention",
      "Save time and operational cost",
    ],
  },
  {
    title: "What HR services do Ktechno IT provide?",
    answer: [
      "Recruitment & onboarding",
      "Attendance and payroll automation",
      "Performance & appraisal management",
      "HR documentation and policy setup",
      "Employee engagement & support",
      "Compliance and data security",
    ],
  },
  {
    title: "Do you provide custom HRM software or HRMS systems?",
    answer: [
      "Yes. We develop custom HRM systems, HR & payroll software, employee portals, and cloud-based HR dashboards as per business requirements and workflow.",
    ],
  },
  {
    title: "Can your HR solutions integrate with our existing software?",
    answer: [
      "Yes, we offer integration with CRM, ERP, payroll tools, biometric attendance, accounting software, and third-party applications.",
    ],
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full px-6 sm:px-10 py-20 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h1 className="text-center text-[#374053] font-extrabold text-3xl sm:text-4xl md:text-5xl mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base sm:text-lg">
          Everything you need to know about our HRM services & solutions.
        </p>

        {/* FAQ List */}
        <div className="space-y-6">
          {faq.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[#374053] text-left">
                  {item.title}
                </h3>
                {openIndex === i ? (
                  <ChevronUp className="text-gray-600" />
                ) : (
                  <ChevronDown className="text-gray-600" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`mt-4 overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="text-gray-700 text-sm sm:text-base leading-relaxed ml-1 space-y-2">
                  {item.answer.map((ans, index) => (
                    <li key={index} className="flex items-start">
                      • <span className="ml-2">{ans}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Faq;
