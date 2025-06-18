import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from 'react-icons/fa'
import './Contact.scss'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = 'Name is required'
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) errors.message = 'Message is required'
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    const { name, email, message } = formData
    const subject = `Message from ${name} (via Portfolio)`
    const body = `Hi Darshan,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`

    // Open Gmail compose window
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=darshangowdam2004@gmail.com&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
      '_blank'
    )

    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })

    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <br />
          <br />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-title"
          >
            Get In <span className="highlight">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-underline"
          />
          <p className="contact-subtitle">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <h3 className="info-title">Contact Information</h3>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope className="icon" />
                </div>
                <div className="info-details">
                  <h4 className="info-label">Email</h4>
                  <a
                    href="mailto:darshangowdam2004@gmail.com"
                    className="info-value"
                  >
                    darshangowdam2004@gmail.com
                  </a>
                  <a
                    href="mailto:darshugowda200@gmail.com"
                    className="info-value"
                  >
                    darshugowda200@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaPhone className="icon" />
                </div>
                <div className="info-details">
                  <h4 className="info-label">Phone</h4>
                  <a href="tel:6362437272" className="info-value">
                    +91 6362437272
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt className="icon" />
                </div>
                <div className="info-details">
                  <h4 className="info-label">Location</h4>
                  <p className="info-value">Bengaluru, India</p>
                </div>
              </div>
            </div>

            <div className="info-social">
              <h4 className="social-title">Connect with me</h4>
              <div className="social-links">
                <a
                  href="https://github.com/Darshan-gowda-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub className="social-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/darshan-gowda-m-gowda-m-31361b260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin className="social-icon" />
                </a>
              </div>
            </div>

            <div className="info-resume">
              <a
                href="https://drive.google.com/file/d/1v5QQjk8UKAWkBYPc057bWyADiBte2IhZ/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-form-container"
          >
            <h3 className="form-title">Send me a message</h3>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="form-success"
              >
                Thank you! Your email client should open shortly. If it doesn't,
                please email me directly at darshangowdam2004@gmail.com
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${formErrors.name ? 'error' : ''}`}
                  placeholder="John Doe"
                />
                {formErrors.name && (
                  <span className="error-message">{formErrors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${formErrors.email ? 'error' : ''}`}
                  placeholder="john@example.com"
                />
                {formErrors.email && (
                  <span className="error-message">{formErrors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`form-textarea ${
                    formErrors.message ? 'error' : ''
                  }`}
                  placeholder="Write your message here..."
                ></textarea>
                {formErrors.message && (
                  <span className="error-message">{formErrors.message}</span>
                )}
              </div>

              <motion.button
                type="submit"
                className="form-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="submit-text">
                  <FaPaperPlane className="submit-icon" /> Send Message
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
