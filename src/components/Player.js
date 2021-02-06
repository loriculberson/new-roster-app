function Player(props){
  const playerHobbies = props.hobbies.map((hobby, index) => {
    return <li key={index}>{hobby}</li>
  })

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