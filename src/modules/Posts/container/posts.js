import React, { Component } from 'react';
import '../posts.css';
import axios from 'axios';
import PostItem from '../component/postComponent';
import Activity from '../component/activityComponent';

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments:[],
      postlist: [],
      activity: []
    }
  }

  async componentDidMount() {
    const firstRequest = await axios.get('https://panorbit.in/api/posts.json');
    const secondRequest = await axios.get('https://panorbit.in/api/comments.json');
    const thirdRequest = await axios.get('https://panorbit.in/api/activity.json');
    
      this.setState({
        postlist: firstRequest.data.posts,
        comments: secondRequest.data.comments,
        activity: thirdRequest.data.recentActivity
    });
  }

  render() {
    const { postlist, comments, activity } = this.state; 
    const { user } = this.props;

    return (
      <>
        <main id="posts">
          <section className="posts-container">
            {
              postlist && comments ? <PostItem posts={postlist} comm_data={comments} activities={activity} user={user}/>:null
            }
          </section>
          <section className="activities-container">
            {
              activity ? 
              <div className="col">
                <h1 style={{textAlign:'center'}}>Recent Activities</h1>
                <Activity activityList={activity} user={user}/>
              </div>
              :null
            }
          </section>
        </main>
      </>
    );
  }
}

export default Posts;