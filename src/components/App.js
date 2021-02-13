import '../App.css';
import Welcome from './Welcome'
import { playerData } from '../data/playerData'
import PlayerList from './PlayerList'
import Favorite from './Favorite'
import React, { useState, useEffect } from 'react'

function App() {
  const [favorites, setFavorites] = useState([])

  const addFavorite = (id) => {
    // console.log('hi mom', id)
    /*
    using the id, find the player object in the playerData array
    take the found player and move it into the favorites array
    */
   const foundPlayer = playerData.find(player => player.id === id )
   console.log('found player', foundPlayer)

   const updatedFavorites = favorites.slice()
  //  favorites.push(foundPlayer)
   updatedFavorites.push(foundPlayer)
   setFavorites(updatedFavorites)
  }
  useEffect(()=> console.log(favorites))
  return (
    <div className="container">
      <Welcome />
      <PlayerList 
        players={playerData} 
        addFavorite={addFavorite}
      />
      <Favorite
        favs={favorites}
      />
    </div>
  );
}

export default App;
