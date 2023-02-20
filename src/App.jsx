import React from 'react'
import Header from './assets/components/header/Header'
import Nav from './assets/components/nav/Nav'
import About from './assets/components/about/About'
import Services from './assets/components/services/Services'
import Portfolio from './assets/components/portfolio/Portfolio'
import Contact from './assets/components/contact/Contact'
import Skills from './assets/components/skills/Skills'
import Footer from './assets/components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App