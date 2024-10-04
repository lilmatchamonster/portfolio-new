"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import MobileNav from './components/MobileNav';
import Nav from './components/Nav';
import NavBtn from './components/NavBtn';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import leaf from './imgs/leaf.webp';
import s from './page.module.css';

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 760) {
      setToggleMenu(false);

    } else {
      setToggleMenu(true);
    }
  },[]);
  
  return (
    <main className={s.main}>
      <Image className={s.bgimg} src={leaf} alt='leaf' fill={true} priority={true} />
      {toggleMenu && <MobileNav setToggleMenu={setToggleMenu} />}
      <Nav />
      <NavBtn setToggleMenu={setToggleMenu} />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </main>
  );
};
