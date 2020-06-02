import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.scss';

import Navigation from './components/Navigation';
import Home from './views/Home';
import Footer from './components/Footer';
import About from './views/About';
import Contact from './views/Contact';
import Galleries from './views/Galleries'


const App = () => {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Route exact path='/' component={Home} />
        <Route path='/gallery' component={Galleries} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
