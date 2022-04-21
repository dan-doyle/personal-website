import React from 'react';

// Pass in props
export default function Project(props) {
    const { name, img, description, link } = props.obj;

    return (
            <div className='project-container'>
                <a href={link}>
                    <p className='project-name'>{name}</p>
                </a>
                <a href={link}>
                    <img src={img} alt='project mainpage' />
                </a>
                <p className='project-description'>{description}</p>
            </div>
    )
}



