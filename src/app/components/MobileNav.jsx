import './mobileNav.css';

export default function MobileNav({ setToggleMenu }) {
  const handleClick = () => setToggleMenu(false);

  return (
    <ul className='mobile-nav' onClick={handleClick}>
      <li>
        <a href='#about'>About</a>
      </li>
      <li>
        <a href='#skills'>Skills</a>
      </li>
      <li>
        <a href='#projects'>Projects</a>
      </li>
      <li>
        <a href='#experience'>Experience</a>
      </li>
    </ul>
  );
};