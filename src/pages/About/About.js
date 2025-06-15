import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaChess,
  FaBook,
  FaPlus,
  FaPlane,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDatabase,
  FaUserFriends,
  FaLightbulb,
  FaPaintBrush,
  FaClock,
  FaBrain,
  FaComments,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaOm,
} from 'react-icons/fa'
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiReact,
} from 'react-icons/si'
import './About.scss'

const About = () => {
  const [activeTab, setActiveTab] = useState('skills')
  const [showMoreSkills, setShowMoreSkills] = useState(false)

  const skills = [
    {
      name: 'HTML',
      icon: <FaHtml5 className="skill-icon" />,
      color: 'text-orange-500',
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt className="skill-icon" />,
      color: 'text-blue-500',
    },
    {
      name: 'JavaScript',
      icon: <FaJs className="skill-icon" />,
      color: 'text-yellow-400',
    },
    {
      name: 'React',
      icon: <SiReact className="skill-icon" />,
      color: 'text-blue-400',
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs className="skill-icon" />,
      color: 'text-green-500',
    },
    {
      name: 'Express',
      icon: <SiExpress className="skill-icon" />,
      color: 'text-gray-300',
    },
    {
      name: 'Python',
      icon: <FaPython className="skill-icon" />,
      color: 'text-blue-400',
    },
    {
      name: 'Java',
      icon: <FaJava className="skill-icon" />,
      color: 'text-red-500',
    },
    {
      name: 'C++',
      icon: <SiCplusplus className="skill-icon" />,
      color: 'text-blue-400',
    },
    { name: 'C', icon: <SiC className="skill-icon" />, color: 'text-blue-300' },
    {
      name: 'MongoDB',
      icon: <SiMongodb className="skill-icon" />,
      color: 'text-green-300',
    },
    {
      name: 'MySQL',
      icon: <SiMysql className="skill-icon" />,
      color: 'text-blue-300',
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql className="skill-icon" />,
      color: 'text-blue-500',
    },
    {
      name: 'Database',
      icon: <FaDatabase className="skill-icon" />,
      color: 'text-blue-400',
    },
  ]

  const softSkills = [
    { name: 'Teamwork', icon: <FaUserFriends className="skill-icon" /> },
    { name: 'Problem-Solving', icon: <FaLightbulb className="skill-icon" /> },
    { name: 'Creativity', icon: <FaPaintBrush className="skill-icon" /> },
    { name: 'Time Management', icon: <FaClock className="skill-icon" /> },
    { name: 'Communication', icon: <FaComments className="skill-icon" /> },
    { name: 'Critical Thinking', icon: <FaBrain className="skill-icon" /> },
  ]

  return (
    <section className="about">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-header"
        >
          <h2 className="about-title">
            About <span className="highlight">Me</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-underline"
          />
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-profile"
          >
            <motion.div
              className="profile-image-container"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="profile-image">
                <div className="profile-initials">DG</div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="profile-description"
            >
              I'm an enthusiastic engineering student pursuing Information
              Science at UVCE Bengaluru with a CGPA of 9.71. My journey has
              fueled my passion for technology and innovation, constantly
              seeking opportunities to expand my skills in this dynamic field.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="profile-info"
            >
              <h3 className="info-title">Personal Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">Darshan Gowda M</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <div className="info-emails">
                    <span className="info-value">
                      darsangowdam2004@gmail.com
                    </span>
                    <span className="info-value">darshugowda200@gmail.com</span>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-label"> Place</span>
                  <span className="info-value">Bengaluru</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Hobbies:</span>
                  <div className="info-hobbies">
                    <div className="hobby-item">
                      <FaOm className="hobby-icon" />
                      <span className="hobby-name">Meditation</span>
                    </div>
                    <div className="hobby-item">
                      <FaChess className="hobby-icon" />
                      <span className="hobby-name">Chess</span>
                    </div>
                    <div className="hobby-item">
                      <FaBook className="hobby-icon" />
                      <span className="hobby-name">Reading</span>
                    </div>
                    <div className="hobby-item">
                      <FaPlane className="hobby-icon" />
                      <span className="hobby-name">Traveling</span>
                    </div>
                    {/* <div className="hobby-item">
                      <FaCamera className="hobby-icon" />
                      <span className="hobby-name">Photography</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-details"
          >
            <motion.div
              className="tabs-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {['skills', 'experience', 'education', 'certifications'].map(
                (tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`tab-button ${
                      activeTab === tab ? 'active' : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tab === 'skills' && <FaHtml5 className="tab-icon" />}
                    {tab === 'experience' && (
                      <FaBriefcase className="tab-icon" />
                    )}
                    {tab === 'education' && (
                      <FaGraduationCap className="tab-icon" />
                    )}
                    {tab === 'certifications' && (
                      <FaCertificate className="tab-icon" />
                    )}
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </motion.button>
                )
              )}
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              className="tab-content"
            >
              {activeTab === 'skills' && (
                <div className="skills-content">
                  <h3 className="content-title">Technical Skills</h3>
                  <motion.div
                    className="skills-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {skills
                      .slice(0, showMoreSkills ? skills.length : 8)
                      .map((skill, index) => (
                        <motion.div
                          key={index}
                          className="skill-card"
                          whileHover={{
                            y: -5,
                            boxShadow: '0 10px 25px -5px rgba(255, 0, 79, 0.3)',
                            border: '1px solid rgba(255, 0, 79, 0.3)',
                          }}
                        >
                          <div className="skill-icon-container">
                            {skill.icon}
                          </div>
                          <span className="skill-name">{skill.name}</span>
                        </motion.div>
                      ))}
                  </motion.div>

                  <motion.button
                    onClick={() => setShowMoreSkills(!showMoreSkills)}
                    className="show-more-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPlus className="button-icon" />
                    {showMoreSkills ? 'Show Less Skills' : 'Show More Skills'}
                  </motion.button>

                  <h3 className="content-title soft-skills-title">
                    Soft Skills
                  </h3>
                  <motion.div
                    className="soft-skills-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {softSkills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="soft-skill-card"
                        whileHover={{
                          y: -5,
                          boxShadow: '0 10px 25px -5px rgba(255, 0, 79, 0.3)',
                          border: '1px solid rgba(255, 0, 79, 0.3)',
                        }}
                      >
                        <div className="skill-icon-container">{skill.icon}</div>
                        <span className="skill-name">{skill.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="experience-content">
                  <h3 className="content-title">Experience</h3>
                  <div className="timeline">
                    <motion.div
                      className="timeline-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="timeline-dot"></div>
                      <h4 className="timeline-title">Soft Skills Intern</h4>
                      <p className="timeline-company">Infosys BPM Limited</p>
                      <p className="timeline-date">Jan 2024 - Jan 2024</p>
                      <p className="timeline-description">
                        Developed soft skills through intensive training program
                        focused on communication, teamwork, and professional
                        development.
                      </p>
                    </motion.div>

                    <motion.div
                      className="timeline-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="timeline-dot"></div>
                      <h4 className="timeline-title">AI Manual Tester</h4>
                      <p className="timeline-date">Sept 2024 - Oct 2024</p>
                      <p className="timeline-description">
                        Performed comprehensive testing of AI models,
                        identifying edge cases and improving model robustness
                        through systematic evaluation.
                      </p>
                    </motion.div>
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="education-content">
                  <h3 className="content-title">Education</h3>
                  <div className="timeline">
                    <motion.div
                      className="timeline-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="timeline-dot"></div>
                      <h4 className="timeline-title">
                        Information Science and Engineering
                      </h4>
                      <p className="timeline-company">UVCE, Bengaluru</p>
                      <p className="timeline-date">
                        2022 - Current | CGPA: 9.71
                      </p>
                      <p className="timeline-description">
                        Focused on AI/ML, data structures, algorithms, and
                        full-stack development.
                      </p>
                    </motion.div>

                    <motion.div
                      className="timeline-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="timeline-dot"></div>
                      <h4 className="timeline-title">PUC</h4>
                      <p className="timeline-company">
                        KMWA Independent PU College
                      </p>
                      <p className="timeline-date">
                        2020 - 2022 | Percentage: 97%
                      </p>
                    </motion.div>

                    <motion.div
                      className="timeline-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="timeline-dot"></div>
                      <h4 className="timeline-title">10th Standard</h4>
                      <p className="timeline-company">Mount Senoria School</p>
                      <p className="timeline-date">
                        2019 - 2020 | Percentage: 96%
                      </p>
                    </motion.div>
                  </div>
                </div>
              )}

              {activeTab === 'certifications' && (
                <div className="certifications-content">
                  <h3 className="content-title">Certifications</h3>
                  <ul className="certifications-list">
                    <motion.li
                      className="certification-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span className="certification-bullet">•</span>
                      <div>
                        <span className="certification-name">
                          Introduction to Artificial Intelligence - IBM
                        </span>
                        <p className="certification-description">
                          Fundamentals of AI concepts and applications
                        </p>
                      </div>
                    </motion.li>
                    <motion.li
                      className="certification-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="certification-bullet">•</span>
                      <div>
                        <span className="certification-name">
                          Professional English - Enguru
                        </span>
                        <p className="certification-description">
                          Advanced business communication skills
                        </p>
                      </div>
                    </motion.li>
                    <motion.li
                      className="certification-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="certification-bullet">•</span>
                      <div>
                        <span className="certification-name">
                          Introduction to Cyber Security - Udemy
                        </span>
                        <p className="certification-description">
                          Cybersecurity fundamentals and best practices
                        </p>
                      </div>
                    </motion.li>
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
