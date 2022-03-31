import React from 'react';
import './header.css';

import people from '../../assets/people2.png';
import ai from '../../assets/ai.png';
import gori from '../../assets/gori.png';

const Header = () => {
  return (
    <>
      <div className='header section__padding' id='home'>
        <div className="header-content">
          <h1 className="gradient__text">
            Helping you conquer the world: By moving you from doorstep to global
          </h1>
          <p>
            Putting your brands and products in the open is the way to grow and increase revenue. At Gorillaz we indulge our customers and potential clients into investing in the growth and expansion of their enterprise.
          </p>
          <div className="header-content__input">
            <input type='email' placeholder='your email' />
            <a href='mailto: olaniyanfoluso498@gmail.com' type='button'>Get Started</a>
          </div>
          <div className="header-content__people">
            <img src={people} alt=" our customers" />
            <p>in collaboration with over 200 businesses</p>
          </div>
        </div>

        <div className="header-image">
          <img src={gori} alt="ai" />
        </div>
        
      </div>
    </>
  )
}

export default Header