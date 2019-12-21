import React from 'react';

const ProfileDetails = ({ user }) => {

    return (
        <>
            <main id="basic-detail">
                <section className="section-details">
                    <div className="img-username">
                        <img src={`${user.profilepicture}`} width="200" height="200" />
                        <h2>{user.name}</h2>
                    </div>
                    <div className="bottom-box">
                        <div className="user-details">
                            <div className="text-wrap">
                                <p className="text-secondary">Username</p>
                            </div>
                            <h3 className="divider">:</h3>
                            <div className="text-wrap-two">
                                <p>{user.username}</p>
                            </div>
                        </div>
                        <div className="user-details">
                            <div className="text-wrap">
                                <p className="text-secondary">e-Mail</p>
                            </div>

                            <h3 className="divider">:</h3>
                            <div className="text-wrap-two">
                                <p>{user.email}</p>
                            </div>
                        </div>
                        <div style={{ padding: '20px 0 20px 0' }} className="user-details">
                            <div className="text-wrap">
                                <p className="text-secondary">Phone</p>
                            </div>
                            <h3 className="divider">:</h3>
                            <div className="text-wrap-two">
                                <p>{user.phone}</p>
                            </div>
                        </div>
                        <div className="user-details">
                            <div className="text-wrap">
                                <p className="text-secondary">Website</p>
                            </div>
                            <h3 className="divider">:</h3>
                            <div className="text-wrap-two">
                                <p>{user.website}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingTop: '40px', borderBottom: '1px solid #d1cece' }} ></div>
                    <div className="bottom-box">
                        <div style={{ textAlign: 'center' }} className="text-secondary">
                            <h3>Company</h3>
                        </div>
                        <div className="user-details">
                            <div className="text-wrap">
                                <p className="text-secondary">Name</p>
                            </div>
                            <h3 className="divider">:</h3>
                            <div className="text-wrap-two">
                                <p>{user.company.name}</p>
                            </div>
                        </div>
                        <div style={{ margin: '50px 0 50px 0' }} className="user-details">
                            <div className="text-wrap">
                                <p className="text-secondary">catchphrase</p>
                            </div>
                            <h3 className="divider">:</h3>
                            <div className="text-wrap-two">
                                <p>{user.company.catchPhrase}</p>
                            </div>
                        </div>
                        <div className="user-details">
                            <div className="text-wrap">
                                <p className="text-secondary">bs</p>
                            </div>
                            <h3 className="divider">:</h3>
                            <div className="text-wrap-two">
                                <p>{user.company.bs}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="address-map-details">
                    <p className="text-secondary">Address <span>:</span></p>
                    <div className="address-street">
                        <div className="address-text">
                            <p className="text-secondary">Street</p>
                        </div>
                        <h3 className="address-divider">:</h3>
                        <div className="address-text-two">
                            <p>{user.address.street}</p>
                        </div>
                    </div>
                    <div className="address-street">
                        <div className="address-text">
                            <p className="text-secondary">Suite</p>
                        </div>
                        <h3 className="address-divider">:</h3>
                        <div className="address-text-two">
                            <p>{user.address.suite}</p>
                        </div>
                    </div>
                    <div className="address-street">
                        <div className="address-text">
                            <p className="text-secondary">City</p>
                        </div>
                        <h3 className="address-divider">:</h3>
                        <div className="address-text-two">
                            <p>{user.address.city}</p>
                        </div>
                    </div>
                    <div className="address-street">
                        <div className="address-text">
                            <p className="text-secondary">Zipcode</p>
                        </div>
                        <h3 className="address-divider">:</h3>
                        <div className="address-text-two">
                            <p>{user.address.zipcode}</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default ProfileDetails;


