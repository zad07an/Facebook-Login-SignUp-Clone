import React, { useState } from 'react'
import {FaExclamationCircle} from 'react-icons/all'
import {Link} from 'react-router-dom'
import './Register.css'

export default function Register() {

  const currentYear = (new Date()).getFullYear()
  const years = Array.from(new Array(100),( val, index) => currentYear - index)
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

  return (
    <div className='registerContainer'>
      <form className="registerForm" onSubmit={(e) => e.preventDefault()}>
        <div className="registerFormTitleBox">
          <h3 className="registerFormTitle">Create a new account</h3>
          <p className="registerFormSubtitle">It's quick and easy.</p>
        </div>
        <div className="registerFormInputsBox">
          <div className="fnlnInputBox">
            <input type="text" className='fnInput' placeholder='First name'/>
            <input type="text" className='lnInput' placeholder='Last name'/>
          </div>
          <div className="mobilePasswordInputBox">
            <input type="tel" className='mobileInput' placeholder='Mobile number or email' />
            <input type="password" className='passwordInput' placeholder='New password' />
          </div>
          <div className="birthdayTextBox">
            <span className='birthdayText'>Birthday <FaExclamationCircle/></span>
          </div>
          <div className="birthdaySelectBox">
            <select className='birthdaySelectInput'>
              {
                months.map((month, idx) => {
                  return <option key={idx} value={month}>{month}</option>
                })
              }
            </select>
            <select className='birthdaySelectInput'>
              {
                days.map((day, idx) => {
                  return <option key={idx} value="">{day}</option>
                })
              }
            </select>
            <select className='birthdaySelectInput'>
              {years.map((year, idx) => {
                return <option key={idx} value={year}>{year}</option>
              })}
            </select>
          </div>
          <div className="genderTextBox">
            <span className="genderText">Gender <FaExclamationCircle/></span>
          </div>
          <div className="genderChooseBox">
            <div className="chooseBox">
              <label htmlFor='female'>Female</label>
              <input type="radio" id='female' name='gender'/>
            </div>
            <div className="chooseBox">
              <label htmlFor='male'>Male</label>
              <input type="radio" id='male' name='gender' />
            </div>
            <div className="chooseBox">
              <label htmlFor='custom'>Custom</label>
              <input type="radio" id='custom' name='gender'/>
            </div>
          </div>
          <div className="learnMoreTextBox">
            <p className="learnMoreText">People who use our service may have uploaded your contact information to Facebook. <a href="" className='links'>Learn more.</a></p>
          </div>
          <div className="cookiesTextBox">
            <p className="cookiesText">By clicking Sign Up, you agree to our <a href="#" className='links'>Terms,</a> <a href="#" className='links'>Privacy Policy</a> and <a href="#" className='links'>Cookies Policy.</a> You may receive SMS Notifications from us and can opt out any time.</p>
          </div>
          <div className="submitButtonBox">
            <button className='submitButton'>Sign Up</button>
          </div>
          <div className="haveAnAccountLinkBox">
            <Link to='/' className="haveAnAccountLink">Already have an account?</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
