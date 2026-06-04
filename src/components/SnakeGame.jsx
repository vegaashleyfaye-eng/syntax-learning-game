import React, { useState, useEffect, useRef } from 'react'
import soundManager from '../utils/soundManager'

function SnakeGame({ onGameEnd, difficulty }) {
  const canvasRef = useRef(null)
  const [gameActive, setGameActive] = useState(true)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [highScore, setHighScore] = useState(localStorage.getItem(`flappyBirdHighScore_${difficulty}`) || 0)
  const [isMuted, setIsMuted] = useState(false)

  const gameState = useRef({
    birdY: 175,
    birdVelocity: 0,
    pipes: [],
    score: 0,
    gameOver: false,
    frameCount: 0,
    obstacleOffsets: {}
  })

  const CANVAS_WIDTH = 400
  const CANVAS_HEIGHT = 400
  const BIRD_SIZE = 20
  const PIPE_WIDTH = 60
  
  // Difficulty-based settings
  const difficultySettings = {
    beginner: {
      PIPE_GAP: 120,
      GRAVITY: 0.4,
      JUMP_STRENGTH: -5,
      PIPE_SPEED: 2,
      PIPE_SPAWN_RATE: 100
    },
    intermediate: {
      PIPE_GAP: 100,
      GRAVITY: 0.5,
      JUMP_STRENGTH: -6,
      PIPE_SPEED: 3,
      PIPE_SPAWN_RATE: 85
    },
    advanced: {
      PIPE_GAP: 80,
      GRAVITY: 0.6,
      JUMP_STRENGTH: -6.5,
      PIPE_SPEED: 4,
      PIPE_SPAWN_RATE: 70
    }
  }

  const settings = difficultySettings[difficulty] || difficultySettings.beginner
  const PIPE_GAP = settings.PIPE_GAP
  const GRAVITY = settings.GRAVITY
  const JUMP_STRENGTH = settings.JUMP_STRENGTH
  const PIPE_SPEED = settings.PIPE_SPEED
  const PIPE_SPAWN_RATE = settings.PIPE_SPAWN_RATE

  // Draw game
  const draw = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const state = gameState.current

    // Clear canvas with sky gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT)
    gradient.addColorStop(0, '#87CEEB')
    gradient.addColorStop(1, '#E0F6FF')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // Draw ground
    ctx.fillStyle = '#90EE90'
    ctx.fillRect(0, CANVAS_HEIGHT - 40, CANVAS_WIDTH, 40)

    // Draw pipes
    ctx.fillStyle = '#228B22'
    state.pipes.forEach(pipe => {
      // Top pipe
      ctx.fillRect(pipe.x, 0, PIPE_WIDTH, pipe.topHeight)
      // Bottom pipe
      ctx.fillRect(pipe.x, pipe.topHeight + PIPE_GAP, PIPE_WIDTH, CANVAS_HEIGHT - pipe.topHeight - PIPE_GAP - 40)
      
      // Draw obstacles based on difficulty
      if (difficulty === 'intermediate') {
        // Draw snakes 🐍 moving up and down on the sides
        ctx.font = '16px Arial'
        const snakeOffset = Math.sin(state.frameCount * 0.05) * 40
        ctx.fillText('🐍', pipe.x - 25, pipe.topHeight + PIPE_GAP / 2 + snakeOffset)  // Left side
        ctx.fillText('🐍', pipe.x + PIPE_WIDTH + 10, pipe.topHeight + PIPE_GAP / 2 - snakeOffset)  // Right side
      } else if (difficulty === 'advanced') {
        // Draw falling objects ⚡ and 🔗 moving up and down on sides
        ctx.font = '14px Arial'
        const obstacleOffset = Math.sin(state.frameCount * 0.04) * 45
        ctx.fillText('⚡', pipe.x - 28, pipe.topHeight + PIPE_GAP / 2 + obstacleOffset)  // Left side
        ctx.fillText('🔗', pipe.x + PIPE_WIDTH + 12, pipe.topHeight + PIPE_GAP / 2 - obstacleOffset)  // Right side
      }
    })

    // Draw bird (emoji style) - facing right
    ctx.font = '24px Arial'
    ctx.save()
    ctx.translate(CANVAS_WIDTH / 2, state.birdY)
    ctx.scale(-1, 1) // Flip horizontally to face right
    ctx.rotate(state.birdVelocity * 0.05)
    ctx.fillText('🐦', -12, 12)
    ctx.restore()
  }

  // Update game
  const update = () => {
    const state = gameState.current

    // Apply gravity
    state.birdVelocity += GRAVITY
    state.birdY += state.birdVelocity

    // Check ground collision
    if (state.birdY + BIRD_SIZE > CANVAS_HEIGHT - 40) {
      endGame()
      return
    }

    // Check ceiling collision
    if (state.birdY < 0) {
      endGame()
      return
    }

    // Move pipes
    state.pipes = state.pipes.filter(pipe => pipe.x > -PIPE_WIDTH)
    state.pipes.forEach(pipe => {
      pipe.x -= PIPE_SPEED
    })

    // Generate new pipes
    state.frameCount++
    if (state.frameCount % PIPE_SPAWN_RATE === 0) {
      const topHeight = Math.random() * (CANVAS_HEIGHT - PIPE_GAP - 100) + 50
      state.pipes.push({
        x: CANVAS_WIDTH,
        topHeight: topHeight,
        scored: false
      })
    }

    // Check pipe collisions and scoring
    state.pipes.forEach(pipe => {
      // Check collision with more lenient hitbox (smaller collision area)
      if (
        CANVAS_WIDTH / 2 + 8 > pipe.x &&
        CANVAS_WIDTH / 2 - 8 < pipe.x + PIPE_WIDTH &&
        (state.birdY + 4 < pipe.topHeight || state.birdY + 16 > pipe.topHeight + PIPE_GAP)
      ) {
        endGame()
      }

      // Check obstacle collisions for intermediate (snakes)
      if (difficulty === 'intermediate') {
        const snakeOffset = Math.sin(state.frameCount * 0.05) * 40
        const snakeLeftX = pipe.x - 25
        const snakeLeftY = pipe.topHeight + PIPE_GAP / 2 + snakeOffset
        const snakeRightX = pipe.x + PIPE_WIDTH + 10
        const snakeRightY = pipe.topHeight + PIPE_GAP / 2 - snakeOffset
        
        if (
          (Math.abs(CANVAS_WIDTH / 2 - snakeLeftX) < 18 &&
            Math.abs(state.birdY - snakeLeftY) < 18) ||
          (Math.abs(CANVAS_WIDTH / 2 - snakeRightX) < 18 &&
            Math.abs(state.birdY - snakeRightY) < 18)
        ) {
          endGame()
        }
      }

      // Check obstacle collisions for advanced (lightning and chains)
      if (difficulty === 'advanced') {
        const obstacleOffset = Math.sin(state.frameCount * 0.04) * 45
        const lightningX = pipe.x - 28
        const lightningY = pipe.topHeight + PIPE_GAP / 2 + obstacleOffset
        const chainX = pipe.x + PIPE_WIDTH + 12
        const chainY = pipe.topHeight + PIPE_GAP / 2 - obstacleOffset

        if (
          (Math.abs(CANVAS_WIDTH / 2 - lightningX) < 15 &&
            Math.abs(state.birdY - lightningY) < 15) ||
          (Math.abs(CANVAS_WIDTH / 2 - chainX) < 15 &&
            Math.abs(state.birdY - chainY) < 15)
        ) {
          endGame()
        }
      }

      // Check scoring
      if (!pipe.scored && pipe.x + PIPE_WIDTH < CANVAS_WIDTH / 2) {
        pipe.scored = true
        state.score += 10
        setScore(state.score)
        soundManager.playScoreSound()
      }
    })
  }

  const endGame = () => {
    setGameActive(false)
    setGameOver(true)
    soundManager.playGameOverSound()

    const finalScore = gameState.current.score
    if (finalScore > parseInt(highScore)) {
      setHighScore(finalScore)
      localStorage.setItem(`flappyBirdHighScore_${difficulty}`, finalScore)
    }
  }

  const resetGame = () => {
    gameState.current = {
      birdY: 175,
      birdVelocity: 0,
      pipes: [],
      score: 0,
      gameOver: false,
      frameCount: 0,
      obstacleOffsets: {}
    }
    setScore(0)
    setGameOver(false)
    setGameActive(true)
  }

  // Game loop
  useEffect(() => {
    if (!gameActive) return

    const gameLoop = setInterval(() => {
      update()
      draw()
    }, 30)

    return () => clearInterval(gameLoop)
  }, [gameActive])

  // Initial draw
  useEffect(() => {
    draw()
    soundManager.playBackgroundMusic()
    
    return () => {
      soundManager.stopBackgroundMusic()
    }
  }, [])

  // Keyboard/Click controls
  useEffect(() => {
    const handleJump = (e) => {
      if (!gameActive) return
      if (e.key === ' ' || e.key === 'Enter' || e.type === 'click') {
        gameState.current.birdVelocity = JUMP_STRENGTH
        soundManager.playJumpSound()
        e.preventDefault()
      }
    }

    window.addEventListener('keydown', handleJump)
    const canvas = canvasRef.current
    if (canvas) {
      canvas.addEventListener('click', handleJump)
    }

    return () => {
      window.removeEventListener('keydown', handleJump)
      if (canvas) {
        canvas.removeEventListener('click', handleJump)
      }
    }
  }, [gameActive])

  return (
    <div className="screen active">
      <div className="snake-game-container">
        <div className="game-header">
          <h2>🐦 Flappy Bird</h2>
          <p>Help the bird fly through the pipes! Warm up before the challenges!</p>
        </div>

        <div className="game-stats">
          <div className="game-stat">
            <span>Score</span>
            <strong>{score}</strong>
          </div>
          <div className="game-stat">
            <span>High Score</span>
            <strong>{highScore}</strong>
          </div>
        </div>

        <div className="game-canvas-wrapper">
          <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            className="snake-canvas"
          />
        </div>

        <div className="game-controls">
          <p className="controls-info">
            Press <strong>SPACE</strong>, <strong>ENTER</strong>, or <strong>CLICK</strong> to make the bird jump!
          </p>
          <button 
            className="mute-btn"
            onClick={() => {
              const muted = soundManager.toggleMute()
              setIsMuted(muted)
            }}
          >
            {isMuted ? '🔇 Unmute' : '🔊 Mute'}
          </button>
        </div>

        {gameOver && (
          <div className="game-over-modal">
            <div className="game-over-content">
              <h3>Game Over!</h3>
              <p>Final Score: <strong>{score}</strong></p>
              {score > parseInt(highScore) - 10 && score !== 0 && (
                <p className="new-record">🏆 New High Score!</p>
              )}
              <div className="game-over-buttons">
                <button className="btn btn-primary" onClick={resetGame}>
                  Play Again
                </button>
                <button className="btn btn-secondary" onClick={() => onGameEnd(score)}>
                  Start Challenges
                </button>
              </div>
            </div>
          </div>
        )}

        {!gameOver && (
          <div className="action-buttons">
            <button className="btn btn-secondary" onClick={() => onGameEnd(score)}>
              Skip to Challenges
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SnakeGame
