import React, {useState} from 'react';
import '../css component/Navbar.css';
import {close, logo, menu} from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <nav>
        <div className="image">
          <a href="./Hero.jsx"><img src={logo} alt="logo" /></a>
        </div>
        <ul onClick={() => setToggle(prev => !prev)} className={`links ${toggle ? "menuBtn" : "closeBtn"}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#feature">Feature</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#clients">Clients</a></li>
        </ul>
        <div className="menu">
          <img src={toggle ? menu : close} alt="menu" onClick={() => setToggle(prev => !prev)}/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;