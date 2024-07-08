import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <footer>
      This project was coded by
      <a href="https://github.com/SoniaJayat" target="blank">
        {" "}
        Magdalena Zyglewicz{" "}
      </a>
      is open-sourced on
      <a href="https://github.com/Lena3891/React-Week-4" target="blank">
        GitHub{" "}
      </a>
      and hosted on
      <a href="https://weather-forecast-app-sonia.netlify.app/" target="blank">
        {" "}
        Netlify
      </a>
    </footer>
  );
}
