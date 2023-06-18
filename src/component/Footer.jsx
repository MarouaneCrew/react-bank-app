import React from 'react';
import '../css component/Footer.css';
import {instagram, facebook, linkedin, twitter} from '../assets';

const Footer = () => {
  return (
    <>
      <p className="copywrite">
        Copywrite &copy;  2021 HooBank. All Rights Reserved.
      </p>
      <div className="socials">
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
      </div>
    </>
  )
}

export default Footer