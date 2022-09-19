import React from 'react'
import {FaPlus} from 'react-icons/all'
import './Footer.css'

export default function Footer() {

  const languages = ['English (US)','Русский','Հայերեն','Français (France)','Deutsch','العربية','Español (España)','Türkçe','Português (Brasil)','Italiano','हिन्दी']

  const footerLinks = ['Sign Up','Log In','Messenger','Facebook Lite','Watch', 'Places','Games','Marketplace','Facebook Pay','Oculus','Portal','Instagram','Bulletin','Local','Fundraisers','Voting Information Center','Groups','About','Create Ad','Create Page','Developers','Careers','Privacy','Cookies','Ad choices','Terms','Help','Contact Uploading & Non-Users']

  return (
    <div className='footerContainer'>
      <div className="languagesContainer">
        <div className="languagesBox">
          {
            languages.map((language, idx) => {
              return <a href='#' className="language" key={idx}>{language}</a>
            })
          }
          <button className='moreLanguagesButton'><FaPlus/></button>
        </div>
        <div className="footerLinksBox">
          {
            footerLinks.map((link, idx) => {
              return (
                <li key={idx} className='footerList'><a href="#" className="footerLinks">{link}</a></li>
              )
            })
          }
        </div>
        <div className="metaBox">
          <span className="metaText">Meta © 2022</span>
        </div>
      </div>
    </div>
  )
}
