import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

export default function Login() {

  return (
    <div className='loginContainer'>
      <form className="loginForm" onSubmit={(e) => e.preventDefault()}>
        <div className="loginFormTitleBox">
          <h3 className='loginFormTitle'>Log Into Facebook</h3>
        </div>
        <div className="loginInputBox">
          <input type="email" className='loginMailInput' placeholder='Email or phone number' />
          <input type="password" className='loginPasswordInput' placeholder='Password' />
        </div>
        <button className="loginSubmitButton">Log In</button>
        <div className="loginLinksBox">
          <a href="#" className="loginLinks">Forgot account?</a>
          <Link to='/register' className="loginLinks">Sign Up For Facebook</Link>
        </div>
      </form>
    </div>
  )
}
