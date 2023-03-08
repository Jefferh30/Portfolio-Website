import React from 'react'
import './services.css'
import { BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Responsive website design.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Web application development.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Website maintenance and support.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Landing page design and development.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Custom WordPress website.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>SEO</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Site speed analysis and optimization.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Mobile responsiveness optimization.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Duplicate content analysis and removal.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Internal linking structure optimization.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>URL structure optimization.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Structured data markup implementation.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Image optimization and compression</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services