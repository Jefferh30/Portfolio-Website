import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://github.com/Jefferh30' target="_blank"><FaGithub /></a>
      <a href='mailto:jefferh30@gmail.com' target="_blank"><MdEmail /></a>
        
    </div>
  )
}

export default HeaderSocials