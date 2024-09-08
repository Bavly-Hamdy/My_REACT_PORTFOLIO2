
import 'boxicons/css/boxicons.min.css';  // Importing boxicons globally for icons

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    /*==================== toggle icon navbar ====================*/
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    /*==================== scroll sections active link ====================*/
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
          });
        }
      });

      /*==================== sticky navbar ====================*/
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);

      /*==================== remove toggle icon and navbar when click navbar link ====================*/
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    };

    /*==================== scroll reveal ====================*/
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    /*==================== typed js ====================*/
    new Typed('.multiple-text', {
      strings: ['Web Developer', 'Media Buyer', 'Graphics Designer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });

    /*==================== Toggle between dark mode and light mode ====================*/
    const modeToggleBtn = document.getElementById('mode-toggle');
    const modeIcon = document.getElementById('mode-icon');
    const body = document.body;

    const updateIcon = () => {
      if (body.classList.contains('light-mode')) {
        modeIcon.classList.replace('bx-sun', 'bx-moon'); // Light mode: show moon icon for dark mode selection
        modeToggleBtn.style.backgroundColor = '#f0f0f0'; // Light background for light mode
      } else {
        modeIcon.classList.replace('bx-moon', 'bx-sun'); // Dark mode: show sun icon for light mode selection
        modeToggleBtn.style.backgroundColor = '#1f242d'; // Dark background for dark mode
      }
    };

    modeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      updateIcon(); // Update icon when mode changes
    });

    updateIcon(); // Initialize the correct icon and background on page load

    /*==================== Change images when light mode is activated ====================*/
    const homeImg = document.querySelector('.home-img img');
    const aboutImg = document.querySelector('.about-img img');

    const updateImages = () => {
      if (body.classList.contains('light-mode')) {
        homeImg.src = 'imgs/home-v2.png';
        aboutImg.src = 'imgs/about-v2.png';
      } else {
        homeImg.src = 'imgs/home.png';
        aboutImg.src = 'imgs/about.png';
      }
    };

    modeToggleBtn.addEventListener('click', updateImages);
    updateImages(); // Initialize images based on mode on page load

    /* Adjusting the hover effect to enhance the user experience */
    const homeImage = document.querySelector('.home-img img');
    const aboutImage = document.querySelector('.about-img img');

    homeImage.addEventListener('mousemove', (event) => {
      const rect = homeImage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      homeImage.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1.05)`;
    });

    aboutImage.addEventListener('mousemove', (event) => {
      const rect = aboutImage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      aboutImage.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1.05)`;
    });

    homeImage.addEventListener('mouseleave', () => {
      homeImage.style.transform = 'scale(1)';
    });

    aboutImage.addEventListener('mouseleave', () => {
      aboutImage.style.transform = 'scale(1)';
    });
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
