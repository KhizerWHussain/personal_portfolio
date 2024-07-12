import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { listItemVariant } from '@/utils/framerMotionUtils';

const NavLinks = ({ links, small }) => {
  const path = usePathname();
  const backgroundColor = small ? 'bg-white' : 'bg-black';
  const color = small ? 'text-black' : 'text-white';
  return (
    <React.Fragment>
      {links.map((item, i) => (
        <motion.div variant={listItemVariant} key={`${i}.${item.id}`} className=''>
          <Link
            href={item.url}
            className={`rounded p-1 ${path === item.url && `${backgroundColor} ${color} `}`}>
            {item.title}
          </Link>
        </motion.div>
      ))}
    </React.Fragment>
  );
};

export default NavLinks;
