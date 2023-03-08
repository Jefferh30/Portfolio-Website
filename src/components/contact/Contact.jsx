import React, {useState, useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMailCheckFill} from 'react-icons/ri'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ozs7s0d', 'template_fyrn6de', form.current, 'PKDqME9oXy-lmpBBD')
      .then((result) => {
          console.log(result.text);
          setSubmitted(true);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <p>jefferh30@gmail.com</p>
            <a href='mailto:jefferh30@gmail.com' target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <p>+593993605531</p>
            <a href='https://api.whatsapp.com/send?phone+593993605531' target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of contact options*/}

        {submitted ? (
        <div className='success-message'>
            <RiMailCheckFill className='success-icon' />
            <p>Thanks for contacting me!</p>
        </div>
        ) : (
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required pattern="^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$" />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn-contact'>Send Message</button>
        </form>
        )}
      </div>
    </section>
  )
}

export default Contact