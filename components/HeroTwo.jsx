import React from "react";
import {
  BriefcaseBusiness,
  Factory,
  School,
  Hospital,
  Backpack,
  Building,
  Check,
} from "lucide-react";

const industries = [
  {
    title: "Corporate & IT Companies",
    icon: <BriefcaseBusiness size={32} />,
    desc: "Modern HR solutions tailored for tech-driven workplaces.",
  },
  {
    title: "Manufacturing & Logistics",
    icon: <Factory size={32} />,
    desc: "Track workforce, shifts, and operations seamlessly.",
  },
  {
    title: "Schools, Colleges & Institutes",
    icon: <School size={32} />,
    desc: "Manage staff, attendance, payroll, and records easily.",
  },
  {
    title: "Healthcare & Medical",
    icon: <Hospital size={32} />,
    desc: "Smart HR tools for hospitals, clinics & medical centers.",
  },
  {
    title: "Travel, Tourism & Hospitality",
    icon: <Backpack size={32} />,
    desc: "Efficient staff scheduling and workflow automation.",
  },
  {
    title: "SMEs, Startups & Agencies",
    icon: <Building size={32} />,
    desc: "Scale your HR operations with ease as you grow.",
  },
];

const customerServices = [
  "Web-based HRM System",
  "HR & Payroll Software",
  "Employee Self-Service Portal",
  "Multi-branch HR management system",
  "Custom API Integration with CRM / ERP / Payroll",
];

const HeroTwo = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center px-6 sm:px-8 py-16 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-center font-bold mb-18 text-[#374053] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Industries We Support
        </h1>

        {/* Grid */}
        <div
          className="
            relative
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          max-w-6xl 
          mx-auto
        "
        >
          {industries.map((item, index) => (
            <div
              key={index}
              className={`
                group
                relative
                border-r
                border-l
                ${index < 3 ? "border-b" : ""}
                p-6
                border-gray-200 
                bg-white 
                hover:shadow-xl 
                transition-all 
                duration-300 
                flex flex-col 
                items-start 
                justify-start
              `}
            >
              {/* Side bar indicator */}
              <div
                className="absolute left-0 top-20 w-1.5 h-6 rounded-r-lg bg-[#cfd3d3]
               group-hover:bg-blue-500 transition-colors duration-300"
              />

              {/* Icon */}
              <div className="mb-6 text-[#374053]">{item.icon}</div>

              {/* Title */}
              <h2
                className="text-lg sm:text-xl font-semibold text-[#374053] mb-2 
                transition-transform duration-300 group-hover:translate-x-1"
              >
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 w-full px-4">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <h1
              className="text-center font-extrabold text-[#374053] 
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
            >
              Get a Custom HR Management System
            </h1>

            <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto text-sm sm:text-base">
              If you need a custom-built{" "}
              <b>HRM Software / HRMS Web Application</b>, we also provide:
            </p>

            {/* List */}
            <div
              className="
        max-w-3xl mx-auto mt-10 
        bg-white border border-gray-200 
        shadow-sm rounded-2xl 
        p-6 sm:p-8
        space-y-4
    "
            >
              {customerServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check
                    size={22}
                    className="text-green-500 flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-700 text-sm sm:text-lg leading-relaxed">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
