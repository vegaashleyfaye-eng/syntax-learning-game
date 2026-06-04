// Sound Manager - Creates sound effects using Web Audio API
class SoundManager {
  constructor() {
    this.audioContext = null
    this.isMuted = false
    this.backgroundOscillators = []
  }

  initAudioContext() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    }
  }

  // Background music - exciting loop
  playBackgroundMusic() {
    if (this.isMuted) return
    this.initAudioContext()
    
    const playMusicLoop = () => {
      const now = this.audioContext.currentTime
      const tempo = 0.3 // Duration of each note
      
      // Create a simple exciting melody
      const notes = [
        { freq: 523, duration: tempo },      // C5
        { freq: 659, duration: tempo },      // E5
        { freq: 784, duration: tempo },      // G5
        { freq: 659, duration: tempo },      // E5
        { freq: 523, duration: tempo * 2 },  // C5 (longer)
        { freq: 587, duration: tempo },      // D5
        { freq: 698, duration: tempo },      // F5
        { freq: 784, duration: tempo * 2 }   // G5 (longer)
      ]
      
      let currentTime = now
      notes.forEach(note => {
        const osc = this.audioContext.createOscillator()
        const gain = this.audioContext.createGain()
        
        osc.type = 'sine'
        osc.connect(gain)
        gain.connect(this.audioContext.destination)
        
        osc.frequency.setValueAtTime(note.freq, currentTime)
        gain.gain.setValueAtTime(0.15, currentTime)
        gain.gain.exponentialRampToValueAtTime(0.01, currentTime + note.duration)
        
        osc.start(currentTime)
        osc.stop(currentTime + note.duration)
        
        this.backgroundOscillators.push(osc)
        currentTime += note.duration
      })
      
      // Loop the music
      setTimeout(() => {
        if (!this.isMuted) {
          playMusicLoop()
        }
      }, (currentTime - now) * 1000)
    }
    
    playMusicLoop()
  }

  stopBackgroundMusic() {
    this.backgroundOscillators.forEach(osc => {
      try {
        osc.stop()
      } catch (e) {
        // Already stopped
      }
    })
    this.backgroundOscillators = []
  }

  // Jump sound - ascending beep with more energy
  playJumpSound() {
    if (this.isMuted) return
    this.initAudioContext()
    
    const now = this.audioContext.currentTime
    const osc = this.audioContext.createOscillator()
    const gain = this.audioContext.createGain()
    
    osc.type = 'square'
    osc.connect(gain)
    gain.connect(this.audioContext.destination)
    
    osc.frequency.setValueAtTime(400, now)
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.15)
    
    gain.gain.setValueAtTime(0.4, now)
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15)
    
    osc.start(now)
    osc.stop(now + 0.15)
  }

  // Score sound - exciting ascending notes
  playScoreSound() {
    if (this.isMuted) return
    this.initAudioContext()
    
    const now = this.audioContext.currentTime
    const notes = [
      { freq: 523, time: 0, duration: 0.1 },      // C5
      { freq: 659, time: 0.1, duration: 0.1 },    // E5
      { freq: 784, time: 0.2, duration: 0.15 }    // G5
    ]
    
    notes.forEach(note => {
      const osc = this.audioContext.createOscillator()
      const gain = this.audioContext.createGain()
      
      osc.type = 'sine'
      osc.connect(gain)
      gain.connect(this.audioContext.destination)
      
      osc.frequency.setValueAtTime(note.freq, now + note.time)
      gain.gain.setValueAtTime(0.4, now + note.time)
      gain.gain.exponentialRampToValueAtTime(0.01, now + note.time + note.duration)
      
      osc.start(now + note.time)
      osc.stop(now + note.time + note.duration)
    })
  }

  // Game over sound - sad descending notes
  playGameOverSound() {
    if (this.isMuted) return
    this.initAudioContext()
    
    const now = this.audioContext.currentTime
    const notes = [
      { freq: 784, time: 0, duration: 0.15 },     // G5
      { freq: 659, time: 0.15, duration: 0.15 },  // E5
      { freq: 523, time: 0.3, duration: 0.3 }     // C5
    ]
    
    notes.forEach(note => {
      const osc = this.audioContext.createOscillator()
      const gain = this.audioContext.createGain()
      
      osc.type = 'sine'
      osc.connect(gain)
      gain.connect(this.audioContext.destination)
      
      osc.frequency.setValueAtTime(note.freq, now + note.time)
      gain.gain.setValueAtTime(0.4, now + note.time)
      gain.gain.exponentialRampToValueAtTime(0.01, now + note.time + note.duration)
      
      osc.start(now + note.time)
      osc.stop(now + note.time + note.duration)
    })
  }

  // Collision sound - error beep
  playCollisionSound() {
    if (this.isMuted) return
    this.initAudioContext()
    
    const now = this.audioContext.currentTime
    const osc = this.audioContext.createOscillator()
    const gain = this.audioContext.createGain()
    
    osc.type = 'square'
    osc.connect(gain)
    gain.connect(this.audioContext.destination)
    
    osc.frequency.setValueAtTime(300, now)
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.2)
    
    gain.gain.setValueAtTime(0.4, now)
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2)
    
    osc.start(now)
    osc.stop(now + 0.2)
  }

  // Victory sound - exciting ascending notes
  playVictorySound() {
    if (this.isMuted) return
    this.initAudioContext()
    
    const now = this.audioContext.currentTime
    const notes = [
      { freq: 523, time: 0, duration: 0.1 },      // C5
      { freq: 659, time: 0.1, duration: 0.1 },    // E5
      { freq: 784, time: 0.2, duration: 0.1 },    // G5
      { freq: 1047, time: 0.3, duration: 0.3 }    // C6 (high note)
    ]
    
    notes.forEach(note => {
      const osc = this.audioContext.createOscillator()
      const gain = this.audioContext.createGain()
      
      osc.type = 'sine'
      osc.connect(gain)
      gain.connect(this.audioContext.destination)
      
      osc.frequency.setValueAtTime(note.freq, now + note.time)
      gain.gain.setValueAtTime(0.4, now + note.time)
      gain.gain.exponentialRampToValueAtTime(0.01, now + note.time + note.duration)
      
      osc.start(now + note.time)
      osc.stop(now + note.time + note.duration)
    })
  }

  toggleMute() {
    this.isMuted = !this.isMuted
    if (this.isMuted) {
      this.stopBackgroundMusic()
    }
    return this.isMuted
  }
}

export default new SoundManager()
