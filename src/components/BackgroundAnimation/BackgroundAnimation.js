import React, { useEffect, useRef, useState } from 'react'
import './BackgroundAnimation.scss'

const BackgroundAnimation = ({ darkMode }) => {
  const canvasRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: null, y: null })
  const [clickEffect, setClickEffect] = useState(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Engineering-themed color schemes
    const engineeringPalette = {
      light: {
        primary: '#0055ff',
        secondary: '#ff5500',
        tertiary: '#00aa88',
        accent: '#aa00ff',
        background: '#f8f9fa',
        grid: 'rgba(0, 85, 255, 0.05)',
        mouseEffect: 'rgba(0, 85, 255, 0.15)',
      },
      dark: {
        primary: '#3a86ff',
        secondary: '#ff006e',
        tertiary: '#8338ec',
        accent: '#ffbe0b',
        background: '#121212',
        grid: 'rgba(58, 134, 255, 0.05)',
        mouseEffect: 'rgba(58, 134, 255, 0.15)',
      },
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    // Engineering elements
    const elements = []
    const elementCount = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000
    )

    class EngineeringElement {
      constructor() {
        this.palette = darkMode
          ? engineeringPalette.dark
          : engineeringPalette.light
        this.type = this.randomElementType()
        this.reset()
      }

      randomElementType() {
        const types = ['circuit', 'gear', 'blueprint', 'gridDot', 'sensor']
        return types[Math.floor(Math.random() * types.length)]
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 8 + 4
        this.speedX = Math.random() * 1.5 - 0.75
        this.speedY = Math.random() * 1.5 - 0.75
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = Math.random() * 0.02 - 0.01
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulsePhase = Math.random() * Math.PI * 2
        this.baseSize = this.size
      }

      update(mouseX, mouseY) {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed
        this.size =
          this.baseSize *
          (1 + Math.sin(Date.now() * this.pulseSpeed + this.pulsePhase) * 0.2)

        // Mouse interaction
        if (mouseX !== null && mouseY !== null) {
          const dx = this.x - mouseX
          const dy = this.y - mouseY
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const force = (150 - distance) / 150
            this.x += dx * force * 0.05
            this.y += dy * force * 0.05
          }
        }

        // Boundary checks
        if (this.x < -this.size * 2) this.x = canvas.width + this.size
        if (this.x > canvas.width + this.size * 2) this.x = -this.size
        if (this.y < -this.size * 2) this.y = canvas.height + this.size
        if (this.y > canvas.height + this.size * 2) this.y = -this.size
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)

        switch (this.type) {
          case 'circuit':
            this.drawCircuit()
            break
          case 'gear':
            this.drawGear()
            break
          case 'blueprint':
            this.drawBlueprint()
            break
          case 'gridDot':
            this.drawGridDot()
            break
          case 'sensor':
            this.drawSensor()
            break
        }

        ctx.restore()
      }

      drawCircuit() {
        ctx.strokeStyle = this.palette.primary
        ctx.lineWidth = 1.5
        ctx.fillStyle = darkMode
          ? 'rgba(20, 20, 40, 0.8)'
          : 'rgba(240, 248, 255, 0.8)'

        // Hexagonal circuit
        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
          const angle = (i * 2 * Math.PI) / 6
          ctx.lineTo(this.size * Math.cos(angle), this.size * Math.sin(angle))
        }
        ctx.closePath()
        ctx.fill()
        ctx.stroke()

        // Inner connections
        ctx.beginPath()
        ctx.arc(0, 0, this.size * 0.4, 0, Math.PI * 2)
        ctx.stroke()
      }

      drawGear() {
        const teeth = 8
        const innerRadius = this.size * 0.6
        const outerRadius = this.size

        ctx.fillStyle = this.palette.secondary
        ctx.strokeStyle = darkMode
          ? 'rgba(255, 255, 255, 0.3)'
          : 'rgba(0, 0, 0, 0.3)'
        ctx.lineWidth = 1

        ctx.beginPath()
        for (let i = 0; i < teeth; i++) {
          const angle = (i * 2 * Math.PI) / teeth
          const nextAngle = ((i + 1) * 2 * Math.PI) / teeth

          // Outer tooth
          ctx.lineTo(
            outerRadius * Math.cos(angle - 0.2),
            outerRadius * Math.sin(angle - 0.2)
          )
          ctx.lineTo(
            outerRadius * Math.cos(angle + 0.2),
            outerRadius * Math.sin(angle + 0.2)
          )

          // Inner curve
          ctx.quadraticCurveTo(
            innerRadius * Math.cos(angle),
            innerRadius * Math.sin(angle),
            innerRadius * Math.cos(nextAngle),
            innerRadius * Math.sin(nextAngle)
          )
        }
        ctx.closePath()
        ctx.fill()
        ctx.stroke()

        // Center hole
        ctx.beginPath()
        ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2)
        ctx.fillStyle = this.palette.background
        ctx.fill()
        ctx.stroke()
      }

      drawBlueprint() {
        ctx.strokeStyle = this.palette.tertiary
        ctx.fillStyle = darkMode
          ? 'rgba(0, 170, 136, 0.1)'
          : 'rgba(0, 170, 136, 0.05)'
        ctx.lineWidth = 1.2

        // Crosshair
        ctx.beginPath()
        ctx.moveTo(-this.size, 0)
        ctx.lineTo(this.size, 0)
        ctx.moveTo(0, -this.size)
        ctx.lineTo(0, this.size)
        ctx.stroke()

        // Outer circle
        ctx.beginPath()
        ctx.arc(0, 0, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        // Dotted inner circle
        ctx.setLineDash([2, 2])
        ctx.beginPath()
        ctx.arc(0, 0, this.size * 0.6, 0, Math.PI * 2)
        ctx.stroke()
        ctx.setLineDash([])
      }

      drawGridDot() {
        ctx.fillStyle = this.palette.primary
        ctx.beginPath()
        ctx.arc(0, 0, this.size * 0.5, 0, Math.PI * 2)
        ctx.fill()
      }

      drawSensor() {
        // Glow effect
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 2)
        gradient.addColorStop(0, this.palette.accent)
        gradient.addColorStop(0.7, 'transparent')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(0, 0, this.size * 2, 0, Math.PI * 2)
        ctx.fill()

        // Sensor body
        ctx.fillStyle = this.palette.accent
        ctx.beginPath()
        ctx.arc(0, 0, this.size * 0.8, 0, Math.PI * 2)
        ctx.fill()

        // Rings
        ctx.strokeStyle = this.palette.accent
        ctx.lineWidth = 0.8
        for (let i = 1; i <= 3; i++) {
          ctx.beginPath()
          ctx.arc(0, 0, this.size * 0.3 * i, 0, Math.PI * 2)
          ctx.stroke()
        }
      }
    }

    // Create elements
    for (let i = 0; i < elementCount; i++) {
      elements.push(new EngineeringElement())
    }

    // Mouse handlers
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const handleMouseLeave = () => {
      setMousePos({ x: null, y: null })
    }

    const handleClick = (e) => {
      setClickEffect({
        x: e.clientX,
        y: e.clientY,
        time: Date.now(),
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('click', handleClick)

    // Draw grid
    const drawGrid = () => {
      const gridSize = 60

      ctx.strokeStyle = engineeringPalette[darkMode ? 'dark' : 'light'].grid
      ctx.lineWidth = 0.8

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    // Draw mouse effect
    const drawMouseEffect = () => {
      if (mousePos.x && mousePos.y) {
        ctx.fillStyle =
          engineeringPalette[darkMode ? 'dark' : 'light'].mouseEffect
        ctx.beginPath()
        ctx.arc(mousePos.x, mousePos.y, 50, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Draw click effect
    const drawClickEffect = () => {
      if (clickEffect) {
        const progress = (Date.now() - clickEffect.time) / 500
        if (progress > 1) {
          setClickEffect(null)
          return
        }

        const radius = progress * 200
        const alpha = 0.6 * (1 - progress)

        ctx.strokeStyle = darkMode
          ? `rgba(255, 0, 110, ${alpha})`
          : `rgba(255, 85, 0, ${alpha})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(clickEffect.x, clickEffect.y, radius, 0, Math.PI * 2)
        ctx.stroke()
      }
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = engineeringPalette[darkMode ? 'dark' : 'light'].background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawGrid()
      drawMouseEffect()
      drawClickEffect()

      // Update and draw elements
      elements.forEach((element) => {
        element.update(mousePos.x, mousePos.y)
        element.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('click', handleClick)
      cancelAnimationFrame(animationFrameId)
    }
  }, [darkMode, mousePos, clickEffect])

  return <canvas ref={canvasRef} className="engineering-background" />
}

export default BackgroundAnimation
