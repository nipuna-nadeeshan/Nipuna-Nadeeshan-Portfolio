import React from 'react';
// import { BsArrowUpRight } from 'react-icons/bs';
// import { FaHtml5, FaReact } from 'react-icons/fa';
// import { SiMongodb, SiFirebase, SiCss3, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// import { Link } from 'react-scroll';

const services = [
  {
    name: 'Full-Stack Development',
    description: 'I specialize in full-stack development, encompassing HTML, CSS, JavaScript, React, and Node.js. My focus is on creating responsive and user-centric applications that seamlessly integrate front-end and back-end technologies.',
  },

  {
    name: 'Database Management',
    description: 'My expertise extends to database management, including MySQL and MongoDB. I ensure data integrity, security, and optimal performance, making databases a reliable backbone for my software solutions.',
  },

  {
    name: 'UI/UX Design',
    description: 'I am passionate about crafting exceptional user experiences. My approach involves user-centered design principles, user research, wireframe development, and interactive design. My designs prioritize both visual appeal and functionality, backed by usability testing.'
  },
];




const Services = () => {
  

  return (
    <section className="section" id="services">
      <div className="container mx-auto ">
        <div className=''></div>
        <div className="flex flex-col lg:flex-row lg:gap-x-20">
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  lg:bg-bottom bg-no-repeat mix-blend-lighten lg:mb-0"
          >
            <h2 className="h2 text-fuchsia-400 mb-6">What I do</h2>
            <p className='mb-6 text-[20px] text-justify'>
            In my role as a software engineer, I thrive on harnessing the power of technology to create innovative solutions. My toolkit includes HTML, CSS, and JavaScript for crafting responsive and dynamic web interfaces with a keen eye for UI/UX design. I'm proficient in Java, React, and Flutter for building robust and user-friendly applications that strike the perfect balance between functionality and aesthetics. Tailwind CSS adds finesse to my web designs. When it comes to server-side development, I rely on Node.js to ensure efficient and scalable performance. My code lives on GitHub, where I maintain a record of my projects and collaborate with fellow developers. With a strong foundation in these technologies and a focus on user-centered design, I tackle challenges head-on, delivering high-quality software solutions that stand out in the digital landscape.
            </p>
            <a
                href="https://github.com/nipuna-nadeeshan" target='_blank' rel="noopener noreferrer"
                className=" font-general-medium flex text-justify  w-36 sm:w-48 mt-0 s:mt-8 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-600 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500  hover:text-white duration-500"
                aria-label="Download Resume"
              >
                <div className="mr-2 sm:mr-4 h-5 w-5 sn:w-6 sm:h-6 duration-100"></div>
                <span className="text-sm sm:text-lg font-general-medium duration-100">
               See My Works
                </span>
              </a>
          </motion.div>

          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description } = service;
                return (
                  <div className="  border-b border-white/20 h-[200px] mb-[60px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h5 className="text-[20px] tracking-wider font-primary font-semibold  ">

                        {name}

                      </h5>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
