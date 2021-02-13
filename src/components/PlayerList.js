import Player from "./Player";

function PlayerList(props) {

  // create a list of Player components
  const allPlayers = props.players.map((player, index) => {
    return (
        <Player 
          id={player.id}
          key={index}
          firstName={player.firstName} 
          lastName={player.lastName} 
          jersey={player.jerseyNumber}
          hobbies={player.hobbies}
          addFav={props.addFavorite}
        />
      )
  });

  return <div>{allPlayers}</div>;
}

export default PlayerList;
