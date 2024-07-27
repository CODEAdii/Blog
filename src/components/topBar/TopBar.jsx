import React from 'react';
import "./topbar.css";
import { Link } from 'react-router-dom';

export default function TopBar() {
  const user=false;
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
            <li className='topListItem'>
              <Link className='link' to="/">HOME</Link></li>
            <li className='topListItem'> <Link className='link' to="/about">ABOUT</Link></li>
            <li className='topListItem'> <Link className='link' to="/contact">CONTACT</Link></li>
            <li className='topListItem'> <Link className='link' to="/write">WRITE</Link></li>
            <li className='topListItem'>{user && "LOGOUT"}</li>
            </ul>            
        </div>
        <div className="topRight">
          {user ? (
              <img 
                className='topImg'
                src="https://avatar.iran.liara.run/public/boy?username=Ash" 
                alt=""
                 />
                ) : (
                      <ul className='topList'>
                        <li className='topListItem'>
                      <Link className='link' to="/login">LOGIN</Link></li>
                        <li className='topListItem'>
                      <Link className='link' to="/register">REGISTER</Link></li>
                      </ul>
                    )
          }
          <i className="searchIcon fa-solid fa-magnifying-glass"></i>
                  </div>
    </div>
  )
}
