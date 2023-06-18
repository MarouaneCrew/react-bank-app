import React from 'react';
import '../css component/CardDeal.css';
import {card} from '../assets';

const CardDeal = () => {
  return (
    <>
      <div className="text">
        <h2>Find a better card deal in few easy steps.</h2>
        <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <button>Get Started</button>
      </div>
      <div className="image">
        <img src={card} alt="card" />
      </div>
    </>
  )
}

export default CardDeal