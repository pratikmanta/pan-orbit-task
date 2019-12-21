import React, { Component } from 'react';
import '../app.css';
import UserList from '../component/UserList'
import axios from 'axios';
import Root from '../../Root/container/root';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




const Wave = () => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320">
      <path fill="#6200ff" fillOpacity="1" className="wave" d="M0,128L40,160C80,192,160,256,240,250.7C320,245,400,171,480,138.7C560,107,640,117,720,133.3C800,149,880,171,960,165.3C1040,160,1120,128,1200,96C1280,64,1360,32,1400,16L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
    </svg>
      <path fill="#6200ff" fillOpacity="1" className="wave" d="M0,128L40,160C80,192,160,256,240,250.7C320,245,400,171,480,138.7C560,107,640,117,720,133.3C800,149,880,171,960,165.3C1040,160,1120,128,1200,96C1280,64,1360,32,1400,16L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
    </>
  )
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userlist: []
    }
  }

  componentDidMount() {
    axios.get('https://panorbit.in/api/users.json')
    .then(res => {
      const userlist = res.data.users
      this.setState({ userlist })
    })

    .catch(err => {
      console.log(err);
    })
  }

  renderBoxList = () => {
    return (
      <>
        <Wave/>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-header">
              <h3>Select your account</h3>
            </div >
            <div className="card-body">
              <UserList userlist={this.state.userlist}/>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/profile/" component={Root}/>
            <Route exact path="/" component={this.renderBoxList}/>
          </Switch>
        </Router>  
    );
  }
}

export default App;
