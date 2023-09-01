import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen ">
          {/*img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="  rounded-lg flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top bg"
          ></motion.div>

          {/*text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 sm:mb-40"
          >
            <h2 className="h2 text-fuchsia-300">About me.</h2>
            <h3 className="h3 mb-4">I'm an undergraduate Student at SLIIT </h3>
            <p className="mb-6 text-[20px] text-justify">
              Greetings! I'm Nipuna Nadeeshan, a passionate software engineer
              and entrepreneur currently pursuing my bachelor's degree at the
              SLIIT Faculty of Computing. With a strong foundation in software
              development and a flair for innovation, I thrive on creating
              digital solutions that make a difference. My journey as a
              co-founder and CEO at {" "}
              <a
                href="https://www.skyrek.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" underline"
              >
                SKYREK (Pvt) Ltd
              </a>{" "}
              has honed my leadership and problem-solving skills, while my
              experience in developing various applications reflects my
              commitment to practical, user-centric design. I'm dedicated to
              harnessing technology's potential to simplify, enhance, and
              inspire. Explore my portfolio to see my work and the projects I'm
              proud to have crafted.
            </p>

            {/*stats*/}
            <div className="flex gap-x-10 lg:gap-x-12 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={3} duration={4} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[3px]">
                  Years of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={10} duration={4} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[3px]">
                  Projects <br />
                  Completed
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
