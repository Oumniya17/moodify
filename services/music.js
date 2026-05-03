const axios = require("axios");

const cache = {};
const CACHE_TIME = 1000 * 60 * 60; // 1h

async function getMusicByMood(mood) {
  let query = "";

  if (mood === "feliz") query = "happy";
  if (mood === "triste") query = "sad";
  if (mood === "emocionado") query = "party";
  if (mood === "relajado") query = "chill";

  if (cache[query]) {
    const age = Date.now() - cache[query].time;

    if (age < CACHE_TIME) {
      console.log("📦 CACHE music:", query);
      return cache[query].data;
    }
  }

  console.log("🌐 API music:", query);

  const url = `https://api.deezer.com/search?q=${query}`;
  const response = await axios.get(url);

  const tracks = response.data.data;

  let data;

  if (tracks.length > 0) {
    const track = tracks[Math.floor(Math.random() * tracks.length)];

    data = {
      title: track.title,
      artist: track.artist.name,
      preview: track.preview
    };
  } else {
    data = {
      title: "Playlist",
      artist: "Moodify",
      preview: null
    };
  }

  cache[query] = {
    data,
    time: Date.now()
  };

  return data;
}

module.exports = { getMusicByMood };