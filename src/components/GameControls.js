import React from 'react';
import Button from './Button';
import './GameControls.css';

function GameControls({ onAttack, onHeal, onSpecial }) {
    return (
        <div className="game-controls">
            <Button label="Attack" onClick={onAttack} variant="primary" />
            <Button label="Heal" onClick={onHeal} variant="secondary" />
            <Button label="Special" onClick={onSpecial} variant="special" />
        </div>
    );
}

export default GameControls;
