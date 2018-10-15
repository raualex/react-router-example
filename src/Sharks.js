import React from 'react';
import './image-display.css';
import sharkData from './data/shark-data.js';
import ImageCard from './ImageCard.js';

const Sharks = () => {
  const sharkPics = sharkData.map((shark) => {
    return (
      <ImageCard key={shark.id} {...shark} />
    )
  })

  return (
    <div className="image-display">
      <h1>I am a SHARK!</h1>
      { sharkPics }
    </div>
  )
}

export default Sharks;