
import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={process.env.PUBLIC_URL + '/imgs/about.png'} alt="About" />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Frontend Developer</h3>
        <p>I am a Computer Science student at King Salman International University, and I have obtained certificates in Full Stack Development, AI, and Cloud Computing. I specialize in building secure and scalable applications using the latest technologies.</p>
        <a href="https://www.credly.com/users/bavly-hamdy" target="_blank" className="btn">Read More</a>
      </div>
    </section>
  );
}

export default About;
