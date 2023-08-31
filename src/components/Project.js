import FMS from '../assets/FMS.png';
import REC from '../assets/RecMS.png';
import PET from '../assets/PETSM.png';
import mad from '../assets/mad.png';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';



const Project = () => {

    const techs = [
        {
            id: 1,
            src: PET,
            title: 'Pet Shelter Management System',
            style: 'shadow-blue-500',
            link: 'https://github.com/NipunPalliyaguru/Happy-Tails-Pet-Shelter-Management-System-ITP',
            logo: FaGithub
        },
        {
            id: 2,
            src: REC,
            title: 'Recipe Management System  ',
            style: 'shadow-blue-500',
            link: 'https://github.com/NipunPalliyaguru/Recipe-Management-System',
            logo: FaGithub
        },
        {
            id: 3,
            src: FMS,
            title: 'Fuel Management System',
            style: 'shadow-blue-500',
            link: 'https://github.com/NipunPalliyaguru/Online-Fuel-Management-System',
            logo: FaGithub
        },
        {
            id: 4,
            src: mad,
            title: 'BODIMA App',
            style: 'shadow-blue-500',
            link: 'https://github.com/NipunPalliyaguru/BODIMA-MAD-Mobile-App-Y2S2',
            logo: FaGithub
        },

    ]
    return (
        <section className="section" id="Project">
            <div className='container mx-auto flex'>

                <div
                    className='  max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='test-4xl font-bold'>
                        <h2 className="h2 text-fuchsia-400 mb-6">Projects </h2>
                        <h3 className='h3 mb-4'>Projects I have completed, including collaborations with teams</h3>

                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.4)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='  grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 px-12 sm:px-0'>

                        {
                            techs.map(({ id, src, title, style, link, logo }) => (
                                <div key={id} className={`bg-opacity-100 bg-sky-900 shadow-sm hover:scale-125 pt-2 duration-500  rounded-lg ${style}`}>
                                    <center>
                                    <a href={link} target='_blank'>
                                        <img src={src} alt="" className='w-full mx-auto' />
                                        <p className='mt-4'>{title}</p>
                                        <p className='object-center py-4 w-11  shadow-sm  ' title='Get The Code'>
                                            <FaGithub></FaGithub>

                                        </p>
                                        </a>
                                    </center>

                                </div>
                            ))


                        }

                    </motion.div>


                </div>
            </div>
        </section>
    );
};

export default Project;
