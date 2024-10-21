import React from 'react';
import './SplashScreen.css';

function SplashScreen({ onStart }) {
    return (
        <div className="splash-screen">
            <h1>Welcome to Combat Game!</h1>
            <button onClick={onStart}>Start Game</button>
        </div>
    );
}

export default SplashScreen;
