import React from 'react';
import { FaHome,FaPhone, FaMailBulk, FaFacebook,FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footerstyles.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>Telibagh Lucknow</p>
              <p>uttar pradesh</p>
            </div>
          </div>
          <div className='phone'>
          <h4>
          <FaPhone size={20} 
          style={{ color: '#fff', marginRight: '2rem' }} />
          1-2323-343-23
          </h4>
          
          </div>
          <div className='email'>
          <h4>
          <FaMailBulk size={20} 
          style={{ color: '#fff', marginRight: '2rem' }} />
          info@gmail.com
          </h4>
          
          </div>
        </div>
        <div className="right">
            <h4>About the company</h4>
            <p>
              This is tapan here website developer
            </p>
            <div className='social'>
            <FaFacebook size={20} 
          style={{ color: '#fff', 
          marginRight: '1rem' }} />
          <FaTwitter size={20} 
          style={{ color: '#fff',
           marginRight: '1rem' }} />
           <FaLinkedin size={20} 
          style={{ color: '#fff', 
          marginRight: '1rem' }} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
