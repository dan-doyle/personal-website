import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false);
    
    return (
        <header role="banner">
        <nav className="header-subcontainer">
            <div className="logo">
                <img src="media/Dinosaur-in-the-Letter-D.svg" alt="Logo"/>
            </div>
            <a href='#' className='toggle-button' onClick={(e) => { setIsNavExpanded(!isNavExpanded)}}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>

            <nav className="nav-container">
                <div className={isNavExpanded ? "nav-table expanded" : "nav-table"}>
                    <ol>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ol>
                </div>
                <div className="cv">
                    <Link to="/CV">CV</Link> 
                </div>
            </nav>
        </nav>
    </header>
    )
}