const axios = require("axios");
const fs = require("fs");
const path = require("path");

const API_KEY = process.env.TMDB_API_KEY;
const CACHE_TIME = 1000 * 60 * 60; // 1h

async function getMovieByMood(mood) {
  const cachePath = path.join(__dirname, "../cache");
  const cacheFile = path.join(cachePath, `${mood}.json`);

  if (!fs.existsSync(cachePath)) {
    fs.mkdirSync(cachePath);
  }

  // comprobar cache + expiración
  if (fs.existsSync(cacheFile)) {
    const stats = fs.statSync(cacheFile);
    const age = Date.now() - stats.mtimeMs;

    if (age < CACHE_TIME) {
      console.log("📦 CACHE movie:", mood);
      return JSON.parse(fs.readFileSync(cacheFile));
    }
  }

  console.log("🌐 API movie:", mood);

  let genre = "";
  if (mood === "feliz") genre = "35";
  if (mood === "triste") genre = "18";
  if (mood === "emocionado") genre = "28";
  if (mood === "relajado") genre = "10749";

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}`;

  const response = await axios.get(url);
  const results = response.data.results;

  const movie = results[Math.floor(Math.random() * results.length)];

  fs.writeFileSync(cacheFile, JSON.stringify(movie, null, 2));

  return movie;
}

module.exports = { getMovieByMood };