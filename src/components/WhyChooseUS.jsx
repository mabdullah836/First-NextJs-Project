"use client"

import React from "react";
import {StickyScroll} from "../components/ui/sticky-scroll-reveal"

const content = [
    {
      title: "Introduction to Artificial Intelligence",
      description: "Explore the fundamentals of AI and machine learning. This course covers essential algorithms, data processing techniques, and real-world applications to give you a solid foundation in AI."
    },
    {
      title: "Web Development Essentials",
      description: "Master the core skills of web development including HTML, CSS, and JavaScript. Build and deploy your own websites with practical knowledge and hands-on projects."
    },
    {
      title: "Advanced Data Science",
      description: "Deepen your data science expertise with advanced analytics techniques, predictive modeling, and data visualization. Gain practical experience through real-world data science projects."
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "Learn essential practices to protect digital information and systems from cyber threats. This course covers risk management, security policies, and hands-on security practices."
    },
    {
      title: "Machine Learning Basics",
      description: "Get started with machine learning by understanding key algorithms and techniques. Learn how to build, train, and evaluate models for predictive analytics."
    },
    {
      title: "Cloud Computing with AWS",
      description: "Understand cloud computing concepts and gain hands-on experience with Amazon Web Services (AWS). Learn to deploy and manage scalable cloud solutions."
    },
    {
      title: "Full Stack Development",
      description: "Become proficient in both front-end and back-end development with this comprehensive course. Learn modern technologies to build and deploy full stack applications."
    }]



const WhyChooseUS = () => {
  return (
    <div >
      <StickyScroll contentClassName="flex justify-between" content={content} />
    </div>
  );
};

export default WhyChooseUS;

