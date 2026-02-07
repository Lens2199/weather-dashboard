import type { WeatherData } from "../types/weather";
import { Card, CardContent, Typography } from "@mui/material";

interface WeatherCardProps {
  weather: WeatherData;
}

function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {weather.name}
        </Typography>

        <Typography>
          Temperature: {weather.main.temp} °F
        </Typography>

        <Typography>
          Feels Like: {weather.main.feels_like} °F
        </Typography>

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
      </CardContent>
    </Card>
  );
}

export default WeatherCard;
