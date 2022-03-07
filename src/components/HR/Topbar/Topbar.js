import React from 'react';
import './Topbar.css';
const Topbar = () => {
    return (
        <div className="top-section">

            <div className="top-bar">
                <div className="logo">
                    <span>Solar Soft</span>
                </div>
                <div className="menuBar">
                    <ul className="menu-item">
                        <li>Name</li>
                        <li className="logout">Logout</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Topbar;