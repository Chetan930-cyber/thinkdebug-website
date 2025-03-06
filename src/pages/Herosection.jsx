import React from 'react';

const Herosection = () => {
  return (
    <div className="relative flex flex-col items-center mt-8 px-4 sm:px-6 md:px-8">
    
      <div className="relative w-full max-w-[900px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-xl">
        <img className="h-full w-full object-cover" src="./hero.png" alt="Hero" />

       
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white bg-black/40 p-4 sm:p-6 rounded-xl">
         
          <div className="bg-gray-600 text-white px-2 py-[4px] rounded-full text-xs font-semibold mb-2 flex items-center space-x-1">
           
            <img src="discount.png" alt="Discount" className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] object-contain" />
           
            <span className="text-base sm:text-lg font-bold">AED 95</span>
            <span className="text-xs sm:text-sm line-through ml-1 text-gray-300">AED 145</span>
          </div>

       
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Welcome to Our Store</h1>
          <p className="text-sm sm:text-lg">Discover amazing deals and unbeatable prices!</p>
        </div>
      </div>
    </div>
  );
};

export default Herosection;