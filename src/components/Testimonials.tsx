'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const techTestimonials = [
    {
        quote: 'The AI course transformed my approach to problem-solving. The hands-on projects and expert guidance gave me a deep understanding of machine learning and its applications.',
        name: 'Jordan Miller',
        title: 'AI Enthusiast',
    },
    {
        quote: "The web development bootcamp was incredibly intensive but rewarding. I gained proficiency in modern frameworks and best practices, setting me up for a successful career in tech.",
        name: 'Taylor Smith',
        title: 'Web Developer',
    },
    {
        quote: "The cloud computing program provided me with essential skills in managing and deploying applications in the cloud. The practical experience with AWS and Azure was invaluable.",
        name: 'Riley Thompson',
        title: 'Cloud Computing Specialist',
    },
    {
        quote: "Working with AI tools and technologies through this program has opened doors to innovative projects and solutions. The real-world applications and expert insights were game-changers.",
        name: 'Alexandra Lee',
        title: 'Data Scientist',
    },
    {
        quote: "The web development courses not only taught me coding but also the importance of user experience and design. I now feel confident building and optimizing complex web applications.",
        name: 'Morgan Davis',
        title: 'Full-Stack Developer',
    },
    {
        quote: "Learning about cloud infrastructure and services has greatly enhanced my ability to deploy and scale applications efficiently. The focus on practical skills and industry trends was extremely beneficial.",
        name: 'Chris Johnson',
        title: 'DevOps Engineer',
    },
];


function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony: Voices of Success in Technology</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={techTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials