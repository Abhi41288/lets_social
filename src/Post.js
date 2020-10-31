import React, { useEffect, useState } from 'react';
import logo from './images/react.jpg';
import Avatar from '@material-ui/core/Avatar'
import './Post.css'
import { db } from './firebase';
import firebase from 'firebase';

const Post = ({ username, caption, imageUrl, postId, user }) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('')

    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => {
                        return doc.data()
                    }));
                });
            console.log("comments : ", comments, "  postId ", postId)
        }

        return () => {
            unsubscribe();
        };
    }, [postId]);

    const postComment = (event) => {
        event.preventDefault();

        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            setComment('')
        })
    }

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

            <h4 className="post_text"><strong>{username}</strong>{caption}</h4>

            <div className="post_comments">
                {comments.map(Comment => <p><strong>{Comment.username}</strong>{Comment.text}</p>)
                }
            </div>

            {user && (
                <form className="post_commentBox">
                    <input
                        className="post_input"
                        type="text"
                        placeholder="Add a comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button
                        className="post_button"
                        disabled={!comment}
                        type="submit"
                        onClick={postComment}>Post
                    </button>
                </form>
            )}

        </div>
    )
}

export default Post
