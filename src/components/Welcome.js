function Welcome(){
  const currentHour = new Date().getHours()
  const message = currentHour < 5 ? "Why are you still up?" 
                : currentHour < 12 ? "Good Morning"
                : currentHour < 18 ? "Good Afternoon"
                : "Good Evening"

  return (
    <>
      <p>{message} sports fans!</p>
      <h2>Welcome Astros Fans!</h2>
    </>
  )
}

export default Welcome;