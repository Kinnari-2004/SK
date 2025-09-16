import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
<a href="https://www.flaticon.com/free-icons/instagram-logo" title="logo icons">Logo icons created by Pixel perfect - Flaticon</a>
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='logo' src={assets.sk_logo}/>
                <p>Connect with us on</p>
                <div className="footer-social-icons">
                    <img src={assets.fb} alt="" />
                    <img src={assets.instagram} alt="" />
                    <img src={assets.youtube} alt="" />
                    <img src={assets.whatsapp} alt=''/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <li>Home</li>
                <li>Menu</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </div>
            <div className="footer-content-right" id='contact'>
                <h2>Contact</h2>
                <ul>
                    <li>7506051375</li>
                    <li>shreekitchen@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2025 © ShreeKitchen.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
