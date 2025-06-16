import React from 'react'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-text">DG</span>
            </div>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Darshan Gowda M
            </p>
          </div>

          <div className="footer-made">
            <p className="made-with">
              Made with <FaHeart className="heart-icon" /> in India
            </p>
          </div>

          <div className="footer-social">
            <a
              href="https://github.com/Darshan-gowda-m"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/darshan-gowda-m-gowda-m-31361b260/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
