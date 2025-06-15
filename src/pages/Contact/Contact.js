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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-header">
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
                    href="mailto:darsangowdam2004@gmail.com"
                    className="info-value"
                  >
                    darsangowdam2004@gmail.com
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
                href="https://drive.google.com/file/d/1OymEeXobnjT_gWrXIjU7Ab-ksXGyLN0J/view?usp=sharing"
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

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="form-success"
              >
                Your message has been sent successfully! I'll get back to you
                soon.
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
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
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
                  className="form-input"
                  placeholder="john@example.com"
                  required
                />
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
                  className="form-textarea"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <span className="submit-loading">
                    <svg
                      className="submit-spinner"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="spinner-circle"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="spinner-path"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="submit-text">
                    <FaPaperPlane className="submit-icon" /> Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
