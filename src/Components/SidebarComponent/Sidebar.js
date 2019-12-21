import React from 'react';
import './sidebar.css';

const Sidebar = ({ handleStep, currStep }) => {
    console.log(currStep)
        
    return (
        <div className="sidebar">
            <div className="sb-links">
                <div onClick={() => handleStep(1,"Profile")} className={currStep === 1 ? "link-btn-active":"link-btn"}>
                    <div>
                        <h2 className="bg-dark">Profile</h2>
                    </div>
                </div>
                <div onClick={() => handleStep(2,"Posts")} className={currStep === 2 ? "link-btn-active":"link-btn"}>
                    <div onClick={() => handleStep(2,"Posts")}>
                        <h2>Posts</h2>
                    </div>
                </div>
                <div onClick={() => handleStep(3,"ToDo")} className={currStep === 3 ? "link-btn-active":"link-btn"}>
                    <div onClick={() => handleStep(3,"ToDo")}>
                        <h2>ToDo</h2>
                    </div>
                </div>
            </div>
        </div>
            
        )
}

export default Sidebar;


