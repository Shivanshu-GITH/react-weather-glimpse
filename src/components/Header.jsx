import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div>
        <div className="logo">
          Weather<span>Glimpse</span>
        </div>
        <div className="logo-sub">Real-time Forecast</div>
      </div>
      <div className="header-badge">☁ Live Data</div>
    </header>
  );
}