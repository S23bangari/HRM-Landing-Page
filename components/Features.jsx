import React from "react";
import { CheckCircle2, Users, Calendar, TrendingUp, FileText, Heart } from "lucide-react";

const Services = [
  {
    title: "Recruitment & Talent Acquisition",
    features: [
      "Automated recruitment & applicant tracking",
      "Job posting, resume screening & interview scheduling",
      "Hiring pipeline and onboarding workflow setup"
    ]
  },
  {
    title: "Attendance, Leave & Payroll Automation",
    features: [
      "Real-time attendance tracking & shift scheduling",
      "Leave management with approval workflows",
      "Accurate payroll, taxes, and compliance reports"
    ]
  },
  {
    title: "Performance & Employee Evaluation",
    features: [
      "KPI-based performance management",
      "Appraisal cycles, feedback tools & review dashboards",
      "Employee growth planning & productivity tracking"
    ]
  },
  {
    title: "HR Policy, Compliance & Documentation",
    features: [
      "HR policies, contracts & documentation setup",
      "Compliance with labor rules & HR legal standards",
      "Secure cloud-based record keeping"
    ]
  },
  {
    title: "Employee Engagement & Support",
    features: [
      "Training & development programs",
      "Employee support, retention & engagement strategy",
      "Healthy workplace culture & communication tools"
    ]
  }
];

const iconMap = {
  "Recruitment & Talent Acquisition": Users,
  "Attendance, Leave & Payroll Automation": Calendar,
  "Performance & Employee Evaluation": TrendingUp,
  "HR Policy, Compliance & Documentation": FileText,
  "Employee Engagement & Support": Heart
};

const Features = () => {
  return (
    <main id="features" className="w-full flex flex-col mt-20 mb-40 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-[#374053]">
            HRM made easy
          </h1>
          <p className="text-[#535c78] mt-4 text-lg max-w-2xl mx-auto">
            Our HRM application is designed to simplify your HR workflows and boost overall team productivity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Services.map((service, idx) => {
            const Icon = iconMap[service.title];
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#374053]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#374053] mb-4">
                  {service.title}
                </h3>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-[#535c78] text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Features;