"use client"
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import herokuLogo from '../imgs/herokuLogo.svg';
import sqliteLogo from '../imgs/sqliteLogo.svg';
import restfulLogo from '../imgs/restfulLogo.svg';
import styledComponentsLogo from '../imgs/styledComponentsLogo.svg';
import beach from '../imgs/beach-close-up-cold-1533720.webp';
import beach_invert from '../imgs/beach-close-up-cold-inverted.webp';
import "./skills.css";

library.add(fab);
//! Icon styles loading slowly, investigate possible css icon usage
const mySkills = [
  {
    name: 'HTML5',
    // icon: <FontAwesomeIcon icon={['fab', 'html5']} />,
    icon: <FontAwesomeIcon icon='fa-brands fa-html5' />,
    description:
      'Experience using HTML to seperate web elements into appropriate HTML tags and display data.',
  },
  {
    name: 'CSS3',
    icon: <FontAwesomeIcon icon={['fab', 'css3-alt']} />,
    description:
      'Experience in using CSS to make UI with and without an UX designer. And Also have experience with the SASS and LESS frameworks',
  },
  {
    name: 'JavaScript',
    icon: <FontAwesomeIcon icon={['fab', 'js-square']} />,
    description:
      'Experience writing JavaScript es6, DOM manipulation, writing functions, and bulit in methods',
  },
  {
    name: 'REACT',
    icon: <FontAwesomeIcon icon={['fab', 'react']} />,
    description:
      'The bulk of my experience in building frontend applications is in the React framework utilzing popular libraies like Redux',
  },
  {
    name: 'Node.js',
    icon: <FontAwesomeIcon icon={['fab', 'node']} />,
    description:
      'Experience building Node servers with Express framework',
  },
  {
    name: 'RESTful Api',
    icon: null,
    class: 'rest',
    // newIcon: <img src={`${restfulLogo}`} width='100px' alt='{REST}' />,
    newIcon: <Image src={restfulLogo} width={100} alt='{REST}' />,
    description:
      'Experience in working with and building RESTFul API endpoints to build full CRUD functionality',
  },
  {
    name: 'Github',
    icon: <FontAwesomeIcon icon={['fab', 'github-alt']} />,
    description:
      'Experience working with online cloud version control utilizing seperate production, staging, development, and feature branches',
  },
  {
    name: 'Python',
    icon: <FontAwesomeIcon icon={['fab', 'python']} />,
    description: 'Basic understanding of Python, Flask, and Django.',
  },
  {
    name: 'Squarespace',
    icon: <FontAwesomeIcon icon={['fab', 'squarespace']} />,
    description:
      'Well versed in setting up dynamic and unique websites through Squarespace. Excellent at setting up Commerce sites and handling payments via Stripe.',
  },
  {
    name: 'SQLite3',
    icon: null,
    class: 'sql',
    // newIcon: (
    //   <img
    //     src={`${sqliteLogo}`}
    //     width='50px'
    //     className={'icon'}
    //     alt='SQLite3'
    //   />
    // ),
    newIcon: (
      <Image
        src={sqliteLogo}
        width={50}
        alt='SQLite3'
      />
    ),
    description:
      'Experience using sqlite3 databases tables, queries, and joins',
  },
  {
    name: 'Heroku',
    icon: null,
    // class: 'restful fix',
    class: 'heroku',
    // newIcon: (
    //   <img
    //     src={`${herokuLogo}`}
    //     width='40px'
    //     className={'icon heroku'}
    //     alt='Heroku'
    //   />
    // ),
    newIcon: (
      <Image
        src={herokuLogo}
        width={40}
        alt='Heroku'
      />
    ),
    description:
    'Experience with live deployment/configuration using heroku linked with a github repository master branch',
  },
  {
    name: 'LESS',
    icon: <FontAwesomeIcon icon={['fab', 'less']} />,
    description:
    'Extensive experience using LESS/SASS compiler to easily control variables, Mixins, and Namespaces to organize and simplify style sheets.',
  },
  {
    name: 'Styled Components',
    icon: null,
    class: 'styled-com',
    // newIcon: (
    //   <img
    //     src={`${styledComponentsLogo}`}
    //     width='48px'
    //     height="100%"
    //     className={'icon'}
    //     alt='Styled Components'
    //   />
    // ),
    newIcon: (
      <Image
        src={styledComponentsLogo}
        width={48}
        // height="100%"
        alt='Styled Components'
      />
    ),
    description:
      'Experience using styled components to not only create themes and easy to handle dynamic styling, but also to create reusable custom styled components.',
  },
];

// const SkillsStyles = styled.div`
//   box-sizing: border-box;
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
//   height: 100%;
//   @media screen and (max-width: 800px) {
//     padding-top: 9%;
//   }
  
//   .skills-container {
//     display: flex;
//     width: 100%;
//     height:60%;
//     margin-top: 2.5%;
//   }
//   .skills {
//     overflow-y: scroll;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     padding: 1%;
//     background-color: hsl(195,16%,85%, .2);
//     width: 100%;
//     height: 100%;

//     .card {
//       border: 1px solid white;
//       background-color: hsl(195,16%,85%, .7);
//       margin: .5%;
//       padding: 1%;
//       font-size: 3rem;
//       width: 20%;
//       @media screen and (max-width: 900px) {
//         width: 40%;
//       }
//       @media screen and (max-width: 500px) {
//         width: 80%;
//         margin: 1rem;
//       }
      
//       p {
//         font-size: 1rem;
//         color: #0c2b31;  
//         font-weight: 500;        
//         text-shadow: 1px 1px silver;
//       }
//     }
//     .restful {
//       font-size: 1.51rem !important;
//       margin:14px 0 34px;
//       /* color: #0c2b31;  */
//       color: #6D6F83 !important; 
//       pointer-events: none;
//       -webkit-user-select: none;
//       -khtml-user-select: none;
//       -moz-user-select: none;
//       -o-user-select: none;
//       user-select: none;
//     }
//     .fix {
//       margin-bottom: 7%;
//     }
//     .rest {
//       margin-bottom: 5%;
//     }
//     .sql {
//       margin-bottom: -2.5%;
//     }
//     .heroku {
//       margin-bottom: -3.3%;
//     }

//   }
// `;

const theme = {
  a: {
    color: 'hsl(235, 9%, 47%)',
    background: `url(${beach})`,
    h1: { color: 'hsla(206, 19%, 59%, .19)' },
  },
  b: { color: 'hsl(351, 28%, 52%)', background: `url(${beach_invert})` },
};

export default function Skills() {
  return (
    <div>
        {/* <SkillsStyles style={theme['a']}> */}
        <div className="skills-styles" style={theme['a']}>
          <h1 style={{ color: 'hsl(195,16%,85%,.17)', textShadow: '0 0 3px hsl(195,16%,85%,.3)' }}>
            Tech Stack
          </h1>
          <div className={'skills-container'}>
            <div className={'skills'}>
              {mySkills.map((skill, i) => (
                <div className={'card'} key={i}>
                  {skill.icon !== null ? (
                    <>
                      {skill.icon}
                      <p className='name'>{skill.name}</p>
                      <p>
                        {skill.description}
                      </p>
                    </>
                  ) : (
                    <>
                      {/* <p className={`${skill.class}`}>
                        {skill.newIcon}
                      </p> */}
                      {/* <span className={`${skill.class}`}> */}
                        {skill.newIcon}
                      {/* </span> */}
                      <p className={`${skill.class}`}>{skill.name}</p>
                      {/* <p >{skill.name}</p> */}
                      <p>{skill.description}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
		</div>
  );
}