import React from 'react'
import "./header.css"

export default function  Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>       
            <span className='headerTitleLg'>Blog</span>       
        </div>
        <img className='headerImg' src="https://images.pexels.com/photos/18840507/pexels-photo-18840507/free-photo-of-vasco-da-gama-bridge-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}
