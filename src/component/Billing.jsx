import React from 'react';
import '../css component/Billing.css';
import {bill, playstore, appstore} from '../assets';

const Billing = () => {
  return (
    <>
      <div className="image">
        <img src={bill} alt="bill" />
      </div>
      <div className="text">
        <h2>Easily control your billing &amp; invoicing.</h2>
        <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="apps">
          <img src={appstore} alt="appstore" />
          <img src={playstore} alt="playstore" />
        </div>
      </div>
    </>
  )
}

export default Billing