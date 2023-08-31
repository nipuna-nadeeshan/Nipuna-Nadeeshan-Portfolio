import MAD from '../assets/mad.png';
import ITP from '../assets/ITP.png';
import OCR from '../assets/ocr.png';
import MOM from '../assets/mom.png';
import SIG from '../assets/sig.png';
import BLOOM from '../assets/bloom.png';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// import { BsArrowUpRight } from 'react-icons/bs';
// import { FaReact } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
// import { Link } from 'react-scroll';



const Project = () => {

    const techs = [
        {
            id: 1,
            src: ITP,
            title: 'Construction Management System',
            style: 'shadow-blue-500',
            link: 'https://github.com/nipuna-nadeeshan/ITP-Samod-Construction-Comapany-Mangement-System.git',
            logo: FaGithub
        },
        {
            id: 2,
            src: MAD,
            title: 'OFFER ME - Mobile Application',
            style: 'shadow-blue-500',
            link: 'https://github.com/nipuna-nadeeshan/OFFER-ME-Android-App.git',
            logo: FaGithub
        },
        {
            id: 3,
            src: MOM,
            title: 'Moms Pot - Web Application',
            style: 'shadow-blue-500',
            link: 'https://github.com/SKYREK/Moms-Pot.git',
            logo: FaGithub
        },
        {
            id: 4,
            src: OCR,
            title: 'OCR - Allergy Finder App',
            style: 'shadow-blue-500',
            link: 'https://github.com/SKYREK/OCR-Allergy-Finder.git',
            logo: FaGithub
        },
        {
            id: 5,
            src: SIG,
            title: 'Signature Cuisine - Web Application',
            style: 'shadow-blue-500',
            link: 'https://github.com/SKYREK/OCR-Allergy-Finder.git',
            logo: FaGithub
        },
        {
            id: 6,
            src: BLOOM,
            title: 'BLOOMROOM - Mobile Application',
            style: 'shadow-blue-500',
            link: 'https://github.com/SKYREK/Bloom-Room-Mobile-Application.git',
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
                                    <a href={link} target='_blank' rel="noopener noreferrer">
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
