import React, { useState } from 'react';

const ProductSlider = ({ images, customHeight = "h-24", highQuality = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length <= 1) {
    return (
      <img
        src={images[0]}
        alt="Product"
        className={`w-full ${customHeight} object-contain rounded-md mt-2`}
        loading="eager" // Load immediately for better quality
      />
    );
  }

  return (
    <div className="relative mt-2">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className={`w-full ${customHeight} ${highQuality ? 'object-contain' : 'object-cover'} rounded-md`}
        loading="eager" // Load immediately for better quality
      />
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        →
      </button>
      <div className="text-center text-xs text-gray-500 mt-1">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ProductSlider;