const axios = require("axios");

const API_KEY = process.env.OPENWEATHER_API_KEY;
const cache = {};
const CACHE_TIME = 1000 * 60 * 30;

async function getWeather(city) {

  if (cache[city]) {
    const age = Date.now() - cache[city].time;

    if (age < CACHE_TIME) {
      console.log("📦 CACHE weather:", city);
      return cache[city].data;
    }
  }

  console.log("🌐 API weather:", city);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`;

  const response = await axios.get(url);

  const data = {
    temp: response.data.main.temp,
    description: response.data.weather[0].description
  };

  cache[city] = {
    data,
    time: Date.now()
  };

  return data;
}

module.exports = { getWeather };