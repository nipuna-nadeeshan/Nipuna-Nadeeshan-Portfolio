import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaHtml5, FaReact } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiCss3, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const services = [
  {
    name: 'Frontend Developing',
    description: 'Highly skilled in HTML, CSS, and JavaScript. Familiarity with front-end frameworks like React. Proficient in crafting interfaces that are both responsive and intuitive for users.',
  },

  {
    name: 'Backend Developing',
    description: 'Extensive understanding of server-side programming languages like Node.js and Python. Proficiency with databases such as MySQL and MongoDB. Skilled in constructing resilient and adaptable back-end systems.',
  },

  {
    name: 'UX / UI Designing',
    description: 'Proficient in user-centered design principles and methodologies. Skilled in creating intuitive, visually captivating user interfaces. Experience in user research, wireframe development. Strong knowledge of interaction design and usability testing.',
  },

];

const Services = () => {
  const handleSeeWorkClick = () => {
    window.open('https://github.com/Shanuka-A', '_blank');
  };

  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className=''></div>
        <div className="flex flex-col lg:flex-row">
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
              Presently, I am involved in the creation of the user interface and user experience for a website or web application.
              The foundational technologies employed in developing the frontend, which constitutes the portion of the website with which users directly engage,
              encompass HTML, CSS, and JavaScript. Moreover, they have expressed the intention to utilize Tailwind CSS,
              a well-liked CSS framework centered around utility-first principles, offering a range of pre-designed CSS
              classes to expedite the styling and arrangement procedures. Through the amalgamation of these technologies,
              the individual is proficient in crafting captivating and dynamic frontend designs for their web endeavors.
            </p>
            <a
                href="https://github.com/NipunPalliyaguru" target='_blank'
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
                  <div className="  border-b ml-4 border-white/20 h-[180px] mb-[60px] flex" key={index}>
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
