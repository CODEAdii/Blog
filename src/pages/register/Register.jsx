import React from 'react';
import "./register.css"

function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label >User Name</label>
            <input className='registerInput' type="text" placeholder='User Name'/>
            <label >Email</label>
            <input className='registerInput' type="email" placeholder='Email'/>
            <label >Password</label>
            <input className='registerInput' type="password" placeholder='password'/>
            <button className="registerButton">Register</button>

        </form>
        <button className="registerLoginButton">Login</button>
    </div>
  )
}

export default Register