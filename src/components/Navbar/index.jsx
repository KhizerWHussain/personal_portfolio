'use client';
import React, { useState } from 'react';
import SocialMedia from './SocialMedia';
import NavLinks from './NavLinks';
import MainLogo from './MainLogo';
import { motion } from 'framer-motion';
import {
  bottomVariant,
  centerVariant,
  listItemVariant,
  listVariant,
  topVariant,
} from '@/utils/framerMotionUtils';

const navbarList = [
  { id: 1, url: '/', title: 'Home' },
  { id: 2, url: '/about', title: 'About' },
  { id: 3, url: '/contact', title: 'Contact' },
  { id: 4, url: '/portfolios', title: 'Portfolios' },
];

const socialMediaLinks = [
  { id: 1, image: '/github.png', link: '#', alt: 'github' },
  { id: 2, image: '/dribbble.png', link: '#', alt: 'dribble' },
  { id: 3, image: '/facebook.png', link: '#', alt: 'facebook' },
  { id: 4, image: '/instagram.png', link: '#', alt: 'instagram' },
  { id: 5, image: '/linkedin.png', link: '#', alt: 'linkedin' },
  { id: 6, image: '/pinterest.png', link: '#', alt: 'pinterest' },
];

const btnLinesArray = [
  { id: 1, variant: topVariant, slug: 'origin-left' },
  { id: 2, variant: centerVariant, slug: 'origin-center' },
  { id: 3, variant: bottomVariant, slug: 'origin-left' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl z-5'>
      <div className='hidden md:flex gap-4 w-1/3'>
        <NavLinks links={navbarList} small={false} />
      </div>
      <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
        <MainLogo />
      </div>
      <div className='hidden md:flex gap-4 w-1/3'>
        <SocialMedia links={socialMediaLinks} />
      </div>
      <div className='md:hidden'>
        <button
          className='w-10 h-8 flex flex-col justify-between z-50 relative'
          onClick={() => setOpen((prev) => !prev)}>
          {btnLinesArray?.map((item, index) => (
            <motion.div
              key={`${index}.${item.id}.${item.slug}`}
              variants={item.variant}
              animate={open ? 'opened' : 'closed'}
              className={`w-10 h-1 bg-black rounded ${item.slug}`}></motion.div>
          ))}
        </button>
        {!open ? null : (
          <motion.div
            variants={listVariant}
            initial='closed'
            animate='opened'
            className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-10'>
            <NavLinks links={navbarList} small={true} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
