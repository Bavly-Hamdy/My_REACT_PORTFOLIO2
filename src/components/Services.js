
import React, { useState } from 'react';

function Services() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="services" id="services">
      <h2 className="heading">Our <span>Services</span></h2>
      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Web Development</h3>
          <p>We create dynamic and responsive web applications using HTML, CSS, and JavaScript, ensuring a smooth user experience.</p>
        </div>
        <div className="services-box">
          <i className="bx bx-brain"></i>
          <h3>AI Integration</h3>
          <p>We develop intelligent systems using Artificial Intelligence and Machine Learning models to bring your applications to life.</p>
        </div>
        <div className="services-box">
          <i className="bx bx-cloud"></i>
          <h3>Cloud Solutions</h3>
          <p>We offer scalable cloud infrastructure for businesses, ensuring secure and cost-effective solutions.</p>
        </div>
        <div className="services-box">
          <i className="bx bx-lock"></i>
          <h3>Cybersecurity</h3>
          <p>Our cybersecurity services ensure that your data and applications are protected from malicious attacks.</p>
        </div>
        <div className="services-box">
          <i className='bx bx-code-curly'></i>
          <h3>Full Stack Development</h3>
          <p>Create complete web applications covering both front-end and back-end using technologies like React and Node.js.</p>
        </div>
        <div className="services-box">
          <i className='bx bx-data'></i>
          <h3>Data Science</h3>
          <p>Analyze large datasets using Python and SQL, extracting actionable insights to drive business decisions.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
