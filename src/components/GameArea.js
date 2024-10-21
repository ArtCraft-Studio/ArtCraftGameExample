import React from 'react';
import HealthBar from './HealthBar';
import GameControls from './GameControls';
import './GameArea.css';

function GameArea({ playerHealth, enemyHealth, onAttack, onHeal, onSpecial }) {
    return (
        <div className="game-area">
            <div className="player">
                <h3>Player</h3>
                <img src="/images/player.png" alt="Player" className="character-image" />
                <HealthBar value={playerHealth} maxValue={100} />
            </div>
            <div className="enemy">
                <h3>Enemy</h3>
                <img src="/images/enemy.png" alt="Enemy" className="character-image" />
                <HealthBar value={enemyHealth} maxValue={100} />
            </div>
            <GameControls onAttack={onAttack} onHeal={onHeal} onSpecial={onSpecial} />
        </div>
    );
}

export default GameArea;
