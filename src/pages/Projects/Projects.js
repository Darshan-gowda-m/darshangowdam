import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaPlus, FaMinus } from 'react-icons/fa'
import './Projects.scss'

const Projects = () => {
  const [showMore, setShowMore] = useState(false)

  const projects = [
    {
      title: 'Cloth Manager',
      description:
        'Inventory tracking system for personal clothing items with analytics and recommendations.',
      github:
        'https://github.com/Darshan-gowda-m/Bit-N-Build-2024-Binary_innovators.git',
      live: 'https://completerepo.onrender.com/home',
    },
    {
      title: 'Weather API',
      description:
        'Real-time weather application with location-based forecasts and severe weather alerts.',
      github: 'https://github.com/Darshan-gowda-m/weather_api.git',
      live: 'https://darshan-gowda-m.github.io/weather_api/',
    },
    {
      title: 'Save One',
      description:
        'Blood donation platform connecting donors with recipients using geolocation services.',
      github: 'https://github.com/Darshan-gowda-m/bloodDonationProject_MERN/',
      live: null,
    },
    {
      title: 'Flight Ticket Management',
      description:
        'Comprehensive airline reservation system with real-time seat availability and pricing.',
      github: 'https://github.com/Darshan-gowda-m/flight_booking_system',
      live: null,
    },
    {
      title: 'Brick Breaker',
      description:
        'Classic arcade game with modern physics, power-ups, and level progression system.',
      github: 'https://github.com/Darshan-gowda-m/brickBreaker.git',
      live: null,
    },
    {
      title: 'Sudoku',
      description:
        'Algorithmically generated puzzles with multiple difficulty levels and solver assistant.',
      github: 'https://github.com/Darshan-gowda-m/suduko.git',
      live: 'https://darshan-gowda-m.github.io/suduko/',
    },
  ]

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="projects-title"
          >
            My <span className="highlight">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="projects-underline"
          />
          <p className="projects-subtitle">
            Explore my latest projects showcasing my skills in web development,
            AI, and problem-solving.
          </p>
        </div>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects
            .slice(0, showMore ? projects.length : 6)
            .map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 25px -5px rgba(255, 0, 79, 0.3)',
                  border: '1px solid rgba(255, 0, 79, 0.3)',
                }}
              >
                <div className="project-image">
                  <div className="image-overlay" />
                  <div className="placeholder-image" />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub className="link-icon" /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt className="link-icon" /> Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {projects.length > 6 && (
          <div className="projects-more">
            <motion.button
              onClick={() => setShowMore(!showMore)}
              className="show-more-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showMore ? (
                <FaMinus className="button-icon" />
              ) : (
                <FaPlus className="button-icon" />
              )}
              {showMore ? 'Show Less Projects' : 'Show More Projects'}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
