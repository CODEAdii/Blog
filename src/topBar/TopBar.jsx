import React from 'react';
import "./topbar.css";

export default function TopBar() {
  return (
    <div className='top'>
        <div className="topLeft">
            <i class="topIcon fa-brands fa-square-x-twitter"></i>
            <i class="topIcon fa-brands fa-facebook"></i>
            <i class="topIcon fa-brands fa-square-pinterest"></i>
            <i class="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className='topList'>
            <li className='topListItem'>HOME</li>
            <li className='topListItem'>ABOUT</li>
            <li className='topListItem'>CONTACT</li>
            <li className='topListItem'>WRITE</li>
            <li className='topListItem'>LOGOUT</li>
            </ul>            
        </div>
        <div className="topRight">
            <img className='topImg'
             src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="" />
            <i className="searchIcon fa-solid fa-magnifying-glass"></i>        </div>
    </div>
  )
}
