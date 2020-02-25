/** Is provided, via props, 
 * an array of objects describing different pokemon, 
 * and renders a sequence of Pokecard components. */

import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

function Pokedex(props) {
  let winMessage = null;

  if (props.isWinner) {
    winMessage = <p className="Pokedex-winner">This hand wins!</p>
  }

  return (
    <div className="Pokedex">
      <h2 className="Pokedex-header">Player</h2>
      <div className="Pokedex-cards">
        {props.pokemon.map(p => <Pokecard pokemon={p} key={p.id} />)}
      </div>
      <h4>Total experience: {props.exp} </h4>
      {winMessage}
    </div>
  );
}

export default Pokedex;