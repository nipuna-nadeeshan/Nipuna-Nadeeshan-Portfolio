import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';
import { fadeIn  } from '../variants';

const About = () => {
  const[ref, InView] = useInView({
    threshold:0.5,
  });
  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
     <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen '>
      {/*img */}
      <motion.div
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}} 
      className='  rounded-lg flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top bg'>

      </motion.div>

      {/*text */}
      <motion.div
      variants={fadeIn('left', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.3}} 
      className='flex-1 sm:mb-40'>
        <h2 className='h2 text-fuchsia-300'>About me.</h2>
        <h3 className='h3 mb-4'>I'm an undergraduate Student at SLIIT </h3>
        <p className='mb-6 text-[20px] text-justify'>
        Greetings! My name is Nipun, and presently, I am pursuing my bachelor's degree at the SLIIT Faculty of Computing. As a diligent scholar, I possess a fervent desire to deliver unparalleled excellence in service. I consistently endeavor to accomplish assignments to the utmost of my capabilities, driven by my unwavering commitment to attaining greatness. I approach my obligations with utmost sincerity and remain motivated to give my utmost in both my professional obligations and everyday endeavors.
        
        </p>
        {/*stats*/}
        <div className='flex gap-x-10 lg:gap-x-12 mb-12'>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {InView ?<CountUp start={0} end={2} duration={4}/>:null}
            </div>
            <div className='font-primary text-sm tracking-[3px]'>
              Years of <br/>
              Experience
            </div>
          </div>

          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {InView ?<CountUp start={0} end={4} duration={4}/>:null}
            </div>
            <div className='font-primary text-sm tracking-[3px]'>
              Projects <br/>
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
