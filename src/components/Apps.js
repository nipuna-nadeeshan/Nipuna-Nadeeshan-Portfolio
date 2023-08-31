import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	FiFacebook,
	FiInstagram,
	
   
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const socialLinks = [
	{
		id: 1,
		icon: <FiGlobe />,
		url: 'https://nipun-ayodya.netlify.app',
	},
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/NipunPalliyaguru',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/nipun-palliyaguru-98a470216/',
	},
	{
		id: 4,
		icon: <FiFacebook />,
		url: 'https://fcebook.com/nipun.ayodya',
	},
	{
		id: 4,
		icon: <FiInstagram />,
		url: 'https://www.instagram.com/Nipun.Ayodya/',
	},
	{
		id: 3,
		icon: <FiTwitter />,
		url: 'https://twitter.com/nipin.ayodya89',
	},
	
];

const Apps = () => {
	return (

        <motion.div
        variants={fadeIn('down', 0.5)}
        initial="hidden"
        whileInView={'show'}
        // className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
      >


		<div className="container mx-auto -mb-80">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-dark-900 bg-ternary-dark hover:bg-blue-900 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				
			</div>
		</div>
        </motion.div>
	);
};

export default Apps;