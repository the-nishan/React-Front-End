import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://google.com">
          {" "}
          <img src="https://tinyurl.com/5ckz33t5" />
        </a>
        <h2>Save Earth today for tomorrow</h2>

        <p>
          <h3>
            Changes in the <em>winter</em> environment:
          </h3>
          <ul>
            <li>Ice and snow</li>
            <li>Global temperature and oceans</li>
            <li>Weather patterns</li>
          </ul>
        </p>

        <h5>Are you aware of this?</h5>

        <a
          className="App-link"
          href="https://tinyurl.com/4aj9v5dm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Search here to lern more!
        </a>
      </header>
    </div>
  );
}

export default App;
