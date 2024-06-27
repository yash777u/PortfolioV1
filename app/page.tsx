import AboutMe from "@/components/main/AboutMe";
import Certificates from "@/components/main/Certificates";
import Contact from "@/components/main/Contact";
import EducationDetail from "@/components/main/EducationDetail";
import Encryption from "@/components/main/Encryption";
import Experience from "@/components/main/Experince";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Services from "@/components/main/Services";
import Skills from "@/components/main/Skills";
import { Certificate } from "crypto";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <EducationDetail />
        <Certificates />
        <Encryption />
        <Contact />
      </div>
    </main>
  );
}
