import { useState, useEffect } from 'react';

function Card({
  image,
  name,
  reset,
  endCurrentStage,
  incrementScore,
  randomizeCards,
}) {
  const [wasClicked, setWasClicked] = useState(false);

  function handleClick() {
    setWasClicked(!wasClicked);
    if (wasClicked) {
      endCurrentStage();
    } else {
      incrementScore();
    }
    randomizeCards();
  }

  useEffect(() => {
    if (reset) {
      setWasClicked(false);
    }
  }, [reset]);

  return (
    <div className='card' key={image} onClick={handleClick}>
      <img src={image} alt={name}></img>
      <p>
        <strong>{name}</strong>
      </p>
    </div>
  );
}

export default Card;
