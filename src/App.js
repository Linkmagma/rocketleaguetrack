import './App.css';
import CurrentRank from './components/CurrentRank';
import PreferredRank from './components/PreferredRank';
import WinsNeeded from './components/WinsNeeded';

function App() {
  return (
    <div>
      <PreferredRank />
      <CurrentRank />
      <WinsNeeded />
    </div>
  );
}

export default App;
