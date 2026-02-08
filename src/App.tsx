import{ useState} from "react"
import SearchBar from "./components/SearchBar"
import type { WeatherData } from "./types/weather";
import WeatherCard from "./components/WeatherCard";
import { CircularProgress } from "@mui/material";
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {

  const[weather , setWeather] = useState<WeatherData | null>(null);
  const[loading, setLoading] = useState(false);
  function handleSearch(city: string){
    setLoading(true);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
  .then((response) => response.json())
  .then((data) => {
    setWeather(data);
    setLoading(false);
  })
  }



  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? <CircularProgress /> : weather && <WeatherCard weather={weather} />}
    </div>
  )
}

export default App
