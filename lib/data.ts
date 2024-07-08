import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { CgCrown } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { LuGamepad } from "react-icons/lu";

import AiPromptsImg from "@/public/AiPrompts.png";
import ThreadsCloneImg from "@/public/ThreadsClone.png";
import FullPortfolioImg from "@/public/FullPortfolio.png";
import IslamQuizImg from "@/public/IslamQuiz.png";
import PackedIn from "@/public/PackedIn.png";

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
    title: "Started My journey: Unity Game Developer",
    location: "Tunisia",
    description:
      "I worked as a freelancer for 3 years in building mobile games. I also published many apps some of which exceeded 100k downloads.",
    icon: React.createElement(LuGamepad),
    date: "2016",
  },
  {
    title: "Graduated Baccalaureate in technical technology",
    location: "Mahmoud Messadi Nabeul",
    description:
      " I gained valuable insights into technical concepts and practical skills, setting a strong foundation for my technical career.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Got my License in Information technology",
    location: "Higher Institute of Technological Studies - Nabeul",
    description:
      " I've been building a strong foundation in IT, preparing for a dynamic career in the field as an information systems developer",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Full-Stack Developer Freelancing",
    location: "tunisia",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - present",
  },
  {
    title: "End of study Internship",
    location: "at Kings worldwide distribution",
    description:
      "solved the company problems with their simple wordpress ecommerce solution by rebuilding it using nextjs to improve SEO , speed & additional functionalities such as realistic preview for the clients to minimize the cost.",
    icon: React.createElement(CgCrown),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Packedin.tn",
    description:
      "fully functional e-commerce  to replace the company(KWD)'s existing basic WordPress solution. with custom products creation & realistic preview generation.",
    tags: ["Next.js", "Shadcn Ui", "Auth.js", "ImageMagick"],
    imageUrl: PackedIn,
    url: "https://packedin.vercel.app",
  },
  {
    title: "Islamic Quiz with over 100k downloads",
    description:
      "A Fresh, fully working and published inside the Google Play Store.",
    tags: ["Unity 3D", "Figma"],
    imageUrl: IslamQuizImg,
    url: "https://play.google.com/store/apps/details?id=com.bkstation.islamquiz",
  },
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
    tags: ["React", "Next.js", "Tailwind", "Shadcn", "Clerk"],
    imageUrl: ThreadsCloneImg,
    url: "https://threads-badis.vercel.app/",
  },
  {
    title: "Full Portfolio",
    description:
      "A fully responsive and dynamically animated portfolio website with modern UI design.",
    tags: ["React", "Next.js", "Tailwind", "Resend", "Framer Motion"],
    imageUrl: FullPortfolioImg,
    //url: "https://portfolio-next-js-rho-neon.vercel.app/",
    url: "https://badis-portfolio.app/",
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
  "SQL",
  "Express",
  "Node.js",

  "Git",
  "GitHub",
  "Canva",
  "Shadcn Ui",
  "Bootstrap",
  "Vercel",

  "Unity 3D",
  "Figma",
  "Figjam",
  "want something else ? , don't worry i'm a fast learner",
] as const;
