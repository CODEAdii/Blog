import React from 'react';
import "./singlePost.css";

function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/4756513/pexels-photo-4756513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet c.
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-trash"></i>
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author:<b>Aditya</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className=''>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A pariatur, repudiandae voluptate impedit labore aut exercitationem accusamus? Autem dolores ex minus. Magni a cupiditate, esse fugiat non est consectetur nulla.
            </p>
        </div>
    </div>
  )
}

export default SinglePost