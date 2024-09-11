"use client"
import ProjectCard from './ProjectCard';
import Image from 'next/image';
import styled from 'styled-components';
import berry from '../imgs/galina-n-AgWVcQz1bOA-unsplash.webp'
import berry_invert from '../imgs/galina-n-AgWVcQz1bOA-unsplash-inverted.webp'
import leaf_icon from '../imgs/leaf-icon.jpg';
import vendme from '../imgs/vendme.ico';
import spacequest from '../imgs/spacequestlogo-03.svg';
import notesequence from '../imgs/sequenceLogo.svg';
import "./projects.css";

const myProjects = [
  {
    pic: <Image src={notesequence} alt='Note Sequencer' width={70} height={70} />,
    title: 'Note Sequencer App',
    link: 'https://note-sequence.netlify.app',
    description: 'Note Sequencer enables users to create sequences of notes that can be saved locally, updated and played back.',
    stacks: 'Created frontend UI and functionality with React, Axios, and Howler.js.  |  ',
    hub: 'https://github.com/lilmatchamonster/note-sequence',
  },
  {
    pic: <Image src={vendme} alt='Vendme' width={70} height={70} />,
    title: 'Vendme',
    // link: 'https://vendmefe.herokuapp.com',
    description: 'Vendme helps bring vendors and markets together. Markets can easily display available stalls to help vendors find locations to setup shop. It also allows vendors the opportunity to showcase their goods for curious customers.',
    stacks: 'Collaborated remotely with 4 other Web Developers for 2 months utilizing Stripe, React, Styled Components, Node.js, Express, CSS, JSX, Heroku, Firebase, Axios, Knex, and sqlite3. I mainly worked on frontend data management.  |  ',
    hub: 'https://github.com/vendme',
  },
  {
    pic: <Image src={spacequest} alt='SpaceQuest9' width={70} height={70} />,
    title: 'SpaceQuest9',
    // link: 'https://space-quest-9.netlify.com/',
    description: 'SpaceQuest9 is a multi-user constellation navigation game. Explore different star systems. Learn their names and read a short description of them while memorizing their different forms. Collaborated with 5 Web Developers.',
    stacks: 'Collaborated remotely with 4 other Web Developers for 1 week using React, Styled Components, Konva, Axios, Yup, Python, Django, Django Rest Framework, JSX, and CSS. I was solely responsible for building the game interface and canvas display.  |  ',
    hub: 'https://github.com/spacequest9',
  },
  {
    pic: <Image src={leaf_icon} alt='Portfolio' width={70} height={70} />,
    title: 'Portfolio',
    description: 'Is a simple site made to display some of my past projects while being an example of something I can make.',
    stacks: 'Created using React, Styled Components, CSS, JSX, Netlify, and React Spring.  |  ',
    hub: 'https://github.com/lilmatchamonster/portfolio',
  }
]

// const ProjectSyles = styled.div`
//   background-position: center;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover !important;
//   background-repeat: no-repeat;
//   background-attachment: fixed !important;
//   padding-top: 3.5%;
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   width: 100%;
//   @media screen and (max-width: 800px) {
//     padding-top: 9%;
//   }

//   .projects {
//     margin-top: 2.5%;
//     padding: 1%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     overflow-y: scroll;
//     height: 56%;

//     @media screen and (max-width: 1250px) {
//       position: relative;
//       padding-right: 10%;
//     }
//     @media screen and (max-width: 860px) {
//       padding-right: 30%;
//     }
//   }
// `;

export default function Projects() {

  const theme={
    a:{color: 'hsl(235, 9%, 47%)', background: `url(${berry})`, h1:{color: 'hsla(206, 56%, 23%, .19)'}},
    b:{color: 'hsl(351, 28%, 52%)', background: `url(${berry_invert})`}
  }

  return (
    <div className='project-styles' style={theme['a']}>
      <h1 style={{color: 'hsla(206, 56%, 23%, .19)'}}>Projects</h1>
      <div className='projects-container'>
        <div className={'projects'}>
          {myProjects.map((card, i) => (
            <ProjectCard key={i} stacks={card.stacks} pic={card.pic} link={card.link} hub={card.hub} title={card.title} description={card.description}/>
          ))}
        </div>
      </div>
    </div>
  )
};