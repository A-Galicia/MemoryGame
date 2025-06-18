function Score({ score, bestScore }) {
  return (
    <div className='score'>
      <div>
        <h1>Chowder Memory Card Game</h1>
        <p>Don't click on an image twice!</p>
      </div>
      <div>
        <p> Score: {score}</p>
        <p>High Score: {bestScore}</p>
      </div>
    </div>
  );
}

export default Score;
