/** Is provided, via props, 
 * an array of objects describing different pokemon, 
 * and renders a sequence of Pokecard components. */

import React from 'react';
import Pokecard from './Pokecard';

function Pokedex(props) {
  return (
    <div className="Pokedex">
      <h2 className="Pokedex-header">Pokedex</h2>
      <div className="Pokedex-cards">
        {props.pokemon.map(p => <Pokecard pokemon={p} key={p.id} />)}
      </div>
    </div>
  );
}

export default Pokedex;