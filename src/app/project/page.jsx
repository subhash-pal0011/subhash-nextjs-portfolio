"use client"
import React from 'react'
import { motion } from "motion/react";


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
  {
    title: "Pixora – Social Media Platform",
    description:
      "Developed a scalable full-stack social media application with real-time chat and notification system using Socket.io. Implemented secure JWT authentication, cloud-based media uploads, user stories, profile management, and account deletion functionality. Architected RESTful APIs with optimized backend performance and secure data handling for seamless user experience.",
    tech: [
      "React",
      "Tailwind CSS",
      "Context API",
      "Redux",
      "MongoDB",
      "Node.js",
      "Express",
      "Socket.io",
      "Cloudinary",
      "Nodemailer"
    ],
    live: "https://pixora-app.onrender.com/login",
    github: "https://github.com/subhash-pal0011/pixsora",
    url: "/pixora.png",
  }
];

const page = () => {
  return (
    <div className='min-h-screen w-full bg-linear-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white'>

      <div className='md:px-10 px-5 p-10'>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Project</h2>
        <p className="text-gray-400 mb-4">Some of my recent work</p>

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
      </div>

    </div>
  )
}

export default page
