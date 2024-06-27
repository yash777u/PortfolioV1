import React from "react";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mb-5">
                    <div className="font-bold text-[16px]">Contact</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">yogesh.kumar.02@proton.me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">yogeshkumardagar7@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Yogesh Kumar @ 2024. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer