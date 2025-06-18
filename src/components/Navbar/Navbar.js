import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaFileDownload, FaMoon, FaSun } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './Navbar.scss'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <motion.div whileHover={{ scale: 1.1 }} className="logo-circle">
              <span className="logo-initials">DG</span>
            </motion.div>
            <span className="logo-text">
              Darshan<span className="logo-highlight">Gowda</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? 'active' : ''
              }`}
              onClick={closeMenu}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div layoutId="navIndicator" className="nav-indicator" />
              )}
            </Link>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
            aria-label={
              darkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {darkMode ? (
              <FaSun className="theme-icon sun" />
            ) : (
              <FaMoon className="theme-icon moon" />
            )}
          </button>
          <a
            href="https://drive.google.com/file/d/1v5QQjk8UKAWkBYPc057bWyADiBte2IhZ/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            <FaFileDownload className="resume-icon" /> Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-mobile">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mobile-theme-toggle"
            aria-label={
              darkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {darkMode ? (
              <FaSun className="theme-icon sun" />
            ) : (
              <FaMoon className="theme-icon moon" />
            )}
          </button>
          <button onClick={toggleMenu} className="mobile-menu-button">
            {isOpen ? (
              <FaTimes className="menu-icon" />
            ) : (
              <FaBars className="menu-icon" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mobile-menu"
        >
          <div className="mobile-menu-content">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link ${
                  location.pathname === link.path ? 'active' : ''
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://drive.google.com/file/d/1OymEeXobnjT_gWrXIjU7Ab-ksXGyLN0J/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-resume-button"
              onClick={closeMenu}
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
