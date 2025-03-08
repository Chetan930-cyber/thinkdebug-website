import React from 'react';
import Navbar from './pages/Navbar';
import Herosection from './pages/Herosection';
import Package from './pages/Package';
import Schedule from './pages/Schedule';
import Footer from './pages/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Package />
      <Schedule />
      <Footer />
    </div>
  );
};

export default App;