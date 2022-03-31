import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer section__padding">

        <div className="footer-heading">
          <h1 className="gradient__text">
            Do you want to take <br/> a step ahead of others
          </h1>
        </div>
        <div className="footer-btn">
          <a href="#">Join in Early</a>
        </div>

        <div className="footer-links">
          <div className="footer-links_logo">
            <p className='gorillaz__navbar-links_logo-brand'>GORI<span className='gorillaz__navbar-links_logo-brandeffect'>LL</span>AZ</p>
            <p>
              M.E Group of Company, All Rights Reserved.
            </p>
          </div>
          <div className="footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="footer-links_div">
            <h4>Company</h4>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Contract</p>
          </div>
          <div className="footer-links_div">
            <h4>Get in touch</h4>
            <p>Crechtertown G28 325 DK Canada</p>
            <p>+234(0)8163117988</p>
            <p>gorillazcreate@gmail.com</p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2022 GORILLAZ. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer