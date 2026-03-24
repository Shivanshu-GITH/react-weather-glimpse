import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherInfo from "./components/WeatherInfo";
import Header from "./components/Header";
import "./App.css";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading]         = useState(false);
  const [error, setError]             = useState("");
  const [unit, setUnit]               = useState("C");
  const [recentCities, setRecentCities] = useState([]);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const url =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?q=${encodeURIComponent(city)}&appid=${API_KEY}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeatherData(data);
      setRecentCities((prev) =>
        [data.name, ...prev.filter(
          (c) => c.toLowerCase() !== data.name.toLowerCase()
        )].slice(0, 5)
      );
    } catch (e) {
      setError(`"${city}" not found. Please check the spelling.`);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-root">
      <Header />

      <main className="app-main">
        <h1 className="headline">
          What's the sky<br />
          doing <em>out there?</em>
        </h1>
        <p className="subtext">
          Search any city worldwide for a real-time weather snapshot.
        </p>

        <SearchBox
          onSearch={fetchWeather}
          recentCities={recentCities}
          unit={unit}
          onUnitChange={setUnit}
          loading={loading}
        />

        {error && (
          <div className="error-msg">
            <span>⚠</span>
            <span>{error}</span>
          </div>
        )}

        <WeatherInfo data={weatherData} loading={loading} unit={unit} />
      </main>

      <footer className="app-footer">
        <span>WeatherGlimpse · Powered by OpenWeatherMap</span>
        <span>React Minor Project</span>
      </footer>
    </div>
  );
}