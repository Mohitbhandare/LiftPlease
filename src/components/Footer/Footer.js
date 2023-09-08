import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>LiftPlease</h2>
        <p>A Platform for Peer-to-Peer Ride Sharing</p>
        <div className="contact-info">
          <p>Contact: liftplease@gmail.com | 1234567891</p>
          <div className="social-icons">
            <a href="[Facebook Link]"><FaFacebook/></a>
            <a href="[Twitter Link]"><FaLinkedin/></a>
            <a href="[LinkedIn Link]"><FaTwitter/></a>
          </div>
        </div>
        <div className="footer-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Use</a>
          <a href="/">About Us</a>
          <a href="/">FAQ</a>
        </div>
      </div>
      <p className="copyright">&copy; {currentYear} LiftPlease. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
