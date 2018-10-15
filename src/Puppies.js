import React from 'react';
import './image-display.css';
import puppyData from './data/puppy-data.js';
import ImageCard from './ImageCard.js';

const Puppies = () => {
  const puppyPics = puppyData.map((puppy) => {
    return (
      <ImageCard key={puppy.id} {...puppy} />
    )
  })

  return (
    <div className="image-display">
      <h1>I am a PUPPY!</h1>
      { puppyPics }
    </div>
  )
}

export default Puppies;