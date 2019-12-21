import React from 'react';

const Activity = ({ activityList, user }) => {
    return activityList.map((data, index) => {
        if (user.id) {
            return (
                <>
                    <div className="activity-item row" key={index}>
                        <img src={`${data.profilepicture}`} className="subtext" width="30" height="30" alt="dp" />
                        <h6 className="subtext row">{user.name}</h6>
                        <p className="activity-status">{data.activity}</p>
                        <div className="row">
                            <p className="subtext">{data.time}</p>
                        </div>
                    </div>
                </>
            )
        }
        return null;
    })
}

export default Activity;

