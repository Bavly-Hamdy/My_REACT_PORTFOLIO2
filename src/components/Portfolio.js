
import React, { useState } from 'react';

function Portfolio() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">My <span>Certificates</span></h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={process.env.PUBLIC_URL + '/imgs/IBM AI Developer.png'} alt="IBM AI Developer Certificate" />
          <div class="portfolio-layer">
            <h4>IBM AI Developer</h4>
            <p>Building Generative AI-Powered Applications with Python</p>
            <a href="https://coursera.org/share/1f5f3f6ca0ff52a4ca691092fa6d63b8" target="_blank"><i class='bx bx-link-external'></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={process.env.PUBLIC_URL + '/imgs/IBM Full Stack Software Developer.png'} alt="IBM Full Stack Software Developer" />
          <div class="portfolio-layer">
            <h4>IBM Full Stack Software Developer</h4>
            <p>Full Stack Software Developer Assessment, Introduction to Containers w/ Docker, Kubernetes & OpenShift.</p>
            <a href="https://coursera.org/share/8b52cfb4d1bae8a59131f1493ff7c859"><i class='bx bx-link-external'></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={process.env.PUBLIC_URL + '/imgs/Cloud Application Development Foundations.png'} alt="Cloud Application Development Foundations" />
          <div class="portfolio-layer">
            <h4>Cloud Application Development Foundations</h4>
            <p>Get Started with Cloud Native, DevOps, Agile, and NoSQL.</p>
            <a href="https://coursera.org/share/90008cd11ed61c68cc4fc47f758bdde5"><i class='bx bx-link-external'></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={process.env.PUBLIC_URL + '/imgs/Introduction to Software Engineering.png'} alt="Introduction to Software Engineering" />
          <div class="portfolio-layer">
            <h4>Introduction to Software Engineering</h4>
            <p>An online non-credit course authorized by IBM and offered through Coursera.</p>
            <a href="https://coursera.org/share/c45e88ae003190a129a25ba1a504be5a"><i class='bx bx-link-external'></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={process.env.PUBLIC_URL + '/imgs/Introduction to Artificial Intelligence (AI).png'} alt="Introduction to Artificial Intelligence (AI)" />
          <div class="portfolio-layer">
            <h4>Introduction to Artificial Intelligence (AI)</h4>
            <p>An online non-credit course authorized by IBM and offered through Coursera.</p>
            <a href="https://coursera.org/share/329d7e8f3aa7187853c5d725e1cf9afe"><i class='bx bx-link-external'></i></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={process.env.PUBLIC_URL + '/imgs/Foundations of Cybersecurity.png'} alt="Foundations of Cybersecurity" />
          <div class="portfolio-layer">
            <h4>Foundations of Cybersecurity</h4>
            <p>An online non-credit course authorized by Google and offered through Coursera.</p>
            <a href="https://coursera.org/share/2c77bbc64ed152f2055f6b16a47d0e2e"><i class='bx bx-link-external'></i></a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a href="https://www.coursera.org/user/2dd418d665f7e91e50004785d47a0ac7" class="btn" target="_blank" rel="noreferrer">Show More</a>
      </div>
    </section>
  );
}

export default Portfolio;
