import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import axios from "../../axios";

const CurrentWeather = ({ city, apiKey }) => {
  const [currentWeather, setCurrentWeather] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setCurrentWeather(data);
    };
    fetchData();
  }, [city, apiKey]);
  return (
    <div className="mb-8">
      {currentWeather.id && (
        <div>
          <h1 className="text-white font-bold text-[48px]">{currentWeather?.main?.temp} ℃</h1>
          <h3 className="text-white font-bold text-[30px]">{currentWeather?.name} </h3>
          <p className="text-white text-[18px]">{moment().format("dddd")}</p>

          <p className="text-white text-[22px]">{currentWeather?.weather[0]?.description}</p>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
