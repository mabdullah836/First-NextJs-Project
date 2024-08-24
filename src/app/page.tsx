import React from "react";
import FeaturedCources from "@/components/FeaturedCources";
import HeroSection from "@/components/HeroSection";
import WhyChooseUS from "@/components/WhyChooseUS"

const Home = () => {
  return (
    <div
      className="min-h-screen bg-black/[0.96] antialiased
    bg-grid-white/[0.02]"
    >
      
      <HeroSection/>
      <FeaturedCources/>
      <WhyChooseUS/>
    </div>
  );
};

export default Home;
