import React from "react";
import Hero from "@/components/Hero";
import Price from "@/components/Price";
import Review from "@/components/Review";
import Features from "@/components/Features";
import Whychooseus from "@/components/Whychooseus";
import HeroTwo from "@/components/HeroTwo";
import CallToAction from "@/components/CallToAction";
import Faq from "@/components/Faq";

const page = () => {
  return (
    <>
      <Hero />
      <Features />
      <Whychooseus />
      <HeroTwo />
      <CallToAction />
      <Price />
      <Review />  
      <Faq />

    </>
  );
};

export default page;
