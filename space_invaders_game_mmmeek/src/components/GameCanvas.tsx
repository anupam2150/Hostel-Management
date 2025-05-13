import React, { useEffect, useRef, useState } from 'react';

const GameCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Game setup
    const player = { x: canvas.width / 2 - 25, y: canvas.height - 50, width: 50, height: 50 };
    const bullets: { x: number, y: number }[] = [];
    const enemies: { x: number, y: number, alive: boolean }[] = [];
    let animationFrameId: number;

    // Create enemies
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 8; col++) {
        enemies.push({
          x: col * 60 + 30,
          y: row * 50 + 50,
          alive: true
        });
      }
    }

    // Game loop
    const gameLoop = () => {
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw player
      ctx.fillStyle = '#3b82f6';
      ctx.fillRect(player.x, player.y, player.width, player.height);

      // Draw bullets
      ctx.fillStyle = '#ef4444';
      bullets.forEach((bullet, index) => {
        bullet.y -= 5;
        ctx.fillRect(bullet.x, bullet.y, 5, 10);
        
        // Remove bullet if off screen
        if (bullet.y < 0) {
          bullets.splice(index, 1);
        }
      });

      // Draw enemies
      ctx.fillStyle = '#10b981';
      enemies.forEach((enemy, index) => {
        if (enemy.alive) {
          ctx.fillRect(enemy.x, enemy.y, 40, 30);
          
          // Check for collision with bullets
          bullets.forEach((bullet, bulletIndex) => {
            if (
              bullet.x > enemy.x &&
              bullet.x < enemy.x + 40 &&
              bullet.y > enemy.y &&
              bullet.y < enemy.y + 30
            ) {
              enemy.alive = false;
              bullets.splice(bulletIndex, 1);
              setScore(prev => prev + 10);
            }
          });
        }
      });

      // Check for game over
      if (enemies.every(enemy => !enemy.alive)) {
        setGameOver(true);
        return;
      }

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    // Start game loop
    animationFrameId = requestAnimationFrame(gameLoop);

    // Handle keyboard input
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && player.x > 0) {
        player.x -= 10;
      } else if (e.key === 'ArrowRight' && player.x < canvas.width - player.width) {
        player.x += 10;
      } else if (e.key === ' ') {
        bullets.push({ x: player.x + player.width / 2 - 2.5, y: player.y });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        className="border-2 border-gray-200 rounded-lg"
      />
      <div className="text-xl font-bold">
        Score: {score}
      </div>
      {gameOver && (
        <div className="text-2xl font-bold text-green-600">
          You Win!
        </div>
      )}
    </div>
  );
};

export default GameCanvas;
