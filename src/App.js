import logo from './logo.svg';
import './App.css';

function App() {
  const COMPRAS_URL = process.env.COLOR;

  return (
    <div className="App">
      <header className="App-header">{COMPRAS_URL}</header>
    </div>
  );
}

export default App;
