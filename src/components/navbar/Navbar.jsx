import React, { useState} from 'react';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

import Logo from '../../assets/logo.svg'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#whatgorillaz">What is Gorillaz</a></p>
    <p><a href="#possibility">Step Up</a></p>
    <p><a href="#features">Features</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gorillaz__navbar'>
      <div className='gorillaz__navbar-links'>
        <div className='gorillaz__navbar-links_logo'>
          {/* <img src={Logo} alt="brand logo" /> */}
          <p className='gorillaz__navbar-links_logo-brand'>GORI<span className='gorillaz__navbar-links_logo-brandeffect'>LL</span>AZ</p>
        </div>
        <div className="gorillaz__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className='gorillaz__navbar-sign'>
        <button type='button'>Contact Us</button>
      </div>
      <div className="gorillaz__navbar-menu">
        {
          toggleMenu ? 
          <RiCloseLine color='#fff' size={27} onClick = {() => setToggleMenu(false)} />
          :
          <RiMenu4Line color='#fff' size={27} onClick= {() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className='gorillaz__navbar-menu_container scale-up-center'>
              <div className="gorillaz__navbar-menu_container-links">
                <Menu />
                <div className='gorillaz__navbar-menu_container-links-sign'>
                  <button type='button'>Contact Us</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar