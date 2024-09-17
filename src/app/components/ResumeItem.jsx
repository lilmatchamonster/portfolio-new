"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './resumeItem.css';

library.add(fas);

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

export default function ResumeItem({ job }) {
  const { company, title, duration, icon, points } = job;

  return (
    <div className='job-item'>
      <div className='item-header'>
        {icon}
        <h4>
          {company}
          <br/>
          {title} | {duration}
        </h4>
      </div>
      <ul>
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}