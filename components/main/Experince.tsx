// components/Experience.tsx

import Image from 'next/image';

interface ExperienceItemProps {
  title: string;
  company: string;
  logoSrc: string;
  date: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, logoSrc, date }) => {
  return (
    <div className="flex items-center mb-12 p-3"> {/* Adjust outer margin here */}
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4">
        <Image src={logoSrc} alt={`${company} logo`} width={90} height={90} className="object-cover" />
      </div>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 w-full">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{company}</p>
        <p className="text-gray-500 dark:text-gray-300">{date}</p> {/* Display date here */}
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Associate Developer Intern',
      company: 'SAP Labs',
      logoSrc: '/sap.jpeg', // Ensure the path to your logo image is correct
      date: 'June 2022 - August 2022',
    },
    {
      title: 'Summer Training in Advance Java',
      company: 'IITM, Janakpuri',
      logoSrc: '/iintm.jpeg', // Ensure the path to your logo image is correct
      date: 'June 2022',
    },
  ];

  return (
    <div id="experience" className="container mx-auto py-8 dark:bg-gray-900 px-8 mb-40"> {/* Add padding to container */}
      <h1 className="text-5xl text-center font-bold mb-6 text-gray-900 dark:text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Experience{" "}
          </span></h1>
      <div className="relative">
        <div className="absolute border-l-2 border-gray-200 dark:border-gray-700 h-full left-8 top-0" />
        <div className="pl-8 pr-8"> {/* Add padding inside timeline */}
          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-8">
              <ExperienceItem {...experience} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
