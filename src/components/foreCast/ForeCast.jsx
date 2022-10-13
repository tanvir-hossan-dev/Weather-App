import React, { useEffect, useState } from "react";
import axios from "../../axios";

const ForeCast = ({ city, apiKey }) => {
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`);
      setForecast(data.list);
    };
    fetchData();
  }, [city, apiKey]);
  console.log(forecast);
  return (
    <div style={{ display: "flex", width: "100%" }}>
      {forecast.map((data) => (
        <div style={{ width: "100px" }}>
          <h2>{Math.floor(data?.main?.temp)} ℉</h2>
          <h3>{data?.name} </h3>
          <div>
            <h3>{Math.floor(data?.main?.temp_max)} ℉</h3>
            <h3>{Math.floor(data?.main?.temp_min)} ℉</h3>
          </div>
          <p>{data?.weather[0]?.main}</p>
          {/* <p>{data?.weather[0]?.description}</p> */}
        </div>
      ))}
    </div>
  );
};

export default ForeCast;
