import React from 'react'
import { FaSearch } from 'react-icons/fa'
import '../styles/Navbar.css'
import logo from '../assets/coffee_logo.png'

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <img src={logo} alt="CoffeeCraft Logo" />
                </div>

                {/* Nav Links */}
                <ul className="navbar-links">
                    <li onClick={() => scrollToSection('home')}>Home</li>
                    <li onClick={() => scrollToSection('menu')}>Menu</li>
                    <li onClick={() => scrollToSection('blog')}>Blog</li>
                    <li onClick={() => scrollToSection('contact')}>Contact</li>
                    <li onClick={() => scrollToSection('about')}>About</li>
                    <div className="navbar-search">
                        <FaSearch className="search-icon" />
                    </div>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar
