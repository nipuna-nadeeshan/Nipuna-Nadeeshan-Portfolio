import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// import html from '../assets/html.png';
import aws from '../assets/aws.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import node from '../assets/node.png';
import github from '../assets/github.png';
import flutter from '../assets/flutter.png';
import java from '../assets/java.png';


const Work = () => {

  const techs=[
    {
      id:1,
      src:aws,
      title:'AWS',
      style:'shadow-orange-500'
    },
    {
      id:2,
      src:css,
      title:'CSS',
      style:'shadow-blue-500'
    },
    {
      id:3,
      src:javascript,
      title:'JavaScript',
      style:'shadow-yellow-500'
    },
    {
      id:4,
      src:java,
      title:'Java',
      style:'shadow-red-500'
    },
    {
      id:5,
      src:react,
      title:'React',
      style:'shadow-blue-600'
    },
    {
      id:6,
      src:tailwind,
      title:'Tailwind',
      style:'shadow-sky-400'
    },
    {
      id:7,
      src:node,
      title:'Node',
      style:'shadow-green-400'
    },
    {
      id:8,
      src:github,
      title:'Github',
      style:'shadow-gray-500'
    },
    {
      id:9,
      src:flutter,
      title:'Flutter',
      style:'shadow-sky-400'
    },
  ]
  return(
    <section className="section" id="work">
  <div className='container mx-auto flex'>

    <div
    className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
      <motion.div 
      variants={fadeIn('right', 0.3)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
      className='test-4xl font-bold'>
      <h2 className="h2 text-fuchsia-400 mb-6">Experience </h2>
      <h3 className='h3 mb-4'>These are the technological tools I have experience using. </h3>
      
      </motion.div>
      <motion.div 
      variants={fadeIn('left', 0.4)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
      className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

        {
          techs.map(({id,src,title,style})=>(
            <div 
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-6 rounded-lg ${style}`}>
            <img src={src} alt ="" className='w-20 mx-auto'/>
            <p className='mt-4'>{title}</p>
          </div>  
          ))
        }
        
      </motion.div>

    </div>
  </div>
  </section>
  );
};

export default Work;
