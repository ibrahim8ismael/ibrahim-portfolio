"use client";

import { useState } from "react";

export default function AboutSection() {
  const [isDark] = useState(true);

  const contentStats = [
    { number: "50K+", label: "Reel views" },
    { number: "10K+", label: "Followers" },
    { number: "100+", label: "Videos created" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 flex items-center"
      style={{
        backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
        color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
      }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{ color: "#C3E41D" }}
        >
          About Me
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl leading-relaxed">
          <p>
            I&apos;m a 21-year-old entrepreneur and software developer based in Egypt. 
            I specialize in building products that solve real problems and create 
            meaningful impact.
          </p>
          
          <p>
            Currently, I&apos;m working on multiple projects including an AI-powered 
            platform for digital marketing and a fintech solution for small businesses. 
            I&apos;m always looking for new challenges and opportunities to learn.
          </p>

          <p>
            I also create content on social media about startups, AI, and tech. 
            My reels reach hundreds of thousands of people, sharing insights about 
            entrepreneurship and the latest in technology. Join me on this journey!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {contentStats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-lg"
              style={{
                backgroundColor: isDark ? "hsl(0 0% 10%)" : "hsl(0 0% 95%)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: "#C3E41D" }}
              >
                {stat.number}
              </h3>
              <p className="text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}