import React from 'react';
import Image from '../assets/profile.png';
import { FaGithub, FaLinkedin, FaLink } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import pdf from '../assets/NadeeshanCV.pdf';

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              NIPUNA <span>NADEESHAN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  'Developer', 2000,
                  'Student', 2000,
                  'WEB DESIGNER', 2000,
                ]}
                speed={50}
                className="text-gradient"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Hello!
              I'm Nipuna Nadeeshan and I'm currently an Undergraduate student at the SLIIT
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >

              <a
                download="NadeeshanCV.pdf" href={pdf}
                className=" font-general-medium flex text-justify  w-36 sm:w-48 mt-0 s:mt-8 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-600 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500  hover:text-white duration-500"
                aria-label="Download Resume"
              >
                <div className="mr-2 sm:mr-4 h-5 w-5 sn:w-6 sm:h-6 duration-100"></div>
                <span className="text-sm sm:text-lg font-general-medium duration-100">
                  Download CV
                </span>
              </a>






              <motion.div
                variants={fadeIn('up', 0.7)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0  "
              >
                <a href="https://github.com/nipuna-nadeeshan">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/nipuna-nadeeshan">
                  <FaLinkedin />
                </a>
                <a href="https://nipuna-nadeeshan.netlify.app">
                  <FaLink />
                </a>
              </motion.div>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
