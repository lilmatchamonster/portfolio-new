"use client"
import Image from "next/image";
import styled from 'styled-components';
import profilePic2 from '../imgs/profilePic2.jpg';
import leaf from '../imgs/leaf.webp';
import leaf_invert from '../imgs/leaf-inverted.webp';
import "./about.css";

const theme = {
  a: {
    color: 'hsl(351, 28%, 52%)',
    backgroundImage: `url(${leaf})`,
    h1: { color: 'hsla(206, 56%, 23%, .19)' },
  },
  b: {
    color: 'hsl(235, 9%, 47%)',
    backgroundImage: `url(${leaf_invert})`,
  },
};

// const AboutStyles = styled.div`
//   /* box-sizing: border-box;
//   background-position: center;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-attachment: fixed; */
//   padding-top: 3.5%;
//   /* position: absolute; */
//   top: 0;
//   bottom: 0;
//   width: 100%;
//   @media screen and (max-width: 800px) {
//     padding-top: 9%;
//   }

//   .intro-card{
//     display: flex;
//     align-items: center;
//     padding-left: 10%;
//     background-color: hsla(351, 28%, 52%, .09);
//     @media screen and (max-width: 750px) {
//       padding-left: 0;
//       flex-direction: column;
//     }
    
//     .img {
//       box-shadow: 5px 10px 18px silver;
//       width: 15rem;
//       height: 15rem;
//       border-radius: 20%;
//       /* border-radius: 50%; */
//       margin: 2.5%;
//     }
//     p {
//       background-color: hsla(351, 28%, 52%, .09);
//       box-shadow: 5px 10px 18px silver;
//       font-size: 1rem;
//       font-weight: 500;
//       text-align: left;
//       text-shadow: 1px 1px silver;
//       padding: 2%;
//       margin: 1%;
//       width: 40%;
//       @media screen and (max-width: 750px) {
//         background-color: hsla(000, 0%, 100%, .7);
//         transition: background-color .75s;
//         width: 60%;
//       }
//       @media screen and (max-width: 360px) {
//         width: 96%;
//       }
//     }
//     .contact {
//       margin-bottom: 5%;
//     }
//   }
//   .preview {
//     img {
//       width: 200px;
//       margin: 1%;
//       border: 1px solid white;
//     }
//   }
// `;

export default function About() {
  return (
    <div className="about-container">
      <Image className='bg-img' src={leaf} alt='leaf' fill={true} priority={true} />
      {/* <AboutStyles style={theme['a']}> */}
      <div className="about-styles" style={theme['a']}>
        <h1 style={{ color: 'hsla(351, 28%, 52%, .19)', textShadow: '0 0 3px hsl(195,16%,85%,.3)' }}>
          About
          </h1>
        <div className={'intro-card'}>
          <Image className={'img'} src={profilePic2} alt='Ash' />
          <p>
            Hi, I am Ashley a Digital Artist and
            Full Stack Web Developer. I have
            always loved to create something
            beautiful be it visual, musical, or
            technical. I believe that we should
            use our talents to improve the world
            around us and improve the lives of
            others.
            <br />
            <br />
            As a web developer, I hope to use my
            skills to pursue meaningful work
            with opportunities to grow and
            learn.
            <br />
            <br />
            I work in React/Redux, JavaScript, HTML5/CSS3, Node.js, RESTFul API, Python, SQLite3, and LESS/SASS.
          </p>
        </div>
        <div className={'intro-card'}>
          <h1 style={{ color: 'hsla(351, 28%, 52%, .19)', textShadow: '0 0 3px hsl(195,16%,85%,.3)' }}>
            Contact:
          </h1>
          <p className={'contact'}>
            Please feel free to contact me with
            any questions :) <br />
            CocoOliveCats@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}