import React from 'react';
const logopic = require ('./logo-white.png');

function Header() {
    return (
        <div className="header">
            <div className="logo-box">
                <img src={logopic} alt="Logo" className="logo"></img>
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Warpdrive software</span>
                    <span className="heading-primary-sub">Let's make work easier.</span>
                </h1>

                <button className="btn btn-white">Discover our apps</button>
            </div>
        </div>
    )
}
// src="./components/logo-white.png"  
export default Header;