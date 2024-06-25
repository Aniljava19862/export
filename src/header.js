import * as React from 'react';
import Box from '@mui/joy/Box';
import MenuToolbarExample from './menu/menubar';
import Navbar from './components/navbar';
import Services from './components/items/Services';
import Portfolio from "./components/portfolio/Portfolio";
import Parallax from "./components/parallax/Parallax";
import "./app.scss";
import ImageSlider from './components/imageslides/imageslider';
import ItemBox from './components/productboxes/itembox';
import Contact from './components/contact/Contact';
export default function Header() {
   return ( <div>
    
    <section  id="Portfolio"></section>
    <Portfolio />
    <section id="contact">
      <Contact  />
    </section>
  </div>
  );
}
