import { useEffect, useRef } from 'react'

// A quiet, low-contrast canvas animation: a handful of drifting nodes with
// thin connecting lines when they pass near each other, plus one faint
// traced line reminiscent of a chart trend. Designed to sit behind the hero
// copy without competing with it.
export default function DataBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let width, height, dpr
    let points = []
    let frameId

    const POINT_COUNT = 26
    const LINK_DISTANCE = 130
    const ACCENT = '92, 200, 192' // rgb of --accent, used with alpha

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function seed() {
      points = Array.from({ length: POINT_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.3 + 0.6,
      }))
    }

    function step() {
      ctx.clearRect(0, 0, width, height)

      // faint trend line, drawn once per frame from a fixed noisy path
      ctx.beginPath()
      ctx.strokeStyle = `rgba(${ACCENT}, 0.14)`
      ctx.lineWidth = 1
      const steps = 7
      for (let i = 0; i <= steps; i++) {
        const x = (width / steps) * i
        const y =
          height * 0.62 +
          Math.sin(i * 1.3 + 2) * height * 0.06 -
          i * (height * 0.02)
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.stroke()

      // update + draw points
      for (const p of points) {
        if (!prefersReducedMotion) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${ACCENT}, 0.5)`
        ctx.fill()
      }

      // links between nearby points
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i]
          const b = points[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DISTANCE) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${ACCENT}, ${0.16 * (1 - dist / LINK_DISTANCE)})`
            ctx.lineWidth = 1
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      if (!prefersReducedMotion) {
        frameId = requestAnimationFrame(step)
      }
    }

    resize()
    seed()
    step()

    const handleResize = () => {
      resize()
      seed()
      if (prefersReducedMotion) step()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
