import CustomImage from '@/components/CustomImage';

const Homepage = () => {
  return (
    <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      <div className='h-1/2 relative lg:h-full lg:w-1/2'>
        <CustomImage image={'/hero.png'} alt={'hero'} fill={true} className={'object-contain'} />
      </div>
      <div className='h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2'>
        <h1 className='text-4xl font-bold md:text-6xl'>
          Crafting Digital Experiences, Designing Tomorrow
        </h1>
        <p className='md:text-xl'>
          Welcome to my digital canvas, where innovation and creativity converge. With a keen eye
          for aesthetics and a mastery of code, my portfolio showcases a diverse collection of
          projects that reflect my commitment to excellence.
        </p>
        <div className='w-full flex gap-4'>
          <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>
            View My Work
          </button>
          <button className='p-4 rounded-lg ring-1 ring-black'>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
