import React from 'react';
import './possibility.css';

import possibilityImage from '../../assets/possibility3.png';

const Possibility = () => {
  return (
    <>
      <section className='possibility section__padding' id='possibility' >

        <div className="possibility-image">
          <img src={possibilityImage} alt="possibility" />
        </div>

        <div className="possibility-content">
          <h4>Request Early Access to Get Started</h4>
          <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
          <p>Content is a large part of your everyday life. It’s hard to avoid, but why would you want to? Content keeps us informed, answers our questions, entertains us, makes us smile, guides our decisions, and more.</p>
          <h4>Hurry and Delay No More</h4>
        </div>

      </section>
    </>
  )
}

export default Possibility