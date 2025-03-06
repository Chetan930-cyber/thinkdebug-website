const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
        
   
        <div className="flex flex-col items-center md:items-start">
          <img src="22.png" alt="CIMA Logo" className="w-32 h-auto" />
          <a href="#" className="text-white text-xl mt-4">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

       
        <div className="flex flex-col md:flex-row md:gap-16 mt-6 md:mt-0">
       
          <div className="text-sm text-white">
            <h3 className="text-lg font-semibold mb-2">OPERATING HOURS</h3>
            <p>Monday-Friday</p>
            <p>7:00 AM - 10:00 PM</p>
            <p className="mt-2">Saturday & Sunday</p>
            <p>8:00 AM - 5:00 PM</p>
          </div>

        
          <div className="text-sm text-gray-400 mt-6 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">CONTACT DETAILS</h3>
            <p>Binghatti Crescent, JVC, Dubai, UAE</p>
            <p>+971 52 689 0628</p>
            <p>admin@cimauae.com</p>
            <p>management@cimauae.com</p>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mx-6 md:mx-[160px] mt-6 pt-4 text-sm text-gray-400 px-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
        <p className="text-white font-semibold">&copy; 2023 CIMA</p>
        <div className="mt-2 md:mt-0 md:ml-4">
          <a href="#" className="hover:underline">Privacy Policy</a> | 
          <a href="#" className="ml-2 hover:underline">Cancellation Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;