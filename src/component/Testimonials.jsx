import React from 'react';
import '../css component/Testimonials.css';
import {quotes, people01, people02, people03} from '../assets';

const Testimonials = () => {
  return (
    <>
      <div className="heading">
        <h2>What people are saying about us</h2>
        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className="people">
        <div className="herman">
          <div className="qoutes">
            <img src={quotes} alt="quotes" />
          </div>
          <p className="speech">
            Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
          </p>
          <div className="person">
            <div className="image">
              <img src={people01} alt="people01" />
            </div>
            <div className="who">
              <h4>Herman Jensen</h4>
              <p>Founder leader</p>
            </div>
          </div>
        </div>
        <div className="steve">
          <div className="qoutes">
            <img src={quotes} alt="quotes" />
          </div>
          <p className="speech">
            Money makes your life easier. If you're lucky to have it, you're lucky.
          </p>
          <div className="person">
            <div className="image">
              <img src={people02} alt="people02" />
            </div>
            <div className="who">
              <h4>Steve Mark</h4>
              <p>Founder leader</p>
            </div>
          </div>
        </div>
        <div className="kenn">
          <div className="qoutes">
            <img src={quotes} alt="quotes" />
          </div>
          <p className="speech">
            It is usually people in the money business, finance, and international trade that are really rich.
          </p>
          <div className="person">
            <div className="image">
              <img src={people03} alt="people03 " />
            </div>
            <div className="who">
              <h4>Kenn Gallagher</h4>
              <p>Founder leader</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials