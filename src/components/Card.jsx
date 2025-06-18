function Card({ src, name }) {
  return (
    <div className='card'>
      <img src={src} />
      <p>{name}</p>
    </div>
  );
}

export default Card;
