import React from "react";
import '../mainarea/MainArea.css';

import Card from "../card/card";

function MainArea() {
    return(
        <div className="main-area-wrapper">
            <div className="main-area"> 
                <p className="hero-text">Hi! I'm <button className="blue-pill">Developer</button><br/>Rahul Mishra</p>
                <p className="bottom-text">
                I'm a passionate & driven computer science undergraduate <br/> who likes diving into a diverse
                range of domains.
                </p>
                <div className="button-section">
                <button className="orange-box">Hire Me!</button>
                <a href="#" className="btn-no-outline">Projects &#8599;</a>
                </div>
            </div>
            <div className="image-area">
                <h2 className="image-area-text">Need a fully functional website or <br/>web app for your enterprise?</h2>
                <div className="image-area-card-container">
                    <Card url="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/>
                    <Card url="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/184300iC067819AE50300F4?v=v2"/>
                    <Card url="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"/>
                    <Card url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"/>
                </div>
            </div>
        </div>
    );
}

export default MainArea;

