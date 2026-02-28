"use client";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
       const {
              register,
              handleSubmit,
              reset,
              formState: { errors, isSubmitting },
       } = useForm();

       const [serverMessage, setServerMessage] = useState("");

       const onSubmit = async (data) => {
              setServerMessage("");
              const trimmedName = data.name.trim();
              const trimmedEmail = data.email.trim();
              const trimmedMessage = data.message.trim();
              try {
                     const res = await axios.post("/api/contact", {
                            name: trimmedName,
                            email: trimmedEmail,
                            message: trimmedMessage,
                     });

                     if (res.data.success) {
                            setServerMessage(res.data.message);
                            reset();
                     } else {
                            setServerMessage(res.data.message);
                     }
              } catch (error) {
                     console.error(error);
                     setServerMessage("Error sending message. Try again later.");
              }
       };

       return (
              <div className="max-w-3xl mx-auto">
                     <h3 className="text-2xl md:text-3xl font-semibold mb-4">Get In Touch</h3>

                     <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-4"
                     >
                            <input
                                   type="text"
                                   placeholder="Name"
                                   {...register("name", {
                                          required: "Name is required",
                                          validate: (value) => value.trim().length > 0 || "Empty value is not valid",
                                   })}
                                   className="flex-1 p-2 rounded bg-white/10 border border-white/20 text-white outline-none"
                            />
                            {errors.name && (
                                   <p className="text-red-500 text-sm">{errors.name.message}</p>
                            )}

                            <input
                                   type="email"
                                   placeholder="Email"
                                   {...register("email", {
                                          required: "Email is required",
                                          validate: (value) => value.trim().length > 0 || "Empty value is not valid",
                                          pattern: {
                                                 value:
                                                        /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                                 message: "Invalid email address",
                                          },
                                   })}
                                   className="flex-1 p-2 rounded bg-white/10 border border-white/20 text-white outline-none"
                            />
                            {errors.email && (
                                   <p className="text-red-500 text-sm">{errors.email.message}</p>
                            )}

                            <textarea
                                   placeholder="Message"
                                   {...register("message", { required: "Message is required", validate: (value) => value.trim().length > 0 || "Empty value is not valid",})}
                                   className="flex-1 p-2 rounded bg-white/10 border border-white/20 text-white outline-none resize-none h-32"
                            />
                            {errors.message && (
                                   <p className="text-red-500 text-sm">{errors.message.message}</p>
                            )}

                            <button
                                   type="submit"
                                   disabled={isSubmitting}
                                   className="px-4 py-2 bg-blue-500 rounded hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            >
                                   {isSubmitting ? "Sending..." : "Send Message"}
                            </button>

                            {serverMessage && (
                                   <p className="mt-2 text-sm text-green-400">{serverMessage}</p>
                            )}
                     </form>
              </div>
       );
};

export default Contact;
