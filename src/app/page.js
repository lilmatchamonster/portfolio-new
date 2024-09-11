import Image from "next/image";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import leaf from './imgs/leaf.webp';
import s from "./page.module.css";

export default function Home() {
  return (
    <main className={s.main}>
      <Image className={s.bgimg} src={leaf} alt='leaf' fill={true} priority={true} />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </main>
  );
}
