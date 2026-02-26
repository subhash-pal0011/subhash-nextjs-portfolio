import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
       apiKey: process.env.OPENAI_API_KEY,
       baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req) {
       try {
              const { message } = await req.json();

              if (!message) {
                     return NextResponse.json(
                            { success: false, message: "Message is required" },
                            { status: 400 }
                     );
              }

              const completion = await client.chat.completions.create({
                     model: "openai/gpt-4o-mini",

                     messages: [
                            {
                                   role: "system",
                                   content: `You are an AI assistant representing Subhash Pal.
                                   About Subhash:
                                   - Full Stack Developer (MERN + Next.js)
                                   - Fresher
                                   - Skills: Next.js, React, Redux, MongoDB, Node.js, Express.js, Tailwind CSS
                                   - Experience: AI Integration, Razorpay, Nodemailer, Twilio
                                   - Education: Overall CGPA 7.2, Final Semester CGPA 8.2 (strong improvement)
                                   - Focus: Clean UI/UX, scalable apps, performan

                                   Rules:
                                  - Be confident & professional
                                  - Keep answers concise & friendly
                                  - Present academics positively
                                  - If question is unrelated to Subhash → politely redirect
                                  - Do NOT answer general knowledge questions
                                  - Do NOT invent projects or experience
                                  - If unsure → respond politely`,
                            },
                            {
                                   role: "user",
                                   content: message,
                            },
                     ],
              });

              return NextResponse.json({
                     success: true,
                     reply: completion.choices[0].message.content,
              });

       } catch (error) {
              console.error("AI ERROR:", error);
              return NextResponse.json(
                     { success: false, message: "Something went wrong" },
                     { status: 500 }
              );
       }
}