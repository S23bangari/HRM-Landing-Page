import { Check, Plus } from "lucide-react";
import React from "react";

const Price = () => {
  const pricingOptions = [
    {
      title: "Hobby",
      price: "99",
      features: [
        "Access to basic analytics reports",
        "Uptop to 10,000 data points per month",
        "Email support",
        "Community access",
        "Cancel anytime",
      ],
    },
    {
      title: "Starter",
      price: "199",
      features: [
        "Advanced analytics dashboard",
        "Customizable reports and charts",
        "Real-time data tracking",
        "Integration with third-party tools",
      ],
      best: true,
      additionalInfo: ["Everything in Hobby Plan"],
    },
    {
      title: "Business",
      price: "399",
      features: [
        "Unlimited data storage",
        "Customizable dashboards",
        "Advanced data segmentation",
        "Real-time data processing",
        "AI-powered insights",
      ],
      best: false,
      additionalInfo: ["Everything in Pro Plan", "Everything in Pro Plan"],
    },
  ];
  return (
    <main id="pricing" className="w-full mt-8 md:mt-14 flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#374053] font-bold mb-4 md:mb-6">
        Simple pricing for advance people
      </h1>
      <p className="text-base sm:text-lg text-gray-600 font-semibold max-w-2xl">
        Our pricing is designed for advanced people who need <br className="hidden sm:block" />
        more features and more flexibility.
      </p>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 md:mt-8">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="border border-[#e6e4e4] bg-[#f5f5f5] rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="border border-zinc-300 rounded-2xl p-4 flex flex-col h-56 sm:h-64 justify-between items-start mb-8 sm:mb-14">
              <div className="w-full flex justify-between items-center">
                <h2 className="text-lg sm:text-xl font-semibold">{option.title}</h2>
                {option.best && (
                  <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold mr-2 px-2 sm:px-2.5 py-0.5 rounded-full">
                    Best Value
                  </span>
                )}
              </div>

              <p className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="text-xl sm:text-2xl text-gray-600">$</span>
                {option.price}
                <span className="text-lg sm:text-2xl text-gray-600">/month</span>
              </p>
              <button
                className="w-full text-white font-bold px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base
    bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700
    shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_10px_rgba(0,0,0,0.2)]
    transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Get {option.title}
              </button>
            </div>

            <ul className="mb-6 sm:mb-10">
              {option.features.map((feature, idx) => (
                <li key={idx} className="flex items-center mb-2">
                  <div className="rounded-full bg-zinc-800 p-1 mr-3 sm:mr-4 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-white font-extrabold" />
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-left">{feature}</p>
                </li>
              ))}
            </ul>

            {option.additionalInfo && (
              <div className="mt-4">
                <div className="w-full flex items-center mb-6 sm:mb-8">
                  <div className="w-1/2 h-px bg-[#eaeaea] mr-1"/>
                  <Plus size={18} className="text-black font-bold flex-shrink-0" />
                  <div className="w-1/2 h-px bg-[#eaeaea] ml-1"/>
                </div>

                {option.additionalInfo.map((info, idx) => (
                  <div key={idx} className="w-full flex items-center mb-2">
                    <div className="rounded-full bg-blue-400 p-1 mr-3 sm:mr-4 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-white font-extrabold" />
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg font-semibold text-left">{info}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Price;