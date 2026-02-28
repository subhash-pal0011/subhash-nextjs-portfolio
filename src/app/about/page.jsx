"use client";
import { motion } from "motion/react";
import React from "react";
import { RiLinkedinLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import Contect from "@/comonent/Contect";

const projects = [
  {
    title: "AI Exam Notes Generator",
    description:
      "Built an AI-powered tool that generates exam notes, supports PDF export, and includes a credit-based system with secure Razorpay payments.",
    tech: ["Next.js", "React", "Redux", "Tailwind CSS", "MongoDB", "Razorpay", "Nodemailer", "OpenRouter AI"],
    live: "https://examnotes-ai-app.vercel.app",
    github: "https://github.com/subhash-pal0011/examnotes-ai-app",
    url: "/aiProject.png",
  },
  {
    title: "Grocery App",
    description:
      "Developed a modern grocery web app featuring product browsing, cart management, and responsive UI with smooth user experience.",
    tech: ["React", "Tailwind", "Context API", "Next.js", "Redux", "MongoDB", "Razorpay", "Nodemailer", "Twilio", "Map", "SocketIo"],
    live: "https://grozo-eight.vercel.app/register",
    github: "https://github.com/subhash-pal0011/GROZO",
    url: "/grozo.png",
  },
];

const skills = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "Redux"],
  Backend: ["Node.js", "Express.js", "MongoDB" , "Socket.io"],
  Tools: ["Razorpay", "Nodemailer", "Twilio", "OpenRouter AI"],
};

const Page = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white
     md:px-6 px-2 py-10">

      {/* Intro */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16"
      >
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <p className="text-gray-400 mb-4">Full-Stack Developer & AI Enthusiast</p>
          <p className="bg-white/10 p-4 rounded-lg text-sm md:text-base">
            I'm <b>Subhash Pal</b>, a passionate Full-Stack Developer specializing in building
            scalable, modern web applications with a focus on <b>clean UI/UX</b> and <b>AI integrations</b>.
            I love creating tools that solve real problems and improve user experiences.
          </p>
          <div className="flex gap-4 mt-4 text-xl text-gray-300">
            <a href="https://www.linkedin.com/in/subhash-pal-5144b3320/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><RiLinkedinLine /></a>
            <a href="https://github.com/subhash-pal0011" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><IoLogoGithub /></a>
            <a href="mailto:palsubhash046@gmail.com" className="hover:text-white transition"><AiOutlineMail /></a>
          </div>
        </div>
        <div className="flex-1">
          <motion.img
            src="/student.png"
            alt="Profile"
            className="rounded-xl w-full md:w-80"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          />
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="mx-auto md:px-10 md:py-15 py-10"
      >
        <div className="text-center md:text-left space-y-2">
          <p className="text-sm text-gray-400">Projects</p>
          <h2 className="text-2xl md:text-4xl font-bold">
            Some of my recent work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <div className="flex flex-wrap">
                <p className="text-sm text-gray-400 mb-4">
                  {project.description}
                </p>
                <img src={project.url} className="h-30 p-2" />
              </div>


              <div className="flex flex-wrap gap-2 mb-5 mt-2">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md bg-white/10 text-gray-300"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-lg bg-white text-black font-medium hover:scale-105 hover:shadow-lg transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 hover:scale-105 transition"
                >
                  GitHub
                </a>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="max-w-6xl mx-auto mb-16"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-6">
          {Object.entries(skills).map(([category, skillList], idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <h4 className="font-semibold text-lg">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, i) => (
                  <span key={i} className="bg-white/10 px-3 py-1 rounded text-sm hover:bg-white/20 transition">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <Contect />
      </motion.section>

    </div>
  );
};

export default Page;