import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />

      <footer>
        <p>
          This project was coded by <a href="https://github.com/ShaniceS13" target="_blank" rel="noreferrer">Shanice Solomon</a>  and is open-sourced on 
        <a href="https://github.com/ShaniceS13/react-weather-app" target="_blank" rel="noreferrer"> GitHub </a> 
        and is hosted on <a href="https://whimsical-biscochitos-5fa554.netlify.app/" target="_blank" rel="noreferrer">Netlify</a> 
        </p>
      </footer>
    </div>
  );
}
