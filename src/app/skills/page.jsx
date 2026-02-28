"use client"
import React from "react"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs } from "react-icons/fa"
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiSocketdotio
} from "react-icons/si"

const Page = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const frontendSkills = [
    { icon: <FaReact size={26} className="text-cyan-400" />, name: "React" },
    { icon: <SiNextdotjs size={26} />, name: "Next.js" },
    { icon: <SiTailwindcss size={26} className="text-sky-400" />, name: "Tailwind CSS" },
    { icon: <SiRedux size={26} className="text-purple-400" />, name: "Redux" }
  ]

  const backendSkills = [
    { icon: <FaNodeJs size={26} className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress size={26} />, name: "Express.js" },
    { icon: <SiSocketdotio size={26} />, name: "Socket.io" },
  ]

  const databaseSkills = [
    { icon: <SiMongodb size={26} className="text-green-400" />, name: "MongoDB" },
  ]
  

  const SkillSection = ({ title, skills }) => (
    <motion.div variants={itemVariants} className="mb-14">
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-3 
                       bg-slate-800/70 backdrop-blur-md 
                       px-5 py-3 rounded-xl 
                       shadow-lg border border-white/5
                       hover:border-white/20 
                       transition-all duration-300"
          >
            {skill.icon}
            <span className="text-lg">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-16 py-14"
      >

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
          <p className="text-gray-400 mt-3 text-lg">My Tech Stack</p>
        </div>

        <SkillSection title="Frontend" skills={frontendSkills} />
        <SkillSection title="Backend" skills={backendSkills} />
        <SkillSection title="Database" skills={databaseSkills} />

      </motion.div>
    </div>
  )
}

export default Page
