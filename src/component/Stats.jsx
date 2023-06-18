import React from 'react';
import '../css component/Stats.css';

const Stats = () => {
  return (
    <>
      <div className="user">
        <p>3800+</p>
        <span>User active</span>
      </div>
      <div className="trust">
        <p>230+</p>
        <span>Trusted by company</span>
      </div>
      <div className="transaction">
        <p>$230M+</p>
        <span>Transaction</span>
      </div>
    </>
  )
}

export default Stats