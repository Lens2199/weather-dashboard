import{ useState} from "react"
import SearchBar from "./components/SearchBar"
import type { WeatherData } from "./types/weather";
import WeatherCard from "./components/WeatherCard";
import SearchHistory from "./components/SearchHistory";
import { CircularProgress , Alert } from "@mui/material";
import { Container, Typography, Grid, Paper } from "@mui/material";
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {

  const[weather , setWeather] = useState<WeatherData | null>(null);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState<string | null>(null);
  const[history, setHistory] = useState<string[]>([]);

function handleSearch(city: string){
  city = city.trim().toLowerCase();
  setLoading(true);
  setError(null);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
  setWeather(data);
  setLoading(false);

  setHistory((prev) =>
    prev.includes(city) ? prev : [...prev, city]
  );
})
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
}

return (
    <Container maxWidth="md">
    <Typography variant="h3" align="center" gutterBottom>
        Weather Dashboard
    </Typography>

    <SearchBar onSearch={handleSearch} />

    {error && <Alert severity="error">{error}</Alert>}

    <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid size={4}>
            <Paper sx={{ p: 2 }}>
                <SearchHistory history={history} onSelect={handleSearch} />
            </Paper>
        </Grid>
        <Grid size={8}>
            {loading ? <CircularProgress /> : weather && <WeatherCard weather={weather} />}
        </Grid>
    </Grid>
</Container>
  )
}

export default App

