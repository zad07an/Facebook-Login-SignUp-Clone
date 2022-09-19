import Logo from './assets/facebook.svg'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import './App.css'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="container">
      <div className='header'>
        <img src={Logo} alt="" className='facebookLogo'/>
      </div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
