import React from 'react';
import { Link } from 'react-router-dom';

const ImageCard = ({ id, name, image, bio, type }) => {

  return (
    <Link to={`/${type}/${id}`} >
      <img src={image} alt={name} className="app-img" />
    </Link>
  )
}

export default ImageCard;