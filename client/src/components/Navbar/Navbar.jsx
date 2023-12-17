import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'



function Navbar() {
    var User = null

    return (
        <nav>
        <div className="navbar">
            <Link to="/" id="logo" className="nav-item"></Link>
            <Link to="/" className="nav-item nav-btn">About</Link>
            <Link to="/" className="nav-item nav-btn">Products</Link>
            <Link to="/" className="nav-item nav-btn">For Teams</Link>
            <form>
            <label htmlFor="search-bar"><svg width="18" height="18" viewBox="0 0 18 18"><path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path></svg></label>
                <input id="search-bar" type="text" placeholder="Search..." />
            </form>
            {User === null?
                (<div id="auth-btns"><Link to="/Auth" className="nav-item nav-links" id="login-btn">Log In</Link>
                <Link to="/Auth" className="nav-item nav-links" id="signup-btn">Sign Up</Link>
                </div>):
                <>
                </>
            }
        </div>
        </nav>
    )
}

export default Navbar
 