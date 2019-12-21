import React from 'react';
import '../app.css';
import { withRouter } from 'react-router-dom';

const UserList = (props) => {
    const { userlist } = props
    return userlist.map(user => {
        return (
            <div className="imgtext" 
                key={user.id} 
                onClick={() => props.history.push({
                    pathname:`/profile`,
                    state: { title:"Profile", user: user}
                })}
            >
                <img src={`${user.profilepicture}`} width="50" height="50"/>
                <h3 style={{marginLeft:'10px', paddingLeft:'5px'}}>{user.name}</h3>
            </div>
        )
    })
}

export default withRouter(UserList);