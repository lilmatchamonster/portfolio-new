"use client"
import Image from "next/image";
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

export default function About() {
  return (
    <div className="about-container">
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