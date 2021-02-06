import Player from "./Player";

function PlayerList(props) {
  console.log("props", props);

  // create a list of Player components
  const allPlayers = props.players.map((player) => {
    return (
        <Player 
          firstName={player.firstName} 
          jersey={player.jerseyNumber}
          hobbies={player.hobbies}
        />
      )
  });

  return <div>{allPlayers}</div>;
}

export default PlayerList;
