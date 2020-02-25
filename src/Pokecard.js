/**Shows a single Pokemon, with their name, image, and type. */
import React from 'react';
import './Pokecard.css';

function Pokecard(props){
  const { id, name, type, base_experience } = props.pokemon; 
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  return (
    <div className="Pokecard">
      <p className="Pokecard-name">{name}</p>
      <img className="Pokecard-image" src={image} />
      <p className="Pokecard-type">Type: {type}</p>
      <p className="Pokecard-experience">EXP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;