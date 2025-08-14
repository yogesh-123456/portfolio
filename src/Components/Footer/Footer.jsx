import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/pyologo.jpg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am a fullstack developer from, USA with 10 years of experience in companise like Microsoft, Tesla and Apple.</p>
            </div>
            
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2023 Yogesh Kamunkar. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer