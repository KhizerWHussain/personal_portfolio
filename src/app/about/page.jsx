'use client';
import { motion } from 'framer-motion';
import AboutProfile from '@/components/About/Profile';
import AboutSkills from '@/components/About/Skills';

const languageSkills = [
  { id: 1, name: 'React.js' },
  { id: 2, name: 'Next.js' },
  { id: 3, name: 'Javascript' },
  { id: 4, name: 'Typescript' },
  { id: 5, name: 'Material UI' },
  { id: 6, name: 'Crema' },
  { id: 7, name: 'Nest' },
  { id: 8, name: 'Bootstrap' },
  { id: 9, name: 'Tailwind' },
  { id: 10, name: 'Redux' },
  { id: 11, name: 'Git' },
  { id: 12, name: 'Mongodb' },
];

const About = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}>
      <div className=''>
        <div className='sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64'>
          <div className='flex flex-col gap-12 justify-center'>
            <AboutProfile />
          </div>
          <div className='flex flex-col gap-12 justify-center'>
            <AboutSkills languages={languageSkills}/>
          </div>
          <div className=''>Experience</div>
        </div>
        <div className='hidden'></div>
      </div>
    </motion.div>
  );
};

export default About;
