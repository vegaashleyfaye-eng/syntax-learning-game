import React, { useState, useEffect } from 'react'

function LevelUpNotification({ difficulty, show, onClose }) {
  const [isVisible, setIsVisible] = useState(show)

  useEffect(() => {
    setIsVisible(show)
    if (show) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!isVisible) return null

  const levelInfo = {
    beginner: {
      emoji: '🌱',
      title: 'Beginner Level Complete!',
      message: 'Great start! You\'ve mastered the basics.',
      nextLevel: 'Intermediate',
      color: '#10b981'
    },
    intermediate: {
      emoji: '🌿',
      title: 'Intermediate Level Complete!',
      message: 'Excellent progress! You\'re getting advanced.',
      nextLevel: 'Advanced',
      color: '#f59e0b'
    },
    advanced: {
      emoji: '🌳',
      title: 'Advanced Level Complete!',
      message: 'Outstanding! You\'re a syntax master!',
      nextLevel: 'Master',
      color: '#8b5cf6'
    }
  }

  const info = levelInfo[difficulty]

  return (
    <div className="notification-overlay">
      <div className="level-up-notification" style={{ borderTopColor: info.color }}>
        <div className="notification-emoji">{info.emoji}</div>
        <h2 className="notification-title">{info.title}</h2>
        <p className="notification-message">{info.message}</p>
        <div className="notification-next">
          <span>Next Level:</span>
          <strong>{info.nextLevel}</strong>
        </div>
        <div className="notification-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LevelUpNotification
