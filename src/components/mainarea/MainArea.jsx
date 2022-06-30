import React from "react";
import '../mainarea/MainArea.css';

function MainArea() {
    return(
        <div className="main-area-wrapper">
            <div className="main-area">
                <p className="hero-text">Hi! I'm <button className="blue-pill">Developer</button><br/>
                <p className="hero-text">Rahul Mishra</p>
                </p><br/><br/>
                <p className="bottom-text">
                I'm a passionate & driven computer science undergraduate <br/> who likes diving into a diverse
                range of domains
                </p><br/><br/><br/>
                <button className="orange-pill">Hire Me!</button>
                <a href="#" className="btn-no-outline">Projects</a>
            </div>
        </div>
    );
}

export default MainArea;

