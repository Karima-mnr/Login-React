import React, { act, useState } from 'react'
import './Login.css'
import emailicon from '../assets/email.png'
import passwordicon from '../assets/password.png'
import personicon from '../assets/person.png'


 const Login = () => {
    const [action,setAction] = useState("Login")


  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            {action==="Login"?<div></div> :<div className="input">
                <img src={personicon} alt="" />
                <input type="text" placeholder='Name' />
            </div> }


            <div className="input">
                <img src={emailicon} alt="" />
                <input type="email" placeholder='Email Id'/>
            </div>

            <div className="input">
                <img src={passwordicon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        {action==="Sign Up"?<div></div>:  <div className="forgetPass">Lost Password? <span>Click Here!</span></div>}
       
        <div className="submit-container">
            <div className={action==="Login" ?" submit gray":"submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up" ?" submit gray":"submit"} onClick={() => {setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}
export default Login
