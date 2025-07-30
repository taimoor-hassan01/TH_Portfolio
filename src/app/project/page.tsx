"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";
import "./projects.css";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  type: string;
};

const projects: Project[] = [
  {
    title: "Countdown Timer",
    description: "Elegant timer for events.",
    image: "/project1.jpg",
    link: "https://count-down-blue-six.vercel.app/",
    type: "React",
  },
  {
    title: "Todo List",
    description: "Minimal task tracker.",
    image: "/project2.jpg",
    link: "https://todo-list-blond-two.vercel.app/",
    type: "React",
  },
  {
    title: "Furniture Website",
    description: "3D-styled ecommerce layout.",
    image: "/project3.png",
    link: "https://furnitureonline-sooty.vercel.app/",
    type: "Fullstack",
  },
  {
    title: "Unit Convertor",
    description: "Python + Streamlit app.",
    image: "/project4.png",
    link: "https://unit-convertor-by-th.streamlit.app/",
    type: "Python",
  },
  {
    title: "Password Strength Checker",
    description: "Audit your password strength.",
    image: "/project5.png",
    link: "https://psm-th.streamlit.app/",
    type: "Python",
  },
  {
    title: "Personal Library Manager",
    description: "Manage and track your book lists.",
    image: "/project6.png",
    link: "https://th-library.streamlit.app/",
    type: "Python",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <>
      <div className="project-bg" />

      <nav className="fixed w-full flex justify-between items-center h-16 px-8 z-50 text-white backdrop-blur-md bg-black/30">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="hover:text-amber-400">Home</Link>
          <Link href="/project" className="hover:text-amber-400">Projects</Link>
          <Link href="/about" className="hover:text-amber-400">About</Link>
          <Link href="/contact" className="hover:text-amber-400">Contact</Link>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-6 text-white min-h-screen relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-wider">My Projects</h2>
          <p className="text-sm text-amber-100">Crafted with precision and love</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {["All", "React", "Python", "Fullstack"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1 text-sm border rounded-full hover:bg-white/10 transition ${
                filter === type ? "bg-white/20" : ""
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {filtered.map((project, i) => (
            <div key={i} className="project-card group">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={240}
                className="rounded-md w-full h-48 object-cover group-hover:brightness-110 transition"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-amber-200 mb-1">{project.description}</p>
                <span className="badge" title={`${project.type} project`}>
                  {project.type}
                </span>
              </div>
              <Link
                href={project.link}
                target="_blank"
                className="visit-btn opacity-0 group-hover:opacity-100 transition"
              >
                Visit ↗
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}