import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>jeff@gmail.com</h5>
            <a href='mailto:jeff@gmail.com' target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>jeff@gmail.com</h5>
            <a href='https://m.me/profile' target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+1234567</h5>
            <a href='https://api.whatsapp.com/send?phone+1234556' target="_blank">Send a message</a>
          </article>
        </div>
        //End of contact options
        <form action=''>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact