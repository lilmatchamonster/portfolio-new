"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import ResumeItem from './ResumeItem';
import './experience.css';

library.add(fas);

const resumeItems = {
  work:[
    {
      company: 'Mindera Software Craft',
      title: 'Front End Developer',
      duration: 'Feb 2021 - Nov 2023',
      icon: <FontAwesomeIcon icon={['fas', 'chalkboard-user']} />,
      points: [
        'Worked independently and together with team to quickly build out A/B tests and other features for client.',
        'Organized, managed, planned, and built features based on client specifications.',
        'Followed agile practice to in planning and executing new features and test via 2 week sprints.'
      ]
    },
    {
      company: 'Academic Analytics',
      title: 'Graphic Design Consultant',
      duration: 'Feb 2021 - Nov 2021',
      icon: <FontAwesomeIcon icon={['fas', 'chalkboard-user']} />,
      points: [
        'Assisted in setting up Wordpress site page templates and automated post archiving.',
        'Worked with the media manager to handle Wordpress plugin migration.'
      ]
    },
    // {
    //   company: 'Academic Analytics',
    //   title: 'Software Developer Intern',
    //   duration: 'May 2020 - Feb 2021',
    //   icon: <FontAwesomeIcon icon={['fas', 'chalkboard-user']} />,
    //   points: [
    //     'Collaborated with stakeholders and VP to develop application prototypes using React frontend and MongoDB backend with Auth0 authentication and authorization services. ',
    //     'Designed and developed application UI and frontend logic.'
    //   ]
    // },
  ]
}

const theme = {
  a: {
    color: 'hsl(351, 28%, 52%)',
    // backgroundImage: `url(${leaf})`,
    h1: { color: 'hsla(206, 56%, 23%, .19)' },
  },
  b: {
    color: 'hsl(235, 9%, 47%)',
    // backgroundImage: `url(${leaf_invert})`,
  },
};

export default function Experience() {
  return (
    <div className="experience-styles" style={theme['a']}>
      <h1 style={{ color: 'hsla(351, 28%, 52%, .19)', textShadow: '0 0 3px hsl(195,16%,85%,.3)' }}>
        Experience
      </h1>
      <div className='experience-container'>
        <div className={'section'}>
          <h3>Work</h3>
          <div className='group'>
            {
              resumeItems.work.map((job, i) => (
                <ResumeItem job={job} key={i} />
              ))
            }
          </div>
        </div>
      </div>
      {/* <div className={'section'}>
        <h1 style={{ color: 'hsla(351, 28%, 52%, .19)', textShadow: '0 0 3px hsl(195,16%,85%,.3)' }}>
          Contact:
        </h1>
        <div className={'job-item contact'}>
          Please feel free to contact me with
          any questions :) <br />
          CocoOliveCats@gmail.com
        </div>
      </div> */}
    </div>
  );
}