import '../App.css';
import Welcome from './Welcome'
import { playerData } from '../data/playerData'
import PlayerList from './PlayerList'

function App() {
  return (
    <div className="container">
      <Welcome />
      <PlayerList 
        players={playerData} 
      />
    </div>
  );
}

export default App;
