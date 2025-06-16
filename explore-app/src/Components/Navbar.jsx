import { useState } from 'react'

function Navbar() {
    
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <p className="logo">Explore Everything</p>
            </div>
            <div className="navbar-right">
                <button type="button" className="profile-btn" >Profiles</button>
                <button type="button" className="account-btn" >Account</button>
            </div>
        </nav>
    )
}

export default Navbar;