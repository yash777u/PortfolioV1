"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <div className="w-full h-[70px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 lg:px-20">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] lg:px-[20px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
          onClick={handleMenuItemClick} // Close menu on link click
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Dev/Space
          </span>
        </a>

        <div className="hidden md:flex w-auto h-full flex-row items-center justify-between lg:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[50px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer p-1 pr-5" onClick={handleMenuItemClick}>
              About
            </a>
            <a href="#skills" className="cursor-pointer p-1 pl-4 pr-4" onClick={handleMenuItemClick}>
              Skills
            </a>
            <a href="#projects" className="cursor-pointer p-1 pl-4 pr-4" onClick={handleMenuItemClick}>
              Projects
            </a>
            <a href="#experience" className="cursor-pointer p-1 pl-4 pr-4" onClick={handleMenuItemClick}>
              Experience
            </a>
            <a href="#services" className="cursor-pointer p-1 pl-4 pr-4" onClick={handleMenuItemClick}>
              Services
            </a>
            <a href="#education" className="cursor-pointer p-1 pl-4 pr-4" onClick={handleMenuItemClick}>
              Education
            </a>
            <a href="#contact" className="cursor-pointer p-1 pl-4 pr-4" onClick={handleMenuItemClick}>
              Contact
            </a>
          </div>
        </div>

        <div className="flex md:hidden flex-row items-center">
          <button onClick={handleMenuToggle} className="cursor-pointer">
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.href} key={social.name} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.src}
                alt={social.name}
                width={30}
                height={30}
              />
            </a>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden w-full bg-[#03001417] bg-purple-600 px-10 py-5 mt-2 rounded-xl opacity-[0.95]">
          <div className="flex flex-col items-start space-y-4 text-gray-200">
            <a href="#about-me" className="cursor-pointer" onClick={handleMenuItemClick}>
              About
            </a>
            <a href="#skills" className="cursor-pointer" onClick={handleMenuItemClick}>
              Skills
            </a>
            <a href="#projects" className="cursor-pointer" onClick={handleMenuItemClick}>
              Projects
            </a>
            <a href="#experience" className="cursor-pointer" onClick={handleMenuItemClick}>
              Experience
            </a>
            <a href="#services" className="cursor-pointer" onClick={handleMenuItemClick}>
              Services
            </a>
            <a href="#education" className="cursor-pointer" onClick={handleMenuItemClick}>
              Education
            </a>
            <a href="#contact" className="cursor-pointer" onClick={handleMenuItemClick}>
              Contact
            </a>
            <div className="flex flex-row gap-5 mt-20">
              {Socials.map((social) => (
                <a href={social.href} key={social.name} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={30}
                    height={30}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
