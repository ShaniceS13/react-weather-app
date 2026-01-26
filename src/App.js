import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Powder Springs" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/ShaniceS13"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shanice Solomon
          </a>{" "}
          and is open-sourced on {""}
          <a
            href="https://github.com/ShaniceS13/react-weather-app"
            target="_blank"
            rel="noopener noferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
