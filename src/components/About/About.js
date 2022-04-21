import React, { useState } from 'react';
import './About.css';

export default function About() {

    // Extract image files from media/tech 
    const techImages = ['html-img.png', 'CSS logo.png', 'js-logo.png', 'react-logo.png', 'redux-logo.png'];

    return (
        <div id="about">
            <h2>About Me</h2>
            <div className="aboutme-grid">
                <div className="text">
                    <p>I began my professional career as an Investment Banker in London. While spending time with clients who were creating cutting-edge technology, I was enthused by the thought of being on the side of the developers and creators rather than that of the advisor. It became clear to me that I saw myself in a technical and creative field, centred around innovation, utilising the coding and associated maths-based skills I had learned in my undergraduate degree.  This spurred me to pursue software development and enroll in a Masters of Computer Science at Imperial College London.</p>
                    <p>This website is where you can find my work. Here are a few technologies I have been working with:</p>                
                    <div className="languages">
                        {
                            techImages.map((item) => (<img src={'media/technologies/'+item}/>))
                        }
                    </div>
                </div>
                <div className='pic-side-of-grid'>
                    <div className="wrapper">        
                            <img src="media/Doyle D 19.3.20_0011.jpg" alt="profile picture"/>
                    </div>
                </div>
            </div>
        </div>
    )
}