import React from 'react';
import './NavBar.css';

const NavBar = ({isScrolling}) => {

    const toTheTop = () =>{
        window.scrollTo({top: 0, left: 0, behavior:'smooth'})
    }
  return (
    <nav className={`navBar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className='navBar-logo' onClick={toTheTop}>Your Name</div>
    </nav>
  )
}

export default NavBar