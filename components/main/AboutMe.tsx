import React from "react";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div id="about-me" className="flex flex-col md:flex-row items-center gap-8 py-16 px-8 md:px-20">
            {/* Left side: Picture */}
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden">
                <Image
                    src="/pfp.jpeg"
                    alt="Profile Picture"
                    width={300}
                    height={300}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </div>

            {/* Right side: Description */}
            <div className="md:w-2/3">
                <h1 className="text-5xl font-bold mb-4 text-white">
                    <span>About</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Me </span>
                </h1>
                <p className="text-lg text-white leading-relaxed">
                    Hi, I&apos;m Yogesh Kumar, a Full Stack Developer with expertise in Java,
                    Spring Boot, Python, React, and Angular. I specialize in creating
                    scalable backend services, robust frontend interfaces, and seamless
                    API integrations.

                    One of my notable projects is an unofficial Cricbuzz app that
                    delivers live cricket scores and player stats. I&apos;m currently expanding
                    my skills in JavaScript, Python, and DevOps, aiming to build
                    high-performance cloud-based solutions. <br /><br />
                    Besides coding, I take pleasure in reading, listening to audiobooks, and running. Let&apos;s connect to explore new projects and stay updated on tech trends!
                </p>

            </div>
        </div>
    );
};

export default AboutMe;
