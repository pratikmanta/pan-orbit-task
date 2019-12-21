import React, { Component } from 'react';
import { Sidebar } from '../../../Components';
import { withRouter } from "react-router-dom";
import ProfileDetails from '../component/ProfileDetails';
import Posts from '../../Posts/container/posts';
import ToDo from '../../ToDo/container/toDo';
import '../root.css';
import {ToolTipController, Select} from 'react-tooltip-controller'


const ToolTip = (props) => {

    const { user } = props;
    return (
        <div className="tooltip-card col">
            <img src={`${user.profilepicture}`} width="80" height="80" />
            <h4 style={{fontSize:'24px',margin: '12px 0 12px 0'}} className="subtext">{user.name}</h4>
            <p style={{color: '#8b8b8b',fontSize:'20px',margin: '12px 0 12px 0'}} className="subtext"><em>{user.email}</em></p>
            <div className="row userlist">
                <img src={`${user.profilepicture}`} width="20" height="20" alt="list"/>
                <p className="col subtext" style={{fontSize:'20px'}}>{user.name}</p>
            </div>
            <div className="row userlist">
                <img src={`${user.profilepicture}`} width="20" height="20" alt="prof" />
                <p className="subtext" style={{fontSize:'20px'}}>{user.name}</p>
            </div>
            <div className="row userlist">
                <i style={{fontSize: '24px'}} className='fa fa-user-plus'></i>
                <h3 className="subtext">Add another account</h3>
            </div>
            <div className="adduser-btn-box" onClick={()=> props.history.push('/')}>
                <h3 className="adduser-btn">Sign Out</h3>
            </div>
        </div>
    ) 
}

class Root extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Profile",
            step: 1,
        }
        this.handleStep = this.handleStep.bind(this)
    }

    handleStep = (currStep, title) => {
        this.setState({ step: currStep, title: title })
    }


    render() {

        const { history: { location: { state: { user } } } } = this.props;
        const { title, step } = this.state;

        return (
            <>
                <Sidebar handleStep={this.handleStep} currStep={step} />
                <div className="content-container">
                    <div className="nav-header">
                        <p>{title}</p>
                        <ToolTipController detect="click" offsetY={10} offsetX={"center"} offsetX={'30px'}>
                                <Select>
                                    <div className="user-avatar">
                                        <img src={`${user.profilepicture}`} width="50" height="50" alt="av"/>
                                        <p className="subtext" style={{fontSize:'20px'}}>{user.name}</p>
                                    </div>
                                </Select>
                                <div className="tooltip-container">
                                    <ToolTip user={user} {...this.props}/>
                                </div>
                        </ToolTipController>
                    </div>
                    {step === 1 ? <ProfileDetails title={title} user={user} /> : null}

                    {step === 2 ? <Posts user={user} /> : null}

                    {step === 3 ? <ToDo user={user} /> : null}
                </div>
            </>
        );
    }
}

export default withRouter(Root);