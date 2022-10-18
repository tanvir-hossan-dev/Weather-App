import React, { useEffect, useState } from "react";
import axios from "../../axios";

const ForeCast = ({ city, apiKey }) => {
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
      setForecast(data.list.slice(0, 7));
    };
    fetchData();
  }, [city, apiKey]);
  console.log(forecast);
  return (
    <div className="w-full flex justify-between text-white">
      {forecast.map((data) => (
        <div>
          <h2 className="text-white font-bold text-[48px]">{Math.floor(data?.main?.temp)} ℃</h2>
          <p className="text-white text-[22px]">{data?.weather[0]?.main}</p>
        </div>
      ))}
    </div>
  );
};

export default ForeCast;
