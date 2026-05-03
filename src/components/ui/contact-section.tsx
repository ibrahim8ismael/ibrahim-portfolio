"use client";

import { useState } from "react";
import { FaInstagram, FaTiktok, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function ContactSection() {
  const [isDark] = useState(true);

  const socialLinks = [
    { 
      icon: FaInstagram, 
      label: "Instagram", 
      value: "@ibrhim.one",
      href: "https://instagram.com/ibrhim.one"
    },
    { 
      icon: FaTiktok, 
      label: "TikTok", 
      value: "@ibrhim.one",
      href: "https://tiktok.com/@ibrhim.one"
    },
    { 
      icon: FaXTwitter, 
      label: "X", 
      value: "@ibrahim8ismael",
      href: "https://x.com/ibrahim8ismael"
    },
    { 
      icon: FaLinkedinIn, 
      label: "LinkedIn", 
      value: "@ibrahim8ismael",
      href: "https://linkedin.com/in/ibrahim8ismael"
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 flex items-center"
      style={{
        backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
        color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
      }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#C3E41D" }}
        >
          Get In Touch
        </h2>
        
        <p className="text-lg md:text-xl mb-12 text-neutral-500">
          Feel free to reach out for collaborations, questions, or just to say hello!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{
                backgroundColor: isDark ? "hsl(0 0% 10%)" : "hsl(0 0% 95%)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <social.icon className="w-8 h-8 mb-3" style={{ color: "#C3E41D" }} />
              <h4 className="text-sm font-bold mb-1">{social.label}</h4>
              <p className="text-xs text-neutral-400">{social.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}