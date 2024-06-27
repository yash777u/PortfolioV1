"use client";

import React from "react";

const EducationDetails = () => {
  return (
    <div id="education">
      <div className="flex flex-col items-center mt-20 px-4 md:px-0">
        <h2 className="text-5xl font-bold text-white mb-8"> <span>

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Education{" "}
          </span>
          Details
        </span></h2>
        <div className="w-full max-w-4xl space-y-6">
          {/* Card 1 */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Master of Computer Applications (MCA)
            </h3>
            <p className="text-lg text-gray-400 mb-1">Manav Rachna International Institute of Research and Studies (MRIIRS)</p>
            <p className="text-md text-gray-500">2023-2025</p>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="text-lg text-gray-400 mb-1">Institute of Innovation in Technology and Management, affiliated with Guru Gobind Singh Indraprastha University (GGSIPU)</p>
            <p className="text-md text-gray-500">2020-2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetails;
