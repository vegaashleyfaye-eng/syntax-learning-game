import React, { useState, useEffect } from 'react'
import { gameData } from '../data/gameData'
import QuestionCard from './QuestionCard'

function GameScreen({ difficulty, currentQuestion, onUpdateScore, onNextQuestion }) {
  const [answered, setAnswered] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showHint, setShowHint] = useState(false)

  const questions = gameData[difficulty]
  const question = questions[currentQuestion]

  useEffect(() => {
    setAnswered(false)
    setSelectedOption(null)
    setShowHint(false)
  }, [currentQuestion])

  const handleSelectOption = (index, option) => {
    if (answered) return

    setSelectedOption(index)
    setAnswered(true)
    onUpdateScore(option.correct)

    setTimeout(() => {
      onNextQuestion(option.correct, index)
    }, 2000)
  }

  const handleSkip = () => {
    onNextQuestion(false, -1)
  }

  const handleHint = () => {
    setShowHint(true)
    alert('Hint: ' + question.hint)
  }

  return (
    <div className="screen active">
      <div className="question-container">
        <div className="question-header">
          <span className="question-number">
            Question {currentQuestion + 1}/10
          </span>
          <span className="difficulty-badge">
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </span>
        </div>

        <div className="question-text">
          <h3>{question.question}</h3>
          <p>{question.description}</p>
        </div>

        <div className="learning-tip">
          <strong>💡 Learning Tip:</strong>
          <p>{question.learningTip}</p>
        </div>

        <QuestionCard 
          options={question.options}
          selectedOption={selectedOption}
          answered={answered}
          onSelectOption={handleSelectOption}
        />

        <div className="action-buttons">
          <button 
            className="btn btn-secondary" 
            onClick={handleSkip}
            disabled={answered}
          >
            Skip Question
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={handleHint}
            disabled={answered}
          >
            Get Hint
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameScreen
