
import React from 'react';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Full Name" required style={{order: 1}} />
          <input type="email" placeholder="Email Address" required style={{order: 2}} />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Mobile Number" required style={{order: 1}} />
          <input type="text" placeholder="Email Subject" required style={{order: 2}} />
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
        <div className="btn-container">
          <input type="submit" className="btn" value="Send Message" />
        </div>
        <div className="btn-container">
          <a href="https://wa.me/01111835471" className="btn whatsapp-btn" target="_blank">
            <i className='bx bxl-whatsapp'></i> Message us on WhatsApp
          </a>
        </div>
      </form>
    </section>
  );
}

export default Contact;
