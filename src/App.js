import './App.css';
import CurrentRank from './components/CurrentRank';
import PreferredRank from './components/PreferredRank';
import WinsNeeded from './components/WinsNeeded';
import GameMode from './components/GameMode';

function App() {
  return (
    <div>
      <GameMode />
      <CurrentRank />
      <PreferredRank />
      <WinsNeeded />
    </div>
  );
}

export default App;
