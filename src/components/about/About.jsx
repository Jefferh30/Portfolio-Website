import React from 'react'
import './about.css'
import ME from '../../assets/web-developer-2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc' 

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working on the Web</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about-icon'/>
              <h5>Users of my Sites</h5>
              <small>500k+ Worldwide</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about-icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>I'm an Aerospace Engineering graduate. During my time in University I discovered I really enjoy working on a computer. Since then, I have built websites, tools and created content that has helped thousands of students learn Math.</p>
          <div className='btn-about'>
            <a href='#contact' className='btn-contact'>Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About