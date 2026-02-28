"use client"
import React from "react"
import { motion } from "framer-motion"
import { MdOutlineEmail } from "react-icons/md"
import { CiLinkedin } from "react-icons/ci"
import { IoLogoGithub } from "react-icons/io5"
import Contact from "@/comonent/Contect"

const Page = () => {

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white">

      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="px-6 md:px-16 py-14"
      >

        {/* Heading */}
        <motion.div variants={itemVariant} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Get In Touch</h2>
          <p className="text-gray-400 text-lg">Let's Connect!</p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <motion.div
            variants={itemVariant}
            className="space-y-6"
          >
            {/* Email */}
            <div className="flex items-center gap-4 bg-slate-800/70 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-white/20 transition">
              <MdOutlineEmail size={28} className="text-cyan-400" />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:palSubhash046@gmail.com"
                  className="text-gray-400 hover:text-white"
                >
                  palsubhash046@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4 bg-slate-800/70 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-white/20 transition">
              <CiLinkedin size={28} className="text-blue-400" />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/subhash-pal-5144b3320/"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  linkedin.com/in/subhash-pal-5144b3320/
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4 bg-slate-800/70 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-white/20 transition">
              <IoLogoGithub size={28} className="text-white" />
              <div>
                <p className="font-semibold">GitHub</p>
                <a
                  href="https://github.com/subhash-pal0011"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  github.com/subhash-pal0011
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariant}>
            <Contact />
          </motion.div>

        </div>

      </motion.div>
    </div>
  )
}

export default Page
