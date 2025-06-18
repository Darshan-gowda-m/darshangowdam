import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaLaptopCode,
  FaBrain,
} from 'react-icons/fa'
import './Home.scss'

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-content">
          <br />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="home-text"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="home-title"
            >
              Hi, I'm <span className="highlight">Darshan Gowda M</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="home-subtitle-container"
            >
              <h2 className="home-subtitle">
                Full-Stack Developer & AI Enthusiast
              </h2>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.6, duration: 1 }}
                className="home-underline"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="home-description"
            >
              I'm an Information Science student at{' '}
              <strong>UVCE, Bengaluru</strong>, passionate about building
              intelligent applications that solve real-world problems using{' '}
              <span className="highlight">Machine Learning</span>,
              <span className="highlight"> Data Structures & Algorithms</span>,
              and
              <span className="highlight"> Full-Stack Development</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="home-buttons"
            >
              <Link to="/contact" className="home-button primary">
                Get In Touch
              </Link>
              <a
                href="https://drive.google.com/file/d/1v5QQjk8UKAWkBYPc057bWyADiBte2IhZ/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="home-button secondary"
              >
                <FaFileDownload className="button-icon" /> Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="home-image"
          >
            <div className="image-circle">
              <div className="image-inner">
                <div className="image-text">DG</div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="floating-element top"
            >
              <FaBrain className="element-icon" />
              <span className="element-text">AI/ML</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
              className="floating-element bottom"
            >
              <FaLaptopCode className="element-icon" />
              <span className="element-text">Full Stack</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home
