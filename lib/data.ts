import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { LuGamepad } from "react-icons/lu";

import AiPromptsImg from "@/public/AiPrompts.png";
import ThreadsCloneImg from "@/public/ThreadsClone.png";
import FullPortfolioImg from "@/public/FullPortfolio.png";
import IslamQuizImg from "@/public/IslamQuiz.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Unity Game Developer",
    location: "Tunisia",
    description:
      "I worked as a freelancer for 3 years in building mobile games. I also published many apps some of which exceeded 100k downloads.",
    icon: React.createElement(LuGamepad),
    date: "2016",
  },
  {
    title: "Graduated Baccalaureate in technical technology",
    location: "Mahmoud messaddi, nabeul",
    description:
      " I gained valuable insights into technical concepts and practical skills, setting a strong foundation for my technical career.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "License in Information technology",
    location: "Higher Institute of Technological Studies - Nabeul",
    description:
      " I've been building a strong foundation in IT, preparing for a dynamic career in the field",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - in progress",
  },
  {
    title: "Full-Stack Developer",
    location: "tunisia",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - present",
  },
  
] as const;

export const projectsData = [
  {
    title: "Ai Prompts Platform",
    description:
      "I worked as a full-stack developer on this project for 2-weeks. Users sign-in with Google & share AI prompts.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NextAuth"],
    imageUrl: AiPromptsImg,
    url: "https://share-ai-prompts-seven.vercel.app/",

  },
  {
    title: "Threads Clone",
    description:
      "I was mastering big projects architecture with this project, search, pagination & fully working auth",
    tags: ["React", "Next.js", "Tailwind", "Shadcn", "Clerck"],
    imageUrl: ThreadsCloneImg,
    url: "https://threads-badis.app/",

  },
  {
    title: "Full Portfolio",
    description:
      "A fully responsive and dynamically animated portfolio website with modern UI design.",
    tags: ["React", "Next.js", "Tailwind", "Resend", "Framer Motion"],
    imageUrl: FullPortfolioImg,
    //url: "https://portfolio-next-js-rho-neon.vercel.app/",
    url: "https://badis-portfolio.app/"
  },
  {
    title: "Islamic Quiz with over 100k downloads",
    description:
      "A Fresh, fully working and published inside the Google Play Store.",
    tags: ["Unity 3D", "Figma"],
    imageUrl: IslamQuizImg,
    url: "https://play.google.com/store/apps/details?id=com.bkstation.islamquiz",
  },
] as const;

export const skillsData = [
  "Next.js",
  "Tailwind",
  "MongoDB",

  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",

  "React",
  
  "Node.js",

  "Git",
  "GitHub",

  
  "Shadcn Ui",
  "Bootstrap",

  
  "SQL",
  "Express",
  "Unity 3D",
  "Figma",
  "Figjam",
] as const;
