import React from "react";
import {Link} from "react-router-dom";
class Homepage extends React.Component {

    render() {
        return (
            <div>
                <div className="text-center">
                    <h2>Assignment 4 Submission by Group 16</h2>
                    <p>Below are student details and know more about us</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="well well-light-purple mini-profile-widget p-3">
                                <div className="image-container">
                                    <img src={require('../studentImage/2020MT93502.jpg')} className="avatar img-responsive" alt="avatar" />
                                </div>
                                <div className="details">
                                    <h4>Kinshuk Lahiri</h4>
                                    <hr />
                                    <div>Works at HCAH</div>
                                    <div>Attending M.Tech, BITS Pilani</div>
                                    <div>Lives in Mohali, Punjab</div>
                                    <Link to="/profile/2020MT93502"><p className="mt-3">
                                        <a className="btn btn-danger mr-2">
                                            View Profile
                                        </a>
                                    </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="well well-light-orange mini-profile-widget p-3">
                                <div className="image-container">
                                    <img src={require('../studentImage/2020MT93501.png')} className="avatar img-responsive" alt="avatar" />
                                </div>
                                <div className="details">
                                    <h4>Kaustabh Lahiri</h4>
                                    <hr />
                                    <div>Works at HCAH</div>
                                    <div>Attending M.Tech, BITS Pilani</div>
                                    <div>Lives in Mohali, Punjab</div>
                                    <Link to="/profile/2020MT93501"><p className="mt-3">
                                        <a className="btn btn-danger mr-2">
                                            View Profile
                                        </a>
                                    </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="well well-light-pink mini-profile-widget p-3">
                                <div className="image-container">
                                    <img src={require('../studentImage/2020MT93713.jpg')} className="avatar img-responsive" alt="avatar" />
                                </div>
                                <div className="details">
                                    <h4>Rohit Varghese</h4>
                                    <hr />
                                    <div>Works at Cyclotron</div>
                                    <div>Attending M.Tech, BITS Pilani</div>
                                    <div>Lives in Mumbai, Maharashtra</div>
                                    <Link to="/profile/2020MT93713"><p className="mt-3">
                                        <a className="btn btn-danger mr-2">
                                            View Profile
                                        </a>
                                    </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Homepage;