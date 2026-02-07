import{ useState} from "react"
import SearchBar from "./components/SearchBar"
import type { WeatherData } from "./types/weather";
import WeatherCard from "./components/WeatherCard";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {

  const[weather , setWeather] = useState<WeatherData | null>(null);

  function handleSearch(city: string){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
  .then((response) => response.json())
  .then((data) => setWeather(data))
  }



  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  )
}

export default App
