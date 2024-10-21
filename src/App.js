import React, { useState, useEffect } from 'react';
import GameArea from './components/GameArea';
import SplashScreen from './components/SplashScreen';
import GameOverScreen from './components/GameOverScreen';

function App() {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  // Sound effects
  const attackSound = new Audio('/sounds/attack.mp3');
  const healSound = new Audio('/sounds/heal.mp3');
  const specialSound = new Audio('/sounds/special.mp3');

  const handleAttack = () => {
    attackSound.play(); // Play attack sound
    const damage = Math.floor(Math.random() * 20);
    setEnemyHealth((prev) => Math.max(prev - damage, 0));
  };

  const handleHeal = () => {
    healSound.play(); // Play heal sound
    const healAmount = 10;
    setPlayerHealth((prev) => Math.min(prev + healAmount, 100));
  };

  const handleSpecial = () => {
    specialSound.play(); // Play special ability sound
    const specialDamage = Math.floor(Math.random() * 40);
    setEnemyHealth((prev) => Math.max(prev - specialDamage, 0));
  };

  const resetGame = () => {
    setPlayerHealth(100);
    setEnemyHealth(100);
    setIsGameOver(false);
    setIsGameStarted(true);
  };

  useEffect(() => {
    if (playerHealth <= 0 || enemyHealth <= 0) {
      setIsGameOver(true);
    }
  }, [playerHealth, enemyHealth]);

  return (
      <div className="App">
        {!isGameStarted && !isGameOver && (
            <SplashScreen onStart={() => setIsGameStarted(true)} />
        )}
        {isGameStarted && !isGameOver && (
            <GameArea
                playerHealth={playerHealth}
                enemyHealth={enemyHealth}
                onAttack={handleAttack}
                onHeal={handleHeal}
                onSpecial={handleSpecial}
            />
        )}
        {isGameOver && (
            <GameOverScreen onRestart={resetGame} />
        )}
      </div>
  );
}

export default App;
