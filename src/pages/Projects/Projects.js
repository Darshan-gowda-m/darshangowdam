import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaPlus, FaMinus } from 'react-icons/fa'
import './Projects.scss'

// Import project images
import clothManagerImg from '../../assets/projects/cloth-manager.jpg'
import weatherApiImg from '../../assets/projects/weather-api.jpg'
import alumniConnectImg from '../../assets/projects/alumni-connect.jpg'
import flightBookingImg from '../../assets/projects/flight-booking.jpg'
import brickBreakerImg from '../../assets/projects/brick-breaker.jpg'
import sudokuImg from '../../assets/projects/sudoku.jpg'

const Projects = () => {
  const [showMore, setShowMore] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      title: 'Cloth Manager',
      description:
        'Inventory tracking system for personal clothing items with analytics and recommendations using computer vision for outfit suggestions.',
      github:
        'https://github.com/Darshan-gowda-m/Bit-N-Build-2024-Binary_innovators.git',
      live: 'https://completerepo.onrender.com/home',
      image: clothManagerImg,
      tags: ['HTML', 'CSS', 'JS', 'Node.js', 'Firebase'],
    },
    {
      title: 'Weather API',
      description:
        'Real-time weather application with 5-day forecasts, severe weather alerts, and location-based recommendations using OpenWeather API.',
      github: 'https://github.com/Darshan-gowda-m/weather_api.git',
      live: 'https://darshan-gowda-m.github.io/weather_api/',
      image: weatherApiImg,
      tags: ['JavaScript', 'API Integration', 'Geolocation'],
    },
    {
      title: 'Alumni Connect',
      description:
        'Professional networking platform for university alumni with job postings, event management, and mentorship programs.',
      github: 'https://github.com/poovarasansivakumar2003/Synapse_QuaJ',
      live: 'https://synapse-quaj-1-9q5o.onrender.com/',
      image: alumniConnectImg,
      tags: ['MERN Stack', 'WebSockets'],
    },
    {
      title: 'Flight Ticket Management',
      description:
        'Comprehensive airline reservation system with real-time seat availability, dynamic pricing, and admin dashboard.',
      github: 'https://github.com/Darshan-gowda-m/flight_booking_system',
      live: 'https://flight-booking-system-c0g3.onrender.com/',
      image: flightBookingImg,
      tags: ['HTML', 'CSS', 'JS', 'Node', 'Express', 'MySQL'],
    },
    {
      title: 'Brick Breaker',
      description:
        'Classic arcade game with modern physics, power-ups, and progressive difficulty levels built with JavaScript Canvas.',
      github: 'https://github.com/Darshan-gowda-m/brickBreaker.git',
      live: null,
      image: brickBreakerImg,
      tags: ['JavaScript', 'HTML5 Canvas', 'Game Development'],
    },
    {
      title: 'Sudoku',
      description:
        'Algorithmically generated puzzles with multiple difficulty levels and solver assistant using backtracking algorithms.',
      github: 'https://github.com/Darshan-gowda-m/suduko.git',
      live: 'https://darshan-gowda-m.github.io/suduko/',
      image: sudokuImg,
      tags: ['HTML', 'Algorithms', 'Recursion'],
    },
  ]

  return (
    <section className="projects" id="projects">
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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="projects-subtitle"
          >
            A collection of my technical projects showcasing full-stack
            development, problem-solving, and innovative solutions.
          </motion.p>
        </div>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {projects
            .slice(0, showMore ? projects.length : 6)
            .map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 25px -5px rgba(255, 0, 79, 0.3)',
                  border: '1px solid rgba(255, 0, 79, 0.3)',
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image-content"
                  />
                  <div className="image-overlay" />
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="link-icon" /> Code
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="link-icon" /> Live
                      </motion.a>
                    )}
                  </div>
                </div>
                {hoveredIndex === index && (
                  <motion.div
                    className="project-hover-effect"
                    layoutId="hoverEffect"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.div>
            ))}
        </motion.div>

        {projects.length > 6 && (
          <div className="projects-more">
            <motion.button
              onClick={() => setShowMore(!showMore)}
              className="show-more-button"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 20px rgba(255, 0, 79, 0.3)',
              }}
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
