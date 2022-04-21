import React from 'react';
import './Contact.css';

export default function Contact() {
    
    return (
        <div id="contact">
            <h2>Contact</h2>
            <div className='text'>
                <p>Whether you have a question, or just want to say hi, my inbox is always open! </p>
            </div>
            <div className="say-hi-button">
                <a href="mailto:daniel.doyle@outlook.ie">Say Hello</a> 
            </div>

        </div>
    )
}