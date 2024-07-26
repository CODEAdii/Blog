import React from 'react';
import "./post.css";

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://images.pexels.com/photos/19082354/pexels-photo-19082354/free-photo-of-cruise-ships-in-the-bosphorus-strait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
            <hr />
            <span className='postDate'> 1 hour ago</span>
        </div>
        <p className='postDescription'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat inventore, soluta dolore architecto fugit vitae dolorem libero harum, ex sunt autem quam, omnis in accusantium? Id qui assumenda amet officiis.</p>
     </div>
  )
}
