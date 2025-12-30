import React from "react";
import { CheckCircle2, Sparkles, Award } from "lucide-react";

const WhyChooseUsData = [
  {
    features: [
      "End-to-end HR administration",
      "Cloud-based HR automation",
      "Flexible & scalable solutions",
      "Custom dashboard & reports",
      "Data security & privacy compliance",
    ],
  },
  {
    benefits: [
      "Saves time & reduces manual work",
      "Work from anywhere, anytime",
      "Perfect for SMEs, startups & enterprises",
      "Real-time insights & analytics",
      "100% secure employee information",
    ],
  },
];

const Whychooseus = () => {
  return (
    <div className="w-full flex flex-col mt-16 mb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#374053]">
            Why Choose Ktechnoit
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#374053]">
            for Your HR Management Needs?
          </h1>
          <p className="text-[#535c78] mt-6 text-base sm:text-lg max-w-xl mx-auto">
            We don’t just manage HR — we transform it.
          </p>
        </div>

        {/* Two-Column Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-10">

          {/* Features Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-[#374053]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#374053]">
                What We Offer
              </h2>
            </div>

            <ul className="space-y-4">
              {WhyChooseUsData[0].features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-[#535c78] text-base sm:text-lg leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg flex items-center justify-center">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#374053]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#374053]">
                Your Benefits
              </h2>
            </div>

            <ul className="space-y-4">
              {WhyChooseUsData[1].benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-[#535c78] text-base sm:text-lg leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-14">
          <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
            <div className="text-3xl sm:text-4xl font-bold text-[#374053] mb-1">100%</div>
            <p className="text-[#535c78] text-sm sm:text-base">Secure & Compliant</p>
          </div>

          <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
            <div className="text-3xl sm:text-4xl font-bold text-[#374053] mb-1">24/7</div>
            <p className="text-[#535c78] text-sm sm:text-base">Cloud Access</p>
          </div>

          <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
            <div className="text-3xl sm:text-4xl font-bold text-[#374053] mb-1">∞</div>
            <p className="text-[#535c78] text-sm sm:text-base">Scalable Growth</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#374053] text-base sm:text-lg font-semibold max-w-3xl mx-auto">
            Our goal is simple — make HR effortless, organized, and result-driven for your business.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Whychooseus;
