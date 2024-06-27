import React from 'react';
import { FaGlobe, FaDatabase, FaCode, FaDesktop, FaCube } from 'react-icons/fa';
import { VscTools } from 'react-icons/vsc';

const services = [
  {
    title: 'Web Development',
    description: 'Crafting full-stack web solutions using cutting-edge technologies.',
    icon: <FaGlobe size={24} />,
  },
  {
    title: 'Backend Development',
    description: 'Building robust backend systems with SpringBoot, MySQL, and more.',
    icon: <FaDatabase size={24} />,
  },
  {
    title: 'API Development and Integration',
    description: 'Creating custom APIs for seamless integration and connectivity.',
    icon: <FaCode size={24} />,
  },
  {
    title: 'Standalone Application',
    description: 'Developing tailored standalone applications to meet specific needs.',
    icon: <FaDesktop size={24} />,
  },
  {
    title: 'Static Application',
    description: 'Building fast and secure static applications using modern frameworks.',
    icon: <FaCube size={24} />,
  },
  {
    title: 'Service and Support',
    description: 'Providing reliable service and comprehensive support for all technical needs.',
    icon: <VscTools size={24} style={{ height: '40px', width: '24px' }} />,

  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="container mx-auto px-4 space-y-6 bg-slate-900 text-white py-8 md:py-12 lg:py-20">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Our Services</h2>
        <p className="max-w-[85%] leading-normal text-gray-400 sm:text-lg sm:leading-7">
          We offer a comprehensive range of services to meet your development needs.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg border border-gray-700 bg-gray-800 select-none hover:shadow hover:shadow-teal-200 p-2"
          >
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-gray-900 mb-4">
                {service.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
