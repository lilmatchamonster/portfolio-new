import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import s from "./page.module.css";

export default function Home() {
  return (
    <main className={s.main}>
      <Nav />
      {/* <About /> */}
      <Skills />
    </main>
  );
}
