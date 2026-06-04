import React, { useState } from 'react'
import { codeChallenges } from '../data/gameData'

function CodeChallenge({ difficulty, onComplete, onSkip }) {
  const [currentChallenge, setCurrentChallenge] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [feedback, setFeedback] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [completed, setCompleted] = useState(false)

  const challenges = codeChallenges[difficulty]
  const challenge = challenges[currentChallenge]

  const handleSubmit = () => {
    if (userInput.trim().toLowerCase() === challenge.answer.toLowerCase()) {
      setFeedback('✅ Correct! ' + challenge.explanation)
      setCompleted(true)
      setTimeout(() => {
        if (currentChallenge + 1 >= challenges.length) {
          onComplete()
        } else {
          setCurrentChallenge(currentChallenge + 1)
          setUserInput('')
          setFeedback('')
          setShowHint(false)
          setCompleted(false)
        }
      }, 2000)
    } else {
      setFeedback('❌ Incorrect. Try again!')
    }
  }

  const handleSkip = () => {
    if (currentChallenge + 1 >= challenges.length) {
      onComplete()
    } else {
      setCurrentChallenge(currentChallenge + 1)
      setUserInput('')
      setFeedback('')
      setShowHint(false)
      setCompleted(false)
    }
  }

  const handleHint = () => {
    setShowHint(true)
  }

  return (
    <div className="screen active">
      <div className="code-challenge-container">
        <div className="challenge-header">
          <h2>Code Challenge</h2>
          <span className="challenge-progress">
            {currentChallenge + 1}/{challenges.length}
          </span>
        </div>

        <div className="challenge-content">
          <h3>{challenge.title}</h3>
          <p className="challenge-description">{challenge.description}</p>

          <div className="code-block">
            <code>{challenge.code}</code>
          </div>

          <div className="input-section">
            <label>Fill in the missing code:</label>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="Type your answer here..."
              disabled={completed}
              className="code-input"
              autoFocus
            />
          </div>

          {showHint && (
            <div className="hint-box">
              <strong>💡 Hint:</strong> {challenge.hint}
            </div>
          )}

          {feedback && (
            <div className={`feedback-box ${completed ? 'success' : 'error'}`}>
              {feedback}
            </div>
          )}

          <div className="challenge-buttons">
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={completed || !userInput.trim()}
            >
              Submit Answer
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleHint}
              disabled={completed || showHint}
            >
              Get Hint
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleSkip}
              disabled={completed}
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeChallenge
