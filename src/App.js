import './App.css';
import PreferredRank from './components/PreferredRank';
import CurrentRank from './components/CurrentRank';
import { currentMmr } from './components/CurrentRank';
import WinsNeeded from './components/WinsNeeded';
import GameMode from './components/GameMode';

function App() {

  const mmr = currentMmr();

  return (
    <div>
      <GameMode />
      <div>
        <CurrentRank />
        <p>MMR: {mmr}</p>
      </div>
      <div>
        <PreferredRank />
        <p>MMR: 100</p>
      </div>
      <WinsNeeded />
    </div>
  );
}

export default App;