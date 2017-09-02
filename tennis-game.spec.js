function TennisGame() {
    const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
    let playerAScore = 0
    let playerBScore = 0

    this.reset = () => {
        playerAScore = 0
        playerBScore = 0
    }
    
    this.echo = () => {
        return `${scoreString[playerAScore]} - ${scoreString[playerBScore]}`
    }

    this.playerAGetScore = () => {
        playerAScore++
    }

    this.playerBGetScore = () => {
        playerBScore++
    }
}

test('Echo "Love - Love" when press reset button', () => {
    // Arrange
    let app = new TennisGame()

    // Act
    app.reset()
    let result = app.echo()

    // Assert
    expect(result).toBe('Love - Love')
})

test('Echo "Fifteen - Love" when playerA get first score', () => {
    // Arrange
    let app = new TennisGame()
    app.reset()
    app.playerAGetScore()

    // Act
    let result = app.echo()

    // Assert
    expect(result).toBe('Fifteen - Love')
})

test('Echo "Love - Fifteen" when playerB get first score', () => {
    let app = new TennisGame()
    app.reset()
    app.playerBGetScore()

    let result = app.echo()

    expect(result).toBe('Love - Fifteen')
})