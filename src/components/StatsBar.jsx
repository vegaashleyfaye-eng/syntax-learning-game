import React from 'react'

function StatsBar({ score, level, streak }) {
  return (
    <div className="stats-bar">
      <div className="stat">
        <span className="label">Score:</span>
        <span className="value">{score}</span>
      </div>
      <div className="stat">
        <span className="label">Level:</span>
        <span className="value">{level}</span>
      </div>
      <div className="stat">
        <span className="label">Streak:</span>
        <span className="value">{streak}</span>
      </div>
    </div>
  )
}

export default StatsBar
