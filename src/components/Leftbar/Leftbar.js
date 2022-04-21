import React, { useState } from 'react';
import './Leftbar.css';

export default function Leftbar() {
    // Each index here represents a different icon
    const [hover, setHover] = useState([false, false]);

    // className of svg changes when hovered over or not ! 
    const gitIcon = hover[0] ? "side-left-icon-hover" : "side-left-icon";
    const LinkedInIcon = hover[1] ? "side-left-icon-hover" : "side-left-icon";


    const handleMouseEvent = (e, index) => {
        let newHover = hover.map((element, i) => {
            if(index === i) {
                return !element
            } else { return element}
        })
        setHover(newHover)
    }

    return (
        <div className="side-left">
            <ul>
                <li>
                    <a href="https://github.com/dan-doyle" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  
                        onMouseEnter={(e) => handleMouseEvent(e,0)}
                        onMouseLeave={(e) => handleMouseEvent(e,0)}
                        className={gitIcon}>
                        <title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/daniel-doyle-21800b142/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                        onMouseEnter={(e) => handleMouseEvent(e,1)}
                        onMouseLeave={(e) => handleMouseEvent(e,1)}
                        className={LinkedInIcon}>
                        <title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                </li>
            </ul>
        </div>
    )
}

