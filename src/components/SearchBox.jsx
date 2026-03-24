import React, { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({
  onSearch, recentCities, unit, onUnitChange, loading
}) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    const trimmed = city.trim();
    if (!trimmed) return;
    onSearch(trimmed);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="searchbox-wrap">

      {/* Search input row */}
      <div className="search-row">
        <div className="search-input-wrap">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            className="search-input"
            placeholder="Try: London, Tokyo, Mumbai..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />
        </div>
        <button
          className="search-btn"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? "..." : "Search"}
        </button>
      </div>

      {/* Recent cities + unit toggle */}
      {recentCities.length > 0 && (
        <div className="controls-row">
          <span className="recents-label">Recent</span>
          <div className="recents-list">
            {recentCities.map((c) => (
              <button
                key={c}
                className="recent-chip"
                onClick={() => { setCity(c); onSearch(c); }}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="unit-toggle">
            <button
              className={`unit-btn ${unit === "C" ? "active" : ""}`}
              onClick={() => onUnitChange("C")}
            >°C</button>
            <button
              className={`unit-btn ${unit === "F" ? "active" : ""}`}
              onClick={() => onUnitChange("F")}
            >°F</button>
          </div>
        </div>
      )}

    </div>
  );
}