import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TopCategories from './components/TopCat'
import TopMilkshakes from './components/TopMilk'
// import Hero from './components/Hero'

function App() {

  return (
     <>
      <Navbar />
      <Hero />
      <TopCategories />
      <TopMilkshakes />
      {/* <Hero /> */}
      {/* <Hero /> */}
      {/* <section id="home">
        <Hero />
      </section>
      <section id="menu" style={{ height: '100  vh', padding: '4rem' }}>
        <h2>Menu Section</h2>
      </section>
      <section id="blog" style={{ height: '100vh', padding: '4rem' }}>
        <h2>Blog Section</h2>
      </section>
      <section id="contact" style={{ height: '100vh', padding: '4rem' }}>
        <h2>Contact Section</h2>
      </section>
      <section id="about" style={{ height: '100vh', padding: '4rem' }}>
        <h2>About Section</h2>
      </section> */}
    </>
  )
}

export default App
