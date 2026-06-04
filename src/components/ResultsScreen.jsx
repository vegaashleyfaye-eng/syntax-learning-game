import React, { useState } from 'react'
import LevelUpNotification from './LevelUpNotification'

function ResultsScreen({ answers, score, difficulty, completedChallenge, snakeScore, onRetry, onHome }) {
  const [showNotification, setShowNotification] = useState(completedChallenge)

  const correctAnswers = answers.filter(a => a.correct).length
  const accuracy = Math.round((correctAnswers / 10) * 100)

  let feedback = ''
  if (accuracy === 100) {
    feedback = '🎉 Perfect! You are a syntax master!'
  } else if (accuracy >= 80) {
    feedback = '🌟 Excellent! You have strong syntax knowledge!'
  } else if (accuracy >= 60) {
    feedback = '👍 Good job! Keep practicing to improve!'
  } else if (accuracy >= 40) {
    feedback = '📚 Keep learning! Review the basics and try again!'
  } else {
    feedback = '💪 Don\'t give up! Practice makes perfect!'
  }

  return (
    <>
      <LevelUpNotification 
        difficulty={difficulty}
        show={showNotification}
        onClose={() => setShowNotification(false)}
      />
      
      <div className="screen active">
        <div className="results-content">
          <h2>🎓 Learning Complete!</h2>
          <div className="results-stats">
            <div className="result-stat">
              <span className="result-label">Quiz Score</span>
              <span className="result-value">{score}</span>
            </div>
            <div className="result-stat">
              <span className="result-label">Correct Answers</span>
              <span className="result-value">{correctAnswers}</span>
            </div>
            <div className="result-stat">
              <span className="result-label">Accuracy</span>
              <span className="result-value">{accuracy}%</span>
            </div>
          </div>

          {snakeScore > 0 && (
            <div className="snake-score-display">
              <h3>🐍 Snake Game Score</h3>
              <p>You scored <strong>{snakeScore}</strong> points in the warm-up game!</p>
            </div>
          )}

          {completedChallenge && (
            <div className="challenge-completion">
              <h3>✅ Code Challenges Completed!</h3>
              <p>You've successfully completed all code challenges. Great job!</p>
            </div>
          )}

          <div className="results-feedback">
            <p>{feedback}</p>
          </div>

          <div className="action-buttons">
            <button className="btn btn-primary" onClick={onRetry}>
              Try Again
            </button>
            <button className="btn btn-secondary" onClick={onHome}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResultsScreen
