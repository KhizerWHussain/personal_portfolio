import React from 'react';

const AboutSkills = ({ languages }) => {
  return (
    <>
      <h1 className='font-bold text:2xl'>Skills</h1>
      <div className='flex gap-4 flex-wrap'>
        {languages &&
          languages?.map((item, i) => (
            <div
              key={`${i}.${item.id}`}
              className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
              {item?.name}
            </div>
          ))}
      </div>
    </>
  );
};

export default AboutSkills;
