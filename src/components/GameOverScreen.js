import React from 'react';
import './GameOverScreen.css';

function GameOverScreen({ onRestart }) {
    return (
        <div className="game-over-screen">
            <h1>Game Over</h1>
            <button onClick={onRestart}>Play Again</button>
        </div>
    );
}

export default GameOverScreen;
