import React from 'react';
import '../css component/FeeadBackCard.css';
import {airbnb, binance, coinbase, dropbox} from '../assets';


const FeeadBackCard = () => {
  return (
    <>
      <div className="images">
        <img src={airbnb} alt="airbnb" />
        <img src={binance} alt="binance" />
        <img src={coinbase} alt="coinbase" />
        <img src={dropbox} alt="dropbox" />
      </div>
    </>
  )
}

export default FeeadBackCard