import { useState } from 'react';
import Card from './Card.jsx';

function Board({ reset, endCurrentStage, incrementScore }) {
  const cardProps = [
    { image: 'Chowder.jpeg', name: 'Chowder' },
    { image: 'MungDaal.jpeg', name: 'Mung Daal' },
    { image: 'Chestnut.jpeg', name: 'Chestnut' },
    { image: 'Cinnamini.jpeg', name: 'Cinnamini' },
    { image: 'Endive.jpeg', name: 'Endive' },
    { image: 'Gargonzola.jpeg', name: 'Gargonzola' },
    { image: 'Gazpacho.jpeg', name: 'Gazpacho' },
    { image: 'Panini.png', name: 'Panini' },
    { image: 'Shnitzel.jpeg', name: 'Shnitzel' },
    { image: 'Truffles.png', name: 'Truffles' },
  ];

  const [positions, setPositions] = useState(
    cardProps.map((value, index) => index)
  );

  function shuffle(array) {
    let shuffledArray = array;
    let currentIndex = array.length;

    while (currentIndex != 0) {
      // Pick an element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[currentIndex],
      ];
    }
    return shuffledArray;
  }

  function shuffleCardPositions() {
    setPositions(shuffle(positions));
  }

  return (
    <>
      {positions.map((position) => {
        return (
          <Card
            key={cardProps[position].name}
            image={cardProps[position].image}
            name={cardProps[position].name}
            reset={reset}
            endCurrentStage={endCurrentStage}
            incrementScore={incrementScore}
            randomizeCards={shuffleCardPositions}
          />
        );
      })}
    </>
  );
}

export default Board;
