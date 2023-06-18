/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../css component/Links.css';
import '../css component/all.min.css';
import {logo} from '../assets';

const Links = () => {
  return (
    <>
      <div className="box">
        <div className="logo">
          <img src={logo} alt="logo" />
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className="usefullLinks">
          <h4>Usefull Links</h4>
          <ul>
            <li><a href="#">Content</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Create</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Terms &amp; services</a></li>
          </ul>
        </div>
        <div className="community">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Suggestions</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Newsletters</a></li>
          </ul>
        </div>
        <div className="partner">
          <h4>Partner</h4>
          <ul>
            <li><a href="#">Our partner</a></li>
            <li><a href="#">Become a partners</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Links