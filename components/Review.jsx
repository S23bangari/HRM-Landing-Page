import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Star } from "lucide-react";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
 
export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row">
      <AnimatedTooltip items={people} />
    </div>
  );
}

const Review = () => {
  return (
    <div className="max-w-7xl mx-auto mt-14 flex flex-col justify-center items-center px-4 py-10">
      <div className="
        w-full flex flex-col items-center px-10
        lg:flex-row lg:justify-between lg:items-center 
        gap-10
      ">
        
        {/* Left Section */}
        <div className="flex flex-col max-w-xl text-center lg:text-left space-y-6">
          <h1 className="text-2xl text-[#374053] sm:text-3xl lg:text-4xl font-bold leading-tight">
            Use HRM Application <br className="hidden lg:block" />
            with zero friction today
          </h1>

          <p className="text-gray-600 font-semibold text-base sm:text-md">
            Ktechnoit offers end-to-end HR management services designed to simplify, automate, and optimize human resource operations. We help companies build stronger teams, streamline workflows, and improve employee productivity through intelligent HR systems and expert service support.
          </p>

          <div className="
            flex flex-col sm:flex-row 
            items-center sm:items-center 
            justify-center lg:justify-start 
            gap-4">
            <AnimatedTooltipPreview />

            <div className="flex gap-1 justify-center">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400 w-5 h-5" />
                ))}
            </div>
          </div>

          <p className="text-gray-400 font-semibold text-base sm:text-lg">
            Trusted by 27,000+ users worldwide
          </p>
        </div>

        {/* Right Section */}
        <div className="flex justify-center w-full lg:w-auto">
          <button
            className="
              w-full sm:w-auto text-white font-bold px-8 py-3 rounded-lg
              bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700
              shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_10px_rgba(0,0,0,0.2)]
              transition-transform hover:-translate-y-1
            "
          >
            Book Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
