import React from 'react'
import '../styles/Hero.css'
import heroImg from '../assets/hero-img.png' // place your image inside src/assets

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Image */}
      <img src={heroImg} alt="Coffee background" className="hero-image" />

      {/* Overlay Content */}
      <div className="hero-content">
        <h1 className="hero-title">Savour The Perfect <br />Brew!</h1>
        <p className='hero-para'>"Awaken your senses with the rich, aromatic embrace of our handcrafted coffee, brewed with passion and the finest ethically-sourced beans. From meticulously crafted espresso drinks to unique seasonal specials, discover your perfect cup."</p>
        <button className="hero-btn">Shop Now</button>
      </div>
    </section>
  )
}

export default Hero
