import React from 'react';
import "./sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className="sidebarTitle">ABOUT ME</span>
            <img className='postImg' src="https://images.pexels.com/photos/16549951/pexels-photo-16549951/free-photo-of-facade-of-lisbon-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit distinctio iste doloremque architecto quas tempore ullam impedit, fugiat deleniti, possimus repellendus, libero obcaecati quasi? Porro harum sunt debitis earum itaque.
            </p>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Natue</li>
                <li className="sidebarListItem">Tech</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FollowUs</span>
            <div className="sidebarSocial">
            <i class="sidebarIcon fa-brands fa-square-x-twitter"></i>
            <i class="sidebarIcon fa-brands fa-facebook"></i>
            <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i class="sidebarIcon fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar