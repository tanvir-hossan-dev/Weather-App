import React, { useState } from "react";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import ForeCast from "./components/foreCast/ForeCast";

function App() {
  const apiKey = "872fd2dc33eca9dbd2c287ff05f16701";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");

  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (search) {
      setCity(search);
      setSearch("");
    }
  };
  return (
    <div className=" mx-w-screen-lg  ">
      <div className="bg-blue-900 h-screen p-8">
        <form onSubmit={hanldeSubmit}>
          <input
            className="outline-0 py-2 px-4"
            type="text"
            placeholder="Search City"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button
            disabled={!search}
            className="text-white ml-4 border-2 border-solid border-white py-1 px-3"
            type="submit"
          >
            Search
          </button>
        </form>
        {city && (
          <div className="mt-8">
            <CurrentWeather city={city} apiKey={apiKey} />
            <ForeCast city={city} apiKey={apiKey} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
