"use client";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { CgMail } from "react-icons/cg";
import Image from "next/image";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { AiOutlineSolution } from "react-icons/ai";
import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { VscDebugBreakpointData } from "react-icons/vsc";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={` bg-white ${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-gray-900">
        <div className="container">
          <nav className="container flex px-0 justify-between items-center py-10">
            <h1 className="text-xl md:text-4xl font-bold text-teal-600 dark:text-white">
              Portfolio
            </h1>
            <ul className="flex items-center gap-2 md:gap-5">
              <li>
                <Button
                  variant="default"
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                >
                  <MdOutlineDarkMode className="text-xl" />
                </Button>
              </li>
              <li>
                <Link href="/Daniyals resume.pdf" download={"Resume"}>
                  <Button variant="link" className="text-lg">
                    Resume
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center py-10 md:p-10 w-full md:w-[500px] mx-auto">
            <h2 className="text-4xl font-bold text-teal-600 py-2">
              Daniyal Ahmed Ansari
            </h2>
            <h3 className="text-lg font-semibold py-2 md:py-4 dark:text-white">
              Frontend Engineer
            </h3>
            <p className="text-md py-2 md:py-4 leading-relaxed dark:text-white ">
              Transforming ideas into beautiful and interactive web experiences.
            </p>
            <div className="flex text-4xl justify-center gap-10 md:gap-16 py-6 text-gray-600">
              <Link href="https://www.linkedin.com/in/daniyal-ahmed25/">
                <FaLinkedinIn />
              </Link>
              <Link href="https://github.com/danizus">
                <FaGithub />
              </Link>
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=daniyalansari10nov@gmail.com">
                <CgMail />
              </Link>
              <Link href="tel:03352385051">
                <IoCall className="text-3xl" />
              </Link>
            </div>
          </div>
          <div className="relative w-72 md:w-96 h-72 md:h-96 bg-gradient-to-b py-10 from-teal-500 rounded-full mx-auto overflow-hidden mb-10">
            <Image
              fill
              objectFit="cover"
              alt="Daniyal"
              src="/dev-ed-wave.png"
            />
          </div>
          <section className="py-10 dark:bg-gray-900">
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 my-3 gap-20">
              <div>
                <h2 className="text-3xl font-bold  dark:text-white">
                  TechStack
                </h2>
                <ul className="  columns-2 mt-10">
                  <li className="flex gap-2 text-lg items-center text-teal-600 mb-2  ">
                    <FaHtml5 className="text-xl" /> Html
                  </li>
                  <li className="flex gap-2 text-lg items-center text-teal-600 my-2 ">
                    <IoLogoCss3 className="text-xl" /> Css3
                  </li>
                  <li className="flex gap-2 text-lg items-center text-teal-600 my-2 ">
                    <SiJavascript className="text-xl" />
                    Javascript
                  </li>
                  <li className="flex text-lg  gap-2 items-center  text-teal-600  ">
                    <SiTypescript className="text-xl" />
                    Typescript
                  </li>
                  <li className="flex gap-2 text-lg items-center text-teal-600 my-2 ">
                    <IoLogoReact className="text-xl" />
                    Reactjs
                  </li>
                  <li className="flex gap-2 text-lg items-center text-teal-600 my-2 ">
                    <RiNextjsFill className="text-xl" /> Nextjs
                  </li>
                  <li className="flex gap-2 text-lg items-center text-teal-600 my-2 ">
                    <RiTailwindCssFill className="text-xl" /> Tailwindcss
                  </li>
                  <li className="flex gap-2 text-lg items-center text-teal-600 my-2 ">
                    <SiMui className="text-xl" /> MaterialUi
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold  dark:text-white mb-5">
                  Experience
                </h2>
                <p className="text-lg dark:text-white">
                  With a year of experience in modern, cutting-edge web
                  technologies, I have worked on various CRMs and websites. My
                  projects feature intricate designs and complex
                  functionalities, consistently proving my expertise in every
                  situation. <br />
                  Below are some of the areas I have worked during my experience
                </p>
                <ul className="mt-5 md:columns-2 dark:text-white">
                  <li className="flex items-center gap-2">
                    <VscDebugBreakpointData className="text-teal-600" />{" "}
                    Authentication
                  </li>
                  <li className="flex items-center gap-2">
                    <VscDebugBreakpointData className="text-teal-600" /> State
                    Mangement
                  </li>
                  <li className="flex items-center gap-2">
                    <VscDebugBreakpointData className="text-teal-600" /> Styling
                  </li>
                  <li className="flex items-center gap-2">
                    <VscDebugBreakpointData className="text-teal-600" /> Forms
                    And validation
                  </li>
                  <li className="flex items-center gap-2">
                    <VscDebugBreakpointData className="text-teal-600" /> API
                    Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <VscDebugBreakpointData className="text-teal-600" /> Version
                    Control and Collaboration
                  </li>
                  <li className="flex items-center gap-2">
                    <VscDebugBreakpointData className="text-teal-600" />
                    Responsive Design
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="py-10 dark:bg-gray-900">
            <div className=" mx-auto  ">
              <h2 className="text-3xl font-bold dark:text-white">Portfolio</h2>
              <p className="my-5 text-lg dark:text-white">
                My portfolio showcases a diverse array of projects that
                comprehensively cover various aspects of frontend development.
                These projects highlight my expertise in design, functionality,
                code optimization, and API integration and much more!
              </p>
              <div className="grid gap-10 grid-cols-1 md:grid-cols-2 mt-10">
                <Link href="https://haworthcrm.devmngt.com/en/dashboard">
                  <div className="relative w-full h-72 md:h-96 rounded-md overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-black dark:hover:shadow-white">
                    <Image
                      fill
                      alt="portfolio"
                      src="/web1.png"
                      objectFit="cover"
                      objectPosition="left"
                    />
                  </div>
                  <h1 className="mt-5 text-2xl font-bold dark:text-white">
                    Haworth Admin Dashboard
                  </h1>
                  <p className="mt-2 text-base text-light dark:text-white">
                    I developed a comprehensive CRM for job management, handling
                    all API integrations and functionality, including
                    authentication. This project showcases my skills in Frontend
                    integration and secure user authentication.
                  </p>
                </Link>
                <Link href="https://domainname-nextjs.vercel.app/">
                  <div className="relative w-full h-72 md:h-96 rounded-md overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-black  dark:hover:shadow-white">
                    <Image
                      fill
                      alt="portfolio"
                      src="/web3.png"
                      objectFit="cover"
                      objectPosition="left"
                    />
                  </div>
                  <h1 className="mt-5 text-2xl font-bold dark:text-white">
                    Domain Name Dispute Resolution
                  </h1>
                  <p className="mt-2 text-base text-light dark:text-white">
                    This project showcases my ability to create visually complex
                    and aesthetically pleasing interfaces.
                  </p>
                </Link>

                <div className="relative w-full h-72 md:h-96 rounded-md overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-black  dark:hover:shadow-white">
                  <Image fill alt="portfolio" src="/web4.png" />
                </div>
                <Link href="https://admin.marhabajet.com/booking">
                  <div className="relative w-full h-72 md:h-96 rounded-md overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-black  dark:hover:shadow-white">
                    <Image
                      fill
                      alt="portfolio"
                      src="/web2.png"
                      objectFit="cover"
                      objectPosition="left"
                    />
                  </div>
                  <h1 className="mt-5 text-2xl font-bold dark:text-white">
                    Marhaba Admin Dashboard
                  </h1>
                  <p className="mt-2 text-base text-light dark:text-white">
                    I designed and developed the frontend for a CRM that handles
                    flight bookings and reports, ensuring a seamless user
                    experience. This project highlights my expertise in creating
                    intuitive interfaces and responsive web design.
                  </p>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
