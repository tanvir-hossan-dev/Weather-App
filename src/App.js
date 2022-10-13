import React, { useState } from "react";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import ForeCast from "./components/foreCast/ForeCast";

function App() {
  const apiKey = "872fd2dc33eca9dbd2c287ff05f16701";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  const hanldeSubmit = (e) => {
    e.preventDefault();
    setCity(search);
    setSearch("");
  };
  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
        <button type="submit">Search</button>
      </form>
      {city && (
        <div>
          <CurrentWeather city={city} apiKey={apiKey} />
          <ForeCast city={city} apiKey={apiKey} />
        </div>
      )}
    </div>
  );
}

export default App;
