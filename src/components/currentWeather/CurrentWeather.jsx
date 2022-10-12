import React, { useEffect } from "react";
import axios from "../../axios";

const CurrentWeather = ({ city, apiKey }) => {
  useEffect(() => {
    const fetchData = async () => {
      // const res = await axios.get(`/data/2.5/forecast?q=${city}&appid=${apiKey}`);
      const res = await axios.get(`/data/2.5/weather?q=London,uk&APPID=872fd2dc33eca9dbd2c287ff05f16701`);
      console.log(res);
    };
    fetchData();
  }, [city]);
  return <div>CurrentWeather</div>;
};

export default CurrentWeather;
