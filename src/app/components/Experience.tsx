"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "2023 – Present",
    title: "Freelance Web Developer",
    summary:
      "Crafted responsive websites, integrated APIs, enhanced performance and UX.",
    tech: ["Next.js", "React", "Tailwind", "EmailJS"],
    feedback:
      " Taimoor turned ideas into seamless interfaces. His attention to detail is unmatched."
  },
  {
    period: "2021 – 2023",
    title: "Creative Technologist",
    summary:
      "Built glowing UI projects, explored smart TV visuals, 3D animations, and voice-enabled forms.",
    tech: ["Sanity", "Framer Motion", "UI/UX", "3D Effects"],
    feedback:
      " Every project from Taimoor feels like an experience—technically sharp and visually alive."
  }
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [typedFeedback, setTypedFeedback] = useState("");

  // Typing animation for feedback
  useEffect(() => {
    if (activeIndex !== null) {
      const feedback = experiences[activeIndex].feedback;
      let index = 0;
      setTypedFeedback("");
      const interval = setInterval(() => {
        setTypedFeedback((prev) => prev + feedback.charAt(index));
        index++;
        if (index >= feedback.length) clearInterval(interval);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [activeIndex]);

  return (
    <section className="relative py-16 px-6 md:px-20 bg-gradient-to-br from-[#0a0f1e] to-[#1a263b] text-gray-100 overflow-x-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold mb-14 text-[#00b4d8] tracking-wide"
      >
        🚀 Cinematic Experience Journey
      </motion.h2>

      <div className="space-y-20">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            onMouseEnter={() => setActiveIndex(index)}
            className={`group sticky top-6 transition-all duration-500 p-8 bg-[#182233] border-l-4 rounded-xl shadow-xl ${
              activeIndex === index
                ? "border-[#80ffdb]"
                : "border-[#00b4d8]/30"
            }`}
          >
            {/* Pulse beacon accent */}
            <div className="absolute w-3 h-3 top-4 left-2 rounded-full bg-gradient-to-br from-[#00b4d8] to-[#80ffdb] shadow-md animate-ping opacity-70"></div>

            <div className="text-sm text-gray-400 mb-1">{exp.period}</div>
            <h3 className="text-2xl font-bold mb-2 text-[#80ffdb] group-hover:text-[#00b4d8] transition duration-300">
              {exp.title}
            </h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-300 mb-6"
            >
              {exp.summary}
            </motion.p>

            {/* Tech Badge Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6"
            >
              {exp.tech.map((tech, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  className="bg-[#1e2b3f] text-[#80ffdb] text-xs py-2 px-3 rounded-full border border-[#00b4d8] text-center shadow-md"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>

            {/* Typing testimonial */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 bg-[#1f2b3a] border-l-4 border-[#00b4d8] text-[#80ffdb] p-3 italic text-sm rounded-r-md shadow-md min-h-[60px]"
            >
              “{activeIndex === index ? typedFeedback : ""}”
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}