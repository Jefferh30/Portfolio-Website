import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Jeff's portfolio</a>
      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://github.com/Jefferh30'><FaGithub /></a>
        <a href='https://web.facebook.com/jefferson.huera.5'><FaFacebookF /></a>
        <a href='https://www.instagram.com/jeffersonhuera/'><FiInstagram /></a> 
      </div>

      <div className="footer_copyright">
        <small>&copy; Jefferson Huera. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer