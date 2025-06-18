import { useState } from 'react';
import Board from './Board';
import Score from './Score';

export function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [reset, setReset] = useState(true);

  const endCurrentStage = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
    setReset(true);
  };

  const incrementScore = () => {
    setScore(() => score + 1);
    setReset(false);
  };

  return (
    <div className='game'>
      <Score score={score} bestScore={bestScore} />
      <div className='board'>
        <Board
          reset={reset}
          endCurrentStage={endCurrentStage}
          incrementScore={incrementScore}
        />
      </div>
    </div>
  );
}

export default App;
