import React from 'react'
import {FaPlus} from 'react-icons/all'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footerContainer'>
      <div className="languagesContainer">
        <div className="languagesBox">
          <a href='#' className="language">English (US)</a>
          <a href='#' className="language">Русский</a>
          <a href='#' className="language">Հայերեն</a>
          <a href='#' className="language">Français (France)</a>
          <a href='#' className="language">Deutsch</a>
          <a href='#' className="language">العربية</a>
          <a href='#' className="language">Español (España)</a>
          <a href='#' className="language">Türkçe</a>
          <a href='#' className="language">Português (Brasil)</a>
          <a href='#' className="language">Italiano</a>
          <a href='#' className="language">हिन्दी</a>
          <button className='moreLanguagesButton'><FaPlus/></button>
        </div>
        <div className="footerLinksBox">
          <li className='footerList'><a href="#" className="footerLinks">Sign Up</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Log In</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Messenger</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Facebook Lite</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Watch</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Places</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Games</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Marketplace</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Facebook Pay</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Oculus</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Portal</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Instagram</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Bulletin</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Local</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Fundraisers</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Services</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Voting Information Center</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Groups</a></li>
          <li className='footerList'><a href="#" className="footerLinks">About</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Create Ad</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Create Page</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Developers</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Careers</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Privacy</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Cookies</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Ad choices</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Terms</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Help</a></li>
          <li className='footerList'><a href="#" className="footerLinks">Contact Uploading & Non-Users</a></li>
        </div>
        <div className="metaBox">
          <span className="metaText">Meta © 2022</span>
        </div>
      </div>
    </div>
  )
}
