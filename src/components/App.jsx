import { useState } from 'react';
import Card from './Card';
import Score from './Score';

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    // Pick a remaining element
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

export function App() {
  const [gameOver, setGameOver] = useState(false);
  return (
    <div>
      <Score></Score>
      <div className='board'>
        <Card name='Chowder' src='Chowder.jpeg'></Card>
        <Card name='Mung Daal' src='MungDaal.jpeg'></Card>
      </div>
    </div>
  );
}

export default App;
