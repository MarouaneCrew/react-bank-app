import React from 'react';
import '../css component/Hero.css';
import {discount, robot, arrowUp} from '../assets';

const Hero = () => {
  // const roboto = document.querySelector("section .robot");
  // console.log(roboto);
  // const nbrs = [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];
  // setInterval(() => {
  //   const nbrY = Math.floor(Math.random() * nbrs.length);
  //   const nbrX = Math.floor(Math.random() * nbrs.length);
  //   // roboto.style.transform = `translate(${nbrs[nbrX]}%, ${nbrs[nbrY]}%)`;
  //   // roboto.style.transition = `2.5s ease-in-out`;
  //   roboto.style.cssText = `
  //     transform: translate(${nbrs[nbrX]}px, ${nbrs[nbrY]}%);
  //     transition:2.5s ease-in-out;
  //   `
  // },2500)
    return (
    <>
      <section id="home">
        <div className="text">
          <div className="discount">
            <img src={discount} alt="discount" />
            <p>
              <span>20% </span>
              Discount For
              <span> 1 Mounth </span>
              Account
            </p>
            <div className="getStarted">
                <div>
                  <p>
                    Get 
                  </p>
                  <img src={arrowUp} alt="arrow" />
                </div>
                <p>Started</p>
            </div>
          </div>
          <div className="heading">
            <h1>
              The Next <span>Generation</span> Payement Method.
            </h1>
            <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
          </div>
        </div>
        <div className="robot">
          <img src={robot} alt="robot" />
        </div>
      </section>
    </>
  );
};


export default Hero;