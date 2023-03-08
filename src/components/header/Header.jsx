import React from 'react'
import './header.css'
import ME from '../../assets/web-programmer-1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className='grid-column-1'>
          <h1>Hello, I'm Jefferson Huera</h1>
          <h5 className="text-light">Front-End Developer</h5>
          <HeaderSocials />
          <p>I love building things for the web. I'm a fast learner, a math nerd and I like working out to stay productive.</p>
          <div className='btn-explore'>
            <a href='#portfolio' className='btn'>Explore</a>
          </div>
          
        </div>
        <div className="me grid-column-2">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header