const axios = require("axios");

const cache = {};
const CACHE_TIME = 1000 * 60 * 60; // 1h

async function getFoodByMood(mood) {
  let query = "";

  if (mood === "feliz") query = "pizza";
  if (mood === "triste") query = "chocolate";
  if (mood === "emocionado") query = "burger";
  if (mood === "relajado") query = "sushi";

  // CACHE
  if (cache[query]) {
    const age = Date.now() - cache[query].time;

    if (age < CACHE_TIME) {
      console.log("📦 CACHE food:", query);
      return cache[query].data;
    }
  }

  console.log("🌐 API food:", query);

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  const response = await axios.get(url);

  let data = "🍿 Palomitas";

  if (response.data.meals) {
    const meals = response.data.meals;

    // comida aleatoria
    const meal = meals[Math.floor(Math.random() * meals.length)];
    data = meal.strMeal;
  }

  cache[query] = {
    data,
    time: Date.now()
  };

  return data;
}

module.exports = { getFoodByMood };