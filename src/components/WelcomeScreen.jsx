import React, { useState } from 'react'
import GameStartCountdown from './GameStartCountdown'

function WelcomeScreen({ onStartGame }) {
  const [showCountdown, setShowCountdown] = useState(false)
  const [selectedDifficulty, setSelectedDifficulty] = useState(null)

  const handleStartClick = (difficulty) => {
    setSelectedDifficulty(difficulty)
    setShowCountdown(true)
  }

  const handleCountdownComplete = () => {
    if (selectedDifficulty) {
      onStartGame(selectedDifficulty)
      setShowCountdown(false)
      setSelectedDifficulty(null)
    }
  }

  return (
    <>
      <GameStartCountdown 
        show={showCountdown}
        onCountdownComplete={handleCountdownComplete}
      />
      
      <div className="screen active">
        <div className="welcome-content">
          <h2>Welcome to Code Syntax Master!</h2>
          <p>Test your knowledge of programming syntax by selecting the correct code snippets.</p>
          
          <div className="difficulty-selector">
            <h3>Choose Your Level:</h3>
            <button 
              className="difficulty-btn" 
              onClick={() => handleStartClick('beginner')}
            >
              <span>
                🌱 Beginner
                <span className="description">Basic syntax & variables</span>
              </span>
            </button>
            <button 
              className="difficulty-btn" 
              onClick={() => handleStartClick('intermediate')}
            >
              <span>
                🌿 Intermediate
                <span className="description">Functions & loops</span>
              </span>
            </button>
            <button 
              className="difficulty-btn" 
              onClick={() => handleStartClick('advanced')}
            >
              <span>
                🌳 Advanced
                <span className="description">Objects & async</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default WelcomeScreen
