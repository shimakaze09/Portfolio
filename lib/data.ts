import React from "react";
import { FaComputer } from "react-icons/fa6"
import { FaServer } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tacticsRPG from "@/public/tacticsRPG.png";
import gameEngine from "@/public/gameEngine.png";
import eCommerce from "@/public/eCommerce.png";

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
    title: "Graduated university",
    location: "Chongqing, China",
    description:
      "I graduated after 2.5 years of studying. I immediately found a job as a Server operation and maintenance operator.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2018",
  },
  {
    title: "Server operator",
    location: "Beijing, China",
    description:
      "I worked as a server operator for 1 year. I also upskilled myself by self taught to other IT fields include software, front end and back end.",
    icon: React.createElement(FaServer),
    date: "2019 - 2020",
  },
  {
    title: "PC operator",
    location: "Auckland, NZ",
    description:
      "I worked as a PC operator for 1 year in DTC and half year in PB Tech.",
    icon: React.createElement(FaComputer),
    date: "2020 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Tactics RPG",
    description:
      "This is my first game. The game is focused on battle strategy instead of exploration. It's include a fully functional battle system, attribute system, status system, turn system, and victory system.",
    tags: ["C#", "Unity Engine"],
    imageUrl: tacticsRPG,
  },
  {
    title: "Game Engine",
    description:
      "This is the game engine I'm currently working with. For now I implemented OpenGL and PNG, JPEG, BMP parser, it is also cross platformed. I also implemented Ogex parser for the engine.",
    tags: ["C++", "CMake", "ISPC"],
    imageUrl: gameEngine,
  },
  {
    title: "E Commerce App",
    description:
      "An e-commerce application built with asp.net, angular, and postgreSQL. Users can search, sort goods, register, and log in. It also includes a fully functional cart and checkout system.",
    tags: ["Angular", "C#", "SQL", "Bootstrap", "Docker", "Stripe"],
    imageUrl: eCommerce,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Bootstrap",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MySQL",
  "SQLite",
  "PostgreSQL",
  "C#",
  "C++",
  "Unity",
  "Unreal",
  "ASP.NET",
] as const;