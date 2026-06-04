import React, { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import SnakeGame from './components/SnakeGame'
import GameScreen from './components/GameScreen'
import CodeChallenge from './components/CodeChallenge'
import ResultsScreen from './components/ResultsScreen'
import Header from './components/Header'
import StatsBar from './components/StatsBar'
import Footer from './components/Footer'

function App() {
  const [gameState, setGameState] = useState({
    screen: 'welcome',
    difficulty: null,
    currentQuestion: 0,
    score: 0,
    streak: 0,
    answers: [],
    completedQuiz: false,
    snakeScore: 0
  })

  const startGame = (difficulty) => {
    setGameState({
      screen: 'snake',
      difficulty,
      currentQuestion: 0,
      score: 0,
      streak: 0,
      answers: [],
      completedQuiz: false,
      snakeScore: 0
    })
  }

  const startQuiz = (snakeScore) => {
    setGameState(prev => ({
      ...prev,
      screen: 'game',
      snakeScore
    }))
  }

  const updateScore = (isCorrect) => {
    setGameState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 10 : prev.score,
      streak: isCorrect ? prev.streak + 1 : 0
    }))
  }

  const nextQuestion = (isCorrect, selectedIndex) => {
    const newAnswers = [...gameState.answers, {
      question: gameState.currentQuestion,
      selected: selectedIndex,
      correct: isCorrect
    }]

    if (gameState.currentQuestion + 1 >= 10) {
      // Quiz complete, move to code challenge
      setGameState(prev => ({
        ...prev,
        screen: 'challenge',
        answers: newAnswers,
        completedQuiz: true
      }))
    } else {
      setGameState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        answers: newAnswers
      }))
    }
  }

  const completeChallenge = () => {
    setGameState(prev => ({
      ...prev,
      screen: 'results'
    }))
  }

  const retryGame = () => {
    startGame(gameState.difficulty)
  }

  const goHome = () => {
    setGameState({
      screen: 'welcome',
      difficulty: null,
      currentQuestion: 0,
      score: 0,
      streak: 0,
      answers: [],
      completedQuiz: false,
      snakeScore: 0
    })
  }

  return (
    <div className="container">
      <Header />
      {gameState.screen !== 'welcome' && gameState.screen !== 'snake' && (
        <StatsBar 
          score={gameState.score} 
          level={gameState.currentQuestion + 1}
          streak={gameState.streak}
        />
      )}
      
      <main className="game-area">
        {gameState.screen === 'welcome' && (
          <WelcomeScreen onStartGame={startGame} />
        )}
        {gameState.screen === 'snake' && (
          <SnakeGame 
            difficulty={gameState.difficulty}
            onGameEnd={startQuiz} 
          />
        )}
        {gameState.screen === 'game' && (
          <GameScreen 
            difficulty={gameState.difficulty}
            currentQuestion={gameState.currentQuestion}
            onUpdateScore={updateScore}
            onNextQuestion={nextQuestion}
          />
        )}
        {gameState.screen === 'challenge' && (
          <CodeChallenge 
            difficulty={gameState.difficulty}
            onComplete={completeChallenge}
            onSkip={() => completeChallenge()}
          />
        )}
        {gameState.screen === 'results' && (
          <ResultsScreen 
            answers={gameState.answers}
            score={gameState.score}
            difficulty={gameState.difficulty}
            completedChallenge={gameState.completedQuiz}
            snakeScore={gameState.snakeScore}
            onRetry={retryGame}
            onHome={goHome}
          />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
