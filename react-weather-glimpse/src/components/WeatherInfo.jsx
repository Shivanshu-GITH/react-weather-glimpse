import React from "react";
import InfoBox from "./InfoBox";
import "./WeatherInfo.css";

function kelvinToCelsius(k) { return k - 273.15; }

function displayTemp(celsius, unit) {
  if (unit === "F") return Math.round(celsius * 9 / 5 + 32) + "°";
  return Math.round(celsius) + "°";
}

function getWeatherEmoji(main, icon) {
  const night = icon && icon.endsWith("n");
  const map = {
    Clear: night ? "🌙" : "☀️",
    Clouds: night ? "☁️" : "⛅",
    Rain: "🌧️", Drizzle: "🌦️",
    Thunderstorm: "⛈️", Snow: "❄️",
    Mist: "🌫️", Fog: "🌫️", Haze: "🌫️",
  };
  return map[main] || "🌡️";
}

function getTempClass(celsius) {
  if (celsius >= 40) return "temp-hot";
  if (celsius >= 30) return "temp-warm";
  if (celsius >= 18) return "temp-mild";
  if (celsius >= 8) return "temp-cool";
  return "temp-cold";
}

export default function WeatherInfo({ data, loading, unit }) {

  if (loading) {
    return (
      <div className="skeleton-card">
        <div className="skel" style={{ height: 28, width: "55%" }} />
        <div className="skel" style={{ height: 16, width: "35%", marginBottom: 20 }} />
        <div className="skel" style={{ height: 80, width: 180 }} />
        <div className="skel-grid">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="skel" style={{ height: 80 }} />
          ))}
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="empty-state">
        <span className="empty-icon">🌍</span>
        <div className="empty-title">No city searched yet</div>
        <div className="empty-sub">Enter a city name above to get started</div>
      </div>
    );
  }

  const tempC  = kelvinToCelsius(data.main.temp);
  const feelsC = kelvinToCelsius(data.main.feels_like);
  const minC   = kelvinToCelsius(data.main.temp_min);
  const maxC   = kelvinToCelsius(data.main.temp_max);
  const windKmh = Math.round(data.wind.speed * 3.6);
  const vis    = data.visibility ? (data.visibility / 1000).toFixed(1) : "N/A";
  const sunrise = new Date(data.sys.sunrise * 1000)
    .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const sunset  = new Date(data.sys.sunset * 1000)
    .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const emoji  = getWeatherEmoji(data.weather[0].main, data.weather[0].icon);
  const dateStr = new Date().toLocaleDateString("en-US", {
    weekday: "long", month: "short", day: "numeric"
  });

  const infoItems = [
    { label: "Humidity",       value: `${data.main.humidity}%`,
      sub: data.main.humidity > 80 ? "Very humid" : data.main.humidity > 60 ? "Moderate" : "Comfortable" },
    { label: "Wind",           value: `${windKmh} km/h`,
      sub: windKmh > 50 ? "Strong winds" : windKmh > 20 ? "Breezy" : "Calm" },
    { label: "High / Low",     value: `${displayTemp(maxC,unit)} / ${displayTemp(minC,unit)}`,
      sub: `${unit === "F" ? "°F" : "°C"} today` },
    { label: "Visibility",     value: `${vis} km`,
      sub: parseFloat(vis) > 8 ? "Clear view" : parseFloat(vis) > 4 ? "Moderate" : "Poor" },
    { label: "Pressure",       value: `${data.main.pressure} hPa`,
      sub: data.main.pressure > 1013 ? "High pressure" : "Low pressure" },
    { label: "Sunrise/Sunset", value: sunrise, sub: `Sunset: ${sunset}` },
  ];

  return (
    <div className="weather-card">
      <div className="city-row">
        <div>
          <div className="city-name">{data.name}</div>
          <div className="city-country">
            {data.sys.country} · {dateStr}
          </div>
        </div>
        <div className="weather-icon-wrap">
          <div className="weather-icon">{emoji}</div>
          <div className="weather-desc">{data.weather[0].description}</div>
        </div>
      </div>

      <div className="temp-row">
        <div className={`temp-main ${getTempClass(tempC)}`}>
          {displayTemp(tempC, unit)}
        </div>
        <div className="temp-unit">{unit === "F" ? "F" : "C"}</div>
        <div className="feels-like">
          Feels like {displayTemp(feelsC, unit)}{unit === "F" ? "°F" : "°C"}
        </div>
      </div>

      <div className="info-grid">
        {infoItems.map((item) => (
          <InfoBox key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}