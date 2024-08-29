import React from "react";
import FeaturedCources from "@/components/FeaturedCources";
import HeroSection from "@/components/HeroSection";
import WhyChooseUS from "@/components/WhyChooseUS"
import "../styles/globals.css"
import Testimonials from "@/components/Testimonials";
import Instructors from "@/components/Instructor";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-black/[0.96] antialiased
    bg-grid-white/[0.02]"
    >
      
      <HeroSection/>
      <FeaturedCources/>
      <WhyChooseUS/>
      <Testimonials/>
      <Instructors/>
      <Footer/>
    </div>
  );
};

export default Home;
