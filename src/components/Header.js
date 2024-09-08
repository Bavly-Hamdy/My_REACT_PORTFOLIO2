
import React from 'react';

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">Portfolio</a>
      <i className="bx bx-menu" id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <button id="mode-toggle" className="btn">
        <i id="mode-icon" className="bx bx-moon"></i>
      </button>
    </header>
  );
}

export default Header;
