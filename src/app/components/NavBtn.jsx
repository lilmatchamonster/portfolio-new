"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './navBtn.css';

library.add(fas);

export default function NavBtn({ setToggleMenu }) {

  const handleClick = () => setToggleMenu(true);
  
  return (
    <div className='menu-btn' onClick={handleClick}>
      <FontAwesomeIcon icon={['fas', 'bars']} />
    </div>
  )
}