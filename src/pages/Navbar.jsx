import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-[50px] px-4 sm:px-6 md:px-10 lg:px-[60px] mt-[20px] sm:mt-[30px] md:mt-[40px] bg-white text-black w-full'>
      <div className='h-[30px] sm:h-[35px] md:h-[40px] w-[120px] sm:w-[140px] md:w-[150px]'>
        <img src='./22.png' alt='Logo' className='h-full w-full object-contain' />
      </div>
      <button className='h-[35px] sm:h-[40px] w-[90px] sm:w-[100px] hover:border-black text-[10px] sm:text-[12px] font-semibold rounded-lg border border-gray-300'>
        Contact Us
      </button>
    </div>
  );
};

export default Navbar;