import React from 'react';
import Link from 'next/link';

const MainLogo = () => {
  return (
    <React.Fragment>
      <Link
        href='/'
        className='text-sm bg-black rounded p-1 font-semibold flex items-center justify-center'>
        <span className='text-white mr-1'>Khizer</span>
        <span className='w-14 h-8 rounded bg-white text-black flex items-center justify-center'>
          Hussain
        </span>
      </Link>
    </React.Fragment>
  );
};

export default MainLogo;
