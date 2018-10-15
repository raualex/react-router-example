import React from 'react';
import './image-display.css';
import unicornData from './data/unicorn-data.js';
import ImageCard from './ImageCard.js';

const Unicorns = () => {
  const displayUnicorns = unicornData.map((unicorn) => {
    return (
      <ImageCard key={unicorn.id} {...unicorn} />
    )
  })
  return (
    <div className="image-display">
      <h1>I am a UNICORN!</h1>
      { displayUnicorns }
    </div>
  )
}

export default Unicorns;