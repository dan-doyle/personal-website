import React, { useState, useEffect } from 'react';
import './Experience.css';

export default function Experience() {
    const [currentJob, setCurrentJob] = useState('Deutsche Bank');
    // job data below is an object with the current job's data extracted
    const [jobData, setJobData] = useState({info: []}); // when mapping li's in jobData, why is an inf loop caused if we do not include the empty list for info here ?

    // add useEffect with currentJob in dependency array
    useEffect(() => {
        setJobData(jobList.filter(obj => obj.name === currentJob)[0]);
        console.log(jobData);
    }, [currentJob]);

    const jobList = [
        {
            name: 'Deutsche Bank',
            position: 'Investment Banking Analyst',
            dates: 'June 2019 - August 2019 and October 2020 - June 2021',
            info: ['Joined the Healthcare Merges & Acquisitions advisory team following internship in 2019', 'Sell-side mandate for large European Healthcare services conglomerate to divest non-core asset','Engaged in numerous acquisition financings and refinancings for European sponsor-backed corporates']
        },
        {
            name: 'KKR',
            position: 'Credit Investment Intern',
            dates: 'June 2018 - July 2018',
            info: ['Member of Leveraged Credit team, responsible for preparing investment due diligence', 'Engaged in the Investment Committee regarding the investment in European sponsor-backed corporates', 'Created financial models focused on debt repayment in downside scenarios']
        },
        {
            name: 'Blackrock College',
            position: 'Math and Applied Math Teacher',
            dates: 'August 2017 - September 2017',
            info: ['Planned and delivered Maths classes to penultimate year students in preparation for their Leaving Certificate examinations', 'Introduced transition year students to the Applied Mathematics Leaving Certificate curriculum', 'Demonstrating leadership in engaging students and promoting logical thinking']
        }
    ]; 

    const handleClick = (e) => {
        setCurrentJob(e.target.innerHTML);
    };

    return (
        <div id="experience">
            <h2>Experience</h2>
            <div className='experience-grid'>
                <div className='job-list'>
                    <ul>
                        {
                            jobList.map((obj, index) => <li className={(obj.name === currentJob) ? 'selected' : 'normal'} key={index} onClick={handleClick}>{obj.name}</li>)
                        }
                    </ul>
                </div>
                <div className='job-details'>
                    <p className='job-position'>{jobData.position}</p>
                    <p className='job-dates'>{jobData.dates}</p>
                    <ul>
                        {
                            jobData.info.map((item, index) => <li key={index}>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}