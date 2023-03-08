import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'


const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Math quiz app with LaTeX rendering',
    github: 'https://github.com/Jefferh30/Quiz-App-with-LaTeX-rendering',
    demo: 'https://jefferh30.github.io/Quiz-App-with-LaTeX-rendering/'

  },
  {
    id: 2,
    image: IMG2,
    title: 'Derivatives calculator with LaTeX input',
    github: 'https://github.com/Jefferh30/Derivatives-Calculator-with-LaTeX',
    demo: 'https://jefferh30.github.io/Derivatives-Calculator-with-LaTeX/'

  },
  {
    id: 3,
    image: IMG3,
    title: 'Area under the curve practice problems',
    github: 'https://github.com/Jefferh30/Area-under-the-curve-practice-problems',
    demo: 'https://jefferh30.github.io/Area-under-the-curve-practice-problems/'

  },
  {
    id: 4,
    image: IMG4,
    title: 'Adding fractions calculator with steps',
    github: 'https://github.com/Jefferh30/Adding-fractions-calculator-step-by-step-',
    demo: 'https://jefferh30.github.io/Adding-fractions-calculator-step-by-step-/'

  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <h3>600+ Informative Math articles</h3>
          <p>I have created 600+ Mathematics articles in each version, English, Spanish, Portuguese.</p>
          <div className="portfolio_item-cta">
            <a href="https://en.neurochispas.com/" className='btn-small' target='_blank'>English</a>
            <a href="https://www.neurochispas.com/"className='btn-small' target='_blank'>Spanish</a>
            <a href="https://br.neurochispas.com/"className='btn-small' target='_blank'>Portuguese</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <h3>150+ Practice Problem Generators</h3>
          <p>Using GeoGebra API, I have created 150+ practice problems for multiple math topics.</p>
          <div className="portfolio_item-cta">
            <a href="https://cursos.neurochispas.com/practica-algebra/"className='btn-small' target='_blank'>Only in Spanish</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <h3>Interactive Math Courses</h3>
          <p>The courses follow the format of quizzes in order to increase user engagement. GeoGebra API was used to create interactive applets.</p>
          <div className="portfolio_item-cta">
            <a href="https://cursos.neurochispas.com/gti"className='btn-small' target='_blank'>Only in Spanish</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <h3>60+ Math calculators</h3>
          <p>Some calculators have step-by-step solutions, and others have LaTeX input and output rendering.</p>
          <div className="portfolio_item-cta">
            <a href="https://en.neurochispas.com/calculators-2/" className='btn-small' target='_blank'>English</a>
            <a href="https://www.neurochispas.com/calculadoras/"className='btn-small' target='_blank'>Spanish</a>
            <a href="https://br.neurochispas.com/calculadoras/"className='btn-small' target='_blank'>Portuguese</a>
          </div>
        </article>
      </div>

      <h5 className='demo-examples'>Demo examples</h5>
      <div className="container portfolio_container">
        {
          projects.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt='Screenshot of project' />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
       
        
      </div>
    </section>
  )
}

export default Portfolio