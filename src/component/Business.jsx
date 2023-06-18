import React from 'react';
import '../css component/Business.css';
import {star, shield, send} from '../assets';

const Business = () => {
  return (
    <>
      <div className="text">
        <h2>You do the business, we’ll handle the money.</h2>
        <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <button>Get Started</button>
      </div>
      <div className="features">
        <div className="rewards">
          <div className="image">
            <img src={star} alt="discount" />
          </div>
          <div className="defining">
            <h4>Rewards</h4>
            <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
          </div>
        </div>
        <div className="secured">
          <div className="image">
            <img src={shield} alt="discount" />
          </div>
          <div className="defining">
            <h4>100% Secured</h4>
            <p>We take proactive steps make sure your information and transactions are secure.</p>
          </div>
        </div>
        <div className="transfer">
          <div className="image">
            <img src={send} alt="discount" />
          </div>
          <div className="defining">
            <h4>Balance Transfer</h4>
            <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Business