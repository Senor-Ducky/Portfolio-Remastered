import React from "react";
import '../navbar/NavBar.css'

function Navbar() {
    return(
        <div className="nav-wrapper">
        <nav>
            <p className="site-name">Rahul Mishra <p className="orange-dot">.</p></p>
            <ul className="nav-elements">
                <li className="nav-element"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-element"><a href="#" className="nav-link">About</a></li>
                <li className="nav-element"><a href="#" className="nav-link">Skills</a></li>
                <li className="nav-element"><a href="#" className="nav-link">Projects</a></li>
            </ul>
            <button className="btn-outline">Let's Chat</button>
        </nav>
        <hr className="bottom-rule"></hr>
        </div>
    );
}

export default Navbar;