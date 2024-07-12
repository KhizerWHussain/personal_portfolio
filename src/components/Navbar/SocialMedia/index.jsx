import React from 'react';
import Link from 'next/link';
import CustomImage from '@/components/CustomImage';

const SocialMedia = ({ links }) => {
  return (
    <React.Fragment>
      {links.map((item, i) => (
        <Link key={`${item.id}.${i}`} href={item.link}>
          <CustomImage image={item.image} alt={item.alt} height={24} width={24} priority={true} />
        </Link>
      ))}
    </React.Fragment>
  );
};

export default SocialMedia;
