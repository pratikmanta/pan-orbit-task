import React from 'react';

const Comments = ({ user, currPostId, comments }) => {
    return comments.map((comment,index) => {
        if(comment.postId === currPostId){
            return (
                <>
                <div key={index} className="comments-header">
                    <img src={`${comment.profilepicture}`} width="30" height="30"/>
                    <h3 className="subtext">{user.name}</h3>
                    <span className="subtext" style={{color: 'rgb(139, 139, 139)'}}>{comment.time}</span>
                </div>
                <div className="comments-body">
                    <p className="subtext">{comment.body}</p>
                    <h4 style={{color: 'rgb(139, 139, 139)'}} className="subtext">Reply</h4>
                </div>
                </>
            )
        }
        return null;
    })
}

const PostItem = ({ user, posts, comm_data }) => {
    return posts.map((post,index) => {
        
        if(user.id === post.userId){
            return (
            <div key={index} className="posts-card">
                <div className="posts-card-header row">
                    <img src={`${user.profilepicture}`} width="80" height="80" alt="user-dp"/>
                    <div className="col subtext">
                        <h3>{user.name}</h3>
                        <span style={{color: 'rgb(139, 139, 139)'}} >{post.time}</span>
                    </div>
                </div>
                <div className="posts-img-container">
                    <img style={{borderRadius: '10px'}} src={post.image} width="100%" height="100%"/>
                </div>
                <div className="col">
                    <p className="post-body">{post.body}</p>
                </div>
                <div className="row icon-container">
                    <p className="icon-text">
                        <i className='fa fa-comment'></i>
                        <span className="subtext">comments</span>
                    </p>
                    <p className="icon-text">
                        <i className='fa fa-share'></i>
                        <span className="subtext">Share</span>
                    </p>
                </div>
                <div className="comments-container">
                    <Comments currPostId={post.id}  comments={comm_data} user={user}/>
                </div>
            </div>
            )
        }
        return null;
    })
}

export default PostItem;