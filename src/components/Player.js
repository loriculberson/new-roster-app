function Player(props){
  const playerHobbies = props.hobbies.length
            ? props.hobbies.map(hobby => {
              return <li key={props.id}>{hobby}</li>
            }) 
            : <p>None listed</p>

  return (
    <>
      <h4>{props.firstName} {props.lastName}</h4>
      <p>jersey number is {props.jersey}</p>
      {playerHobbies}
      <button onClick={() => props.addFav(props.id)}>Add to Favorites</button>
    </>
  )
}

export default Player;