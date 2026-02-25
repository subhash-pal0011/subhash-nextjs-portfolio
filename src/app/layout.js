import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Subhash Pal | Full-Stack Developer & AI Enthusiast",

  description: "Portfolio of Subhash Pal showcasing full-stack projects, AI integrations, modern UI/UX, and scalable web applications built with Next.js & React.",

  icons: {
    icon: "/studentLogo.png"
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {children}
        
      </body>
    </html>
  );
}
