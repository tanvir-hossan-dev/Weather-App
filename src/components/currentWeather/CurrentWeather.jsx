import React, { useEffect, useState } from "react";
import axios from "../../axios";
const CurrentWeather = ({ city, apiKey }) => {
  const [currentWeather, setCurrentWeather] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
      setCurrentWeather(data);
    };
    fetchData();
  }, [city, apiKey]);
  return (
    <div>
      {currentWeather.id && (
        <div>
          <h2>{currentWeather?.main?.temp} ℉</h2>
          <h3>{currentWeather?.name} </h3>
          <div>
            <h3>{currentWeather?.main?.temp_max} ℉</h3>
            <h3>{currentWeather?.main?.temp_min} ℉</h3>
          </div>
          <p>{currentWeather?.weather[0]?.main}</p>
          <p>{currentWeather?.weather[0]?.description}</p>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
