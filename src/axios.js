import axios from "axios";

const instance = axios.create({
  baseURL: "https://openweathermap.org",
});

export default instance;
