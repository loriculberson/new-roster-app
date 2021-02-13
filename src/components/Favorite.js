function Favorite(props){
  console.log('favorites', props.favs)

  return (
    <div>
      <h2>Favorite Players</h2>
      {props.favs.map(favorite => {
    return (
      <p>{favorite.firstName}</p>
    )
  } )}
    </div>
  )

}

export default Favorite;