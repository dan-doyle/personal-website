
import React from 'react';
import Project from './Project';
import './Projects.css';

export default function Projects() {

    // replace dummy project info
    const projectsList = [
        {
            name: 'Flashcard Quiz',
            img: 'media/projects/flashcards-project.png',
            description: 'Create flashcard-based quizzes. Store quizzes by topic',
            link: 'https://github.com/dan-doyle/flashcards'
        },
        {
            name: 'Jammming',
            img: 'media/projects/jamming-project.png',
            description: 'Add and edit playlists using the Spotify API',
            link: 'https://github.com/dan-doyle/jammming'
        },
        {
            name: 'YouTube Viewer',
            img: 'media/projects/youtube-viewer.png',
            description: 'Enter unique YouTube channel IDs and view channel content',
            link: 'https://github.com/dan-doyle/youtube-viewer'
        },
    ];

    return (
        <div id='projects'>
            <h2>Projects</h2>
            <div className='projects-container'>
                {
                    projectsList.map(project => <Project obj={project}/>)
                }
            </div>
        </div>
    )
}