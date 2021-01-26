import './App.css';

function App() {
  const COLOR = process.env.REACT_APP_COLOR;

  console.log(process.env.REACT_APP_COLOR);

  return (
    <div className="App">
      <header className="App-header">{COLOR}</header>
    </div>
  );
}

export default App;
