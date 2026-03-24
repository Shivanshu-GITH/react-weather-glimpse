import React from "react";
import "./InfoBox.css";

export default function InfoBox({ label, value, sub }) {
  return (
    <div className="info-box">
      <div className="info-label">{label}</div>
      <div className="info-val">{value}</div>
      {sub && <div className="info-sub">{sub}</div>}
    </div>
  );
}