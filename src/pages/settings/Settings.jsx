import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./settings.css";

export default function Settings() {
  return (
    <div className='settings'>

      <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form action="" className="settingsForm">
            <label >Profile Picture</label>
            <div className="settingsPP">
              <img src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="" />
              <label htmlFor="fileInput">
                 <i className="settingsPPIcon fa-regular fa-circle-user"></i>
              </label>
              <input type="file"  id="fileInput" style={{display:"none"}}/>
            </div>
            <label>UserName</label>
            <input type="text" placeholder='Aditya' />
            <label>Email</label>
            <input email="email" placeholder='adityamaurya144@gmail.com' />
            <label>Password</label>
            <input password="password" placeholder='adi123' />
            <button className="settingsButton">Update</button>
          </form>
      </div>
      <Sidebar/>
    </div>
  );
}
