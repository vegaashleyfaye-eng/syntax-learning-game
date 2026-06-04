import React from 'react'

function QuestionCard({ options, selectedOption, answered, onSelectOption }) {
  const getCorrectIndex = () => {
    return options.findIndex(opt => opt.correct)
  }

  const correctIndex = getCorrectIndex()

  return (
    <div className="options-container">
      {options.map((option, index) => {
        let className = 'option'
        
        if (answered) {
          if (index === selectedOption) {
            className += option.correct ? ' correct' : ' incorrect'
          } else if (index === correctIndex && option.correct) {
            className += ' correct'
          }
        } else if (index === selectedOption) {
          className += ' selected'
        }

        return (
          <div
            key={index}
            className={className}
            onClick={() => onSelectOption(index, option)}
          >
            <div className="option-label">
              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span>{option.text}</span>
            </div>
            <div className="option-code">{option.text}</div>
            {answered && index === selectedOption && (
              <div className="option-feedback">{option.feedback}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default QuestionCard
