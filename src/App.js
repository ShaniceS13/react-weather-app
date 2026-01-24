import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/ShaniceS13">Shanice Solomon</a> and is
          open-sourced on {""}
          <a href="https://github.com/ShaniceS13/react-weather-app">GitHub</a>
        </footer>
      </div>
    </div>
  );
}
