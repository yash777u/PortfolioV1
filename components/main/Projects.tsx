import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 z-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <a href="https://github.com/yash777u/Cricbuzz">
            <ProjectCard
              src="/p2.png"
              title="Cricbuzz unofficial"
              description="Experience live & Upcomping matches with real-time scoreboards and detailed player stats."
            />
          </a>
          <a href="https://github.com/yash777u/window-11-clone">
            <ProjectCard
              src="/p5.png"
              title="Window 11 Web UI"
              description="Step into a virtual Windows 11 experience—crafted in HTML and CSS—to showcase innovation through nostalgic design."
            />
          </a>
          <a href="https://github.com/yash777u/Python-Automation-Upload-Post">
            <ProjectCard
              src="/p4.jpeg"
              title="Instagram Automation"
              description="Automate Instagram posts, reels, and likes effortlessly. Enhance your social media strategy with ease!."
            />
          </a>
          <a href="https://github.com/yash777u/myCart">
            <ProjectCard
              src="/p1.png"
              title="myCart - Ecom project"
              description="Streamlined e-commerce with seamless browsing, categorized product uploads, and effortless shopping."
            />
          </a>
          <a href="https://github.com/yash777u/Face-Detection?tab=readme-ov-file">
            <ProjectCard
              src="/p6.png"
              title="Face Detection"
              description="Face Detection using openai in python."
            />
          </a>
          <a href="https://github.com/yash777u/Car-Simulator">
            <ProjectCard
              src="/p3.png"
              title="Car Controller unity"
              description="Cart Controller Unity: Mastering physics-driven acceleration for dynamic, freeform spatial movement."
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
