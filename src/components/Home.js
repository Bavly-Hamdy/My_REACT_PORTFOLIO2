
import React from 'react';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Bavly Hamdy</h1>
        <h3>And I'm a <span className="multiple-text"></span></h3>
        <p>
          I am Bavly Hamdy, a Computer Science student at King Salman International University. I hold
          certifications in Web Development, AI, Cloud Application Development, and Cybersecurity. With
          skills in modern technologies like HTML, CSS, JavaScript, and React, I focus on building scalable,
          secure, and user-friendly web solutions.
        </p>
        <div className="social-media">
          <a href="https://www.facebook.com/bavly.morgan"><i className="bx bxl-facebook"></i></a>
          <a href="https://github.com/Bavly-Hamdy"><i className="bx bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/bavly-hamdy-804baa312/"><i className="bx bxl-linkedin"></i></a>
          <a href="https://x.com/Bavly__Hamdy"><i className="bx bxl-twitter"></i></a>
        </div>
        <a href="https://drive.google.com/file/d/1XxsNA2_ag8yPobbEJ8kbFdyaTndgRTyF/view?usp=sharing" className="btn" target="_blank">
          Download CV
        </a>
      </div>
      <div className="home-img">
        <img src="imgs/home.png" alt="home" />
      </div>
    </section>
  );
}

export default Home;
