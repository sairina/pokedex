/**Shows a single Pokemon, with their name, image, and type. */
import React from 'react';
import './Pokecard.css';

function Pokecard(props) {
  const { id, name, type, base_experience } = props.pokemon;
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  
  return (
    <div className="Pokecard">
      <div className="Pokecard-name">{name}</div>
      <img className="Pokecard-image" src={image} />
      <div className="Pokecard-details">Type: {type}</div>
      <div className="Pokecard-details">EXP: {base_experience}</div>
    </div>
  );
}

export default Pokecard;