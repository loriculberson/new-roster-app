function Player(props){
  const playerHobbies = props.hobbies.length
            ? props.hobbies.map(hobby => {
              return <li key={props.id}>{hobby}</li>
            }) 
            : <p>None listed</p>

  return (
    <>
      <h2>{props.firstName}</h2>
      <p>jersey number is {props.jersey}</p>
      {playerHobbies}
    </>
  )
}

export default Player;

//player name h3
//add list of hobbies under each player