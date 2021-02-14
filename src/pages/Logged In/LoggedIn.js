import React from 'react'
import userContext from '../../context/userContext'
import { Link } from 'react-router-dom';

import './loggedin.css'

class LoggedIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            username: ''
        }
    }

    componentDidMount() {

        this.checkLoggedin = setInterval(() => {
            if (!window.localStorage.getItem("token") ||
                !window.sessionStorage.getItem("session_token")) {
                return window.location = "/startpwa"
            }
        }, 2000);

    }

    componentWillUnmount() {
        clearInterval(this.checkLoggedin)
    }

    render() {
        return (
            <userContext.Consumer>
                {(context) => (
                    <div>
                        <div className="page-heading-container">
                            <div>
                                <h1>
                                    {context.user.displayName || "loading"}
                                </h1>
                                <p>
                                    {context.user.userType || "loading"}
                                </p>
                            </div>
                        </div>
                        <label className="loggenin-section-label">Customer</label>
                        <div>
                            <Link to="/search" style={{ textDecoration: 'none' }}>
                                <div className="loggedin-option-container">
                                    <h2 className="loggedin-option">
                                        Search Passport
                                    </h2>
                                </div>
                            </Link>
                            <Link to="/visa/pending" style={{ textDecoration: 'none' }}>
                                <div className="loggedin-option-container">
                                    <h2 className="loggedin-option">
                                        Pending Visas
                                    </h2>
                                </div>
                            </Link>
                            {/* <Link to="/visa/pending" style={{ textDecoration: 'none' }}>
                                <div className="loggedin-option-container">
                                    <h2 className="loggedin-option">
                                        Other Option
                                    </h2>
                                </div>
                            </Link> */}

                            <br />

                            <div >
                                <label className="loggenin-section-label">Vendor</label>
                                <Link to="/add/visa" style={{ textDecoration: 'none' }}>
                                    <div className="loggedin-option-container">
                                        <h2 className="loggedin-option">
                                            Add Visas
                                        </h2>
                                    </div>
                                </Link>
                            </div>

                            <br />

                            <div >
                                <label className="loggenin-section-label">Development</label>
                                <div
                                    onClick={() => window.location.reload()}>
                                    <div className="loggedin-option-container">
                                        <h2 className="loggedin-option">
                                            Refresh
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <br />
                            <div>
                                <Link
                                    to="/logout"
                                    style={{ textDecoration: 'none' }}>
                                    <div className="loggedin-option-container">
                                        <h2 className="loggedin-option">
                                            Log Out
                                        </h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </userContext.Consumer>
        )
    }
}

export default LoggedIn