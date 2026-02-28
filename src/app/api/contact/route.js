import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
       try {
              const { name, email, message } = await req.json();

              if (!name || !email || !message) {
                     return NextResponse.json(
                            { success: false, message: "All fields are required" },
                            { status: 400 }
                     );
              }

              const transporter = nodemailer.createTransport({
                     service: "gmail",
                     auth: {
                            user: process.env.EMAIL_USER,
                            pass: process.env.EMAIL_PASS,
                     },
              });

              const mailOptions = {
                     from: process.env.EMAIL_USER, 
                     to: process.env.EMAIL_USER,
                     subject: `New Contact Message from ${name}`,
                     text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
                     replyTo: email, 
              };

              await transporter.sendMail(mailOptions);

              return NextResponse.json(
                     { success: true, message: "Message sent successfully" },
                     { status: 200 }
              );
       } catch (error) {
              console.error(error);
              return NextResponse.json(
                     { success: false, message: "Error sending email" },
                     { status: 500 }
              );
       }
}