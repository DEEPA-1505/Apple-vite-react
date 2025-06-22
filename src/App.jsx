import { useState } from 'react';
import iphone15pro from './assets/iphone15pro.jpg';
import visionpro from './assets/visionpro.jpg';
import airpods from './assets/airpods.jpg';
import macbookpro from './assets/macbookpro.jpg';

import './App.css';


import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Section from './components/Section.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';



function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Section
        title="iPhone 16"
        subtitle="New camera. New design. New era."
        image={iphone15pro}
      />
      <Section
        title="MacBook pro"
        subtitle="Supercharged by M3 chip."
        image={macbookpro}
        reverse
      />
      <Section
        title="Vision Pro"
        subtitle="Welcome to the era of spatial computing."
        image={visionpro}
      />
       <Section
        title="airpods pro"
        subtitle="Iconic.Now Available with Active Noise Cancellation."
        image={airpods}
        reverse
      />
      
      <Footer />
    </div>
  );
}

export default App;
