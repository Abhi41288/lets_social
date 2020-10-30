import React from 'react';
import logo from './images/react.jpg';
import Avatar from '@material-ui/core/Avatar'
import './Post.css'

const Post = ({ username, caption, imageUrl }) => {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar
                    className="post_avatar"
                    alt="Abhishek"
                    src="./image.png" />
                <h3>{username}</h3>
            </div>
            <img className="post_image" src={imageUrl} alt="image" />
            {/*image*/}

            <h4 className="post_text"><strong>{username}</strong>{caption}</h4>
            {/*username caption*/}
        </div>
    )
}

export default Post
