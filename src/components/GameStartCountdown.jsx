import React, { useState, useEffect } from 'react'

function GameStartCountdown({ show, onCountdownComplete }) {
  const [countdown, setCountdown] = useState(3)
  const [isVisible, setIsVisible] = useState(show)

  useEffect(() => {
    if (!show) {
      setIsVisible(false)
      setCountdown(3)
      return
    }

    setIsVisible(true)
    setCountdown(3)

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          setTimeout(() => {
            setIsVisible(false)
            onCountdownComplete()
          }, 500)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [show, onCountdownComplete])

  if (!isVisible) return null

  return (
    <div className="countdown-overlay">
      <div className="countdown-container">
        <h2>Get Ready!</h2>
        <div className={`countdown-number ${countdown === 0 ? 'go' : ''}`}>
          {countdown === 0 ? 'GO!' : countdown}
        </div>
        <p className="countdown-text">
          {countdown === 0 ? 'Game Starting...' : 'Game starts in...'}
        </p>
      </div>
    </div>
  )
}

export default GameStartCountdown
