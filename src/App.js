import React from 'react';
import './index.scss';

import Navigation from './components/Navigation';
import CarouselComp from './components/CarouselComp';
import Footer from './components/Footer';


const App = () => {
 
  return (
    <div className="App">
      <Navigation />
      <CarouselComp />
      <Footer />

    </div>
  );
}

export default App;
