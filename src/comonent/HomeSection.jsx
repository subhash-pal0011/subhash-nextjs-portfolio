"use client"
import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "motion/react"
import { createPortal } from "react-dom";
import { RxCrossCircled } from "react-icons/rx";
import { RiLinkedinLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiStackLine } from "react-icons/ri";
import { FiAward } from "react-icons/fi";
import Link from "next/link";
import { useForm } from "react-hook-form"
import axios from "axios";
import { useRouter } from "next/navigation";

const HomeSection = () => {
  const router = useRouter()
  const [chatBox, setChatBox] = useState(false)
  const [chat, setChat] = useState([])
  const [lodingResponce, setLodingResponce] = useState(false)
  const [button, setButton] = useState("home")
  const [sideBar, setSideBar] = useState(false)
  const stats = [
    { icon: <GrProjects />, value: "10+", label: "Skills" },
    { icon: <MdOutlineWorkOutline />, value: "Fresher", label: "Experience Level" },
    { icon: <RiStackLine />, value: "MERN", label: "Full-Stack Stack" },
    { icon: <FiAward />, value: "Next.js + AI", label: "Specialization" },
  ];

  const projects = [
    {
      title: "AI Exam Notes Generator",
      description:
        "Built an AI-powered tool that generates exam notes, supports PDF export, and includes a credit-based system with secure Razorpay payments.",
      tech: ["Next.js", "React", "Redux", "MongoDB", "Tailwind CSS", "Razorpay", "Nodemailer", "OpenRouter AI"],
      live: "https://examnotes-ai-app.vercel.app",
      github: "https://github.com/subhash-pal0011/examnotes-ai-app",
      url: "/aiProject.png",
    },
    {
      title: "Grocery App",
      description:
        "Developed a modern grocery web app featuring product browsing, cart management, and responsive UI with smooth user experience.",
      tech: ["React", "Tailwind css", "Context API", "Next.js", "Redux", "MongoDB", "Razorpay", "Nodemailer", "Twilio", "Map", "SocketIo"],
      live: "https://grozo-eight.vercel.app/register",
      github: "https://github.com/subhash-pal0011/GROZO",
      url: "/grozo.png",
    },
  ];


  let messagesEndRef = useRef(null)
  useEffect(() => {
    if (!chatBox) return;
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat, chatBox]);


  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    const trimmedMessage = data.text.trim();
    if (!trimmedMessage) return;

    const userMessage = {
      role: "user",
      text: trimmedMessage,
    };

    // user jo message send krega user o input box se.
    setChat((prev) => [...prev, userMessage]); // MESSAGE ADD HO RHA HII.
    reset();

    setLodingResponce(true)
    try {
      const res = await axios.post("/api/ai/chat", { message: trimmedMessage });

      const result = res.data;

      if (result.success) {
        const aiMessage = { role: "ai", text: result.reply, };
        setChat((prev) => [...prev, aiMessage]);
      }
    } catch (err) {
      console.error("AI Error:", err);
    } finally {
      setLodingResponce(false)
    }
  };


  const element = sideBar ? createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{
          x: "-100%",
          opacity: 0, scale: 0.98,
          transition: {
            duration: 1.4, ease: [0.4, 0, 0.2, 1]
          }
        }}
        className="fixed top-0 left-0 z-50 h-screen w-[70vw] md:w-[25vw] text-gray-500  overflow-auto bg-linear-to-br from-[#020617] via-[#0f172a] to-[#020617] shadow-2xl rounded-r-xl p-5"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-md font-bold ">Menu</h2>
          <button onClick={() => setSideBar(false)}>
            <RxCrossCircled size={25} className="text-red-500" />
          </button>
        </div>


        <div className="flex flex-col gap-5">
          <motion.span
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setButton("home")}
            className={`hover:text-white cursor-pointer ${button === "home" ? "text-white underline" : "text-gray-400"}`}>Home
          </motion.span>

          <motion.span
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            onClick={() => setButton("about")}
            className={`hover:text-white cursor-pointer ${button === "about" ? "text-white underline" : "text-gray-400"}`}>About
          </motion.span>

          <motion.span
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={() => setButton("project")}
            className={`hover:text-white cursor-pointer ${button === "project" ? "text-white underline" : "text-gray-400"}`}>Projects
          </motion.span>

          <motion.span
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            onClick={() => setButton("skills")}
            className={`hover:text-white cursor-pointer ${button === "skills" ? "text-white underline" : "text-gray-400"}`}>Skills
          </motion.span>

          <motion.span
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={() => setButton("conect")}
            className={`hover:text-white cursor-pointer ${button === "conect" ? "text-white underline" : "text-gray-400"}`}>Contact
          </motion.span>


        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  ) : null


  return (
    <div className="min-h-screen bg-linear-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white">


      <div className="md:px-15 px-4 py-4">

        {/* NAVBAR */}
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="max-w-6xl mx-auto flex items-center shadow shadow-white/10 justify-between border border-white/10 px-5 py-3 rounded backdrop-blur sticky top-3 z-40">

          <h1 className="text-lg font-semibold tracking-wide flex items-center capitalize line-clamp-1">
            Subhash pal
          </h1>

          {/* Desktop Menu */}
          <div className="hidden sm:flex gap-6 text-sm text-gray-300">

            <motion.span
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setButton("home")}
              className={`hover:text-white cursor-pointer ${button === "home" ? "text-white underline" : "text-gray-400"}`}>Home
            </motion.span>

            <motion.span
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              onClick={() => {
                setButton("about");
                router.push("/about");
              }}
              className={`hover:text-white cursor-pointer ${button === "about" ? "text-white underline" : "text-gray-400"}`}>About
            </motion.span>

            <motion.span
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              onClick={() => { setButton("project"); router.push("/project")}}
              className={`hover:text-white cursor-pointer ${button === "project" ? "text-white underline" : "text-gray-400"}`}>Projects
            </motion.span>


            <motion.span
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              onClick={() =>{ setButton("skills"); router.push("/skills")}}
              className={`hover:text-white cursor-pointer ${button === "skills" ? "text-white underline" : "text-gray-400"}`}>Skills
            </motion.span>


            <motion.span
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={() =>{ setButton("conect"); router.push("/contect")}}
              className={`hover:text-white cursor-pointer ${button === "conect" ? "text-white underline" : "text-gray-400"}`}>Contact
            </motion.span>
          </div>


          <div className="sm:hidden text-2xl cursor-pointer">
            {sideBar ? <RxCrossCircled onClick={() => setSideBar(false)} size={25} className="text-red-500 cursor-pointer" />
              :
              <RxHamburgerMenu onClick={() => setSideBar(true)} />}

          </div>
        </motion.nav>


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between md:px-10 py-16 gap-10"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm mb-2">Hi, I'm</p>

            <h2 className="text-nd md:text-xl font-bold mb-2">
              Subhash Pal
            </h2>

            <h2 className="text-2xl md:text-5xl font-bold mb-4">
              Full-stack Devloper
            </h2>

            <p className="text-gray-400 max-w-lg mb-6">
              I build scalable, high-performance web applications
              with modern UI/UX & AI integrations.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              <button className="px-5 py-2 rounded-lg bg-white text-black font-medium hover:scale-105 transition cursor-pointer">
                View Projects
              </button>

              <button className="px-5 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition cursor-pointer">
                Contact Me
              </button>
            </div>


            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 text-xl text-gray-400">
              <Link href="https://www.linkedin.com/in/subhash-pal-5144b3320/"
                className="hover:text-white transition cursor-pointer">
                <RiLinkedinLine />
              </Link>

              <Link href="https://github.com/subhash-pal0011"
                className="hover:text-white transition cursor-pointer">
                <IoLogoGithub />
              </Link>

              <Link href="mailto:palsubhash046@gmail.com"
                className="hover:text-white transition cursor-pointer">
                <MdOutlineMailOutline />
              </Link>
            </div>

          </div>
          <div className="flex justify-center rounded-full border border-cyan-400/20
            p-5 shadow-lg shadow-cyan-500/10">
            <img
              src="/student.png"
              alt="Subhash Pal"
              className="w-52 md:w-80 rounded-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="max-w-4xl mx-auto flex flex-wrap md:flex-nowrap justify-between gap-4 border border-white/10 rounded p-3 backdrop-blur-md"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="flex items-center gap-3 flex-1 border border-white/10 rounded-l px-4 py-2 hover:bg-white/10 transition cursor-pointer"
            >
              <div className="text-xl text-white">
                {item.icon}
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  {item.value}
                </h3>
                <span className="text-gray-400 text-sm">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* PROJECT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mx-auto md:px-10 md:py-15 py-10"
        >
          {/*  Heading */}
          <div className="text-center md:text-left space-y-2">
            <p className="text-sm text-gray-400">Projects</p>
            <h2 className="text-2xl md:text-4xl font-bold">
              Some of my recent work
            </h2>
          </div>

          {/* Project Grid */}
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
                {/* ✅ Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                {/* ✅ Description */}
                <div className="flex flex-wrap">
                  <p className="text-sm text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <img src={project.url} className="h-30 p-2" />
                </div>


                {/* ✅ Tech Stack */}
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

                {/* ✅ Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={project.live}
                    className="text-sm px-4 py-2 rounded-lg bg-white text-black font-medium hover:scale-105 transition"
                  >
                    Live Demo
                  </Link>

                  <Link
                    href={project.github}
                    className="text-sm px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
                  >
                    GitHub
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ABOUT ME SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="max-w-6xl mx-auto px-6 md:px-10 py-2"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="space-y-4"
            >
              <p className="text-sm text-gray-400">About Me</p>

              <h2 className="text-2xl md:text-4xl font-bold">
                Passionate Full-Stack Developer
              </h2>

              <p className="text-gray-400 leading-relaxed">
                I'm a Full-Stack Developer specializing in MERN & Next.js.
                I love building modern, scalable, and high-performance web
                applications with clean UI/UX.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Recently, I've been exploring AI integrations, payments,
                and automation to create smarter digital experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="space-y-4"
            >
              <p className="text-sm text-gray-400">Skills</p>

              <h3 className="text-xl md:text-2xl font-semibold">
                Technologies I Work With
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript (ES6+)",
                  "Next.js",
                  "React",
                  "MongoDB",
                  "Redux",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "OpenRouter AI",
                  "Razorpay",
                  "Nodemailer",
                  "Twilio"
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: false }}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10
                    text-sm text-gray-300 hover:bg-white/10 transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>


        {/* AI CONVERSETION */}
        <motion.div
          onClick={() => setChatBox(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 border border-white/10 rounded-full w-20 h-20 bg-white/5 backdrop-blur-md cursor-pointer shadow-lg shadow-cyan-500/10"
        >
          <div className="flex flex-col items-center justify-center p-2 rounded-full">
            <img src="/roboAi.gif" className="h-10 w-10" />
            <span className="text-[10px] font-semibold">
              Ask me AI
            </span>
          </div>
        </motion.div>

        {chatBox && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-1 md:right-10 z-50"
          >
            <div className="md:w-[320px] h-105 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl">

              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  Ask Me AI <img src="/roboAi.gif" className="h-7 w-7" />
                </h3>

                <button
                  onClick={() => setChatBox(false)}
                  className="text-gray-400 hover:text-white transition cursor-pointer"
                >
                  <img src="/cross.gif" className="h-7 w-7" />
                </button>
              </div>

              {/* Messages Area */}
              <div className="p-4 h-75 overflow-y-auto thin-scrollbar  text-xs text-gray-300 space-y-3">

                {chat.length === 0 && (
                  <p className="text-gray-400">
                    Hi 👋 I'm Subhash's AI assistant. Ask me anything!
                  </p>
                )}

                {Array.isArray(chat) && chat.map((msg, i) => {
                  const isUser = msg.role === "user";

                  return (
                    <div
                      key={i}
                      className={`flex ${isUser ? "justify-end" : "justify-start"} `}
                    >
                      <div
                        className={`max-w-[75%] px-3 py-2 rounded-lg ${isUser
                          ? "bg-white text-black text-right"
                          : "bg-white/10 text-white text-left"
                          } `}
                      >
                        {msg.text}
                      </div>
                    </div>
                  );
                })}
                {lodingResponce && (
                  <div className="flex justify-start">
                    <div className="max-w-[75%] px-3 py-1 rounded bg-white/10">
                      <img
                        src="/loader-2.gif"
                        alt="AI typing..."
                        className="h-5 w-5 animate-pulse"
                      />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>


              {/* Input Area */}
              <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 border-t border-white/10 bg-slate-900/80">

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex items-center gap-2"
                >
                  <input
                    {...register("text")}
                    type="text"
                    placeholder="Type your question..."
                    className="flex-1 px-3 py-2 rounded-lg bg-black/30 border border-white/10 text-sm text-white outline-none"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-3 py-2 rounded-lg bg-white text-black text-sm font-medium hover:scale-105 transition disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? "..." : "Send"}
                  </button>
                </form>

              </div>

            </div>
          </motion.div>
        )}

      </div>
      {element}
    </div>
  );
};

export default HomeSection;
