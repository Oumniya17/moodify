const express = require("express");
require("dotenv").config();
const axios = require("axios");

const { getMovieByMood } = require("./services/movies");
const { getWeather } = require("./services/weather");
const { getFoodByMood } = require("./services/food");
const { getMusicByMood } = require("./services/music");

const app = express();

// CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// HOME
app.get("/", (req, res) => {
  res.render("index");
});

// EXPLORE (películas tendencia)
app.get("/explore", async (req, res) => {
  try {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`;
    const response = await axios.get(url);

    res.render("explore", {
      movies: response.data.results
    });

  } catch (error) {
    console.error("Error cargando explore:", error.message);
    res.send("Error al cargar películas 😢");
  }
});

// DETALLE PELÍCULA (modal)
app.get("/movie/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=es`;
    const response = await axios.get(url);

    res.json(response.data);

  } catch (error) {
    console.error("Error obteniendo película:", error.message);
    res.status(500).send("Error al obtener la película");
  }
});

// TRAILER
app.get("/movie/:id/trailer", async (req, res) => {
  try {
    const id = req.params.id;

    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
    const response = await axios.get(url);

    const videos = response.data.results;

    const trailer = videos.find(
      v => v.type === "Trailer" && v.site === "YouTube"
    );

    res.json({ key: trailer ? trailer.key : null });

  } catch (error) {
    console.error("Error obteniendo trailer:", error.message);
    res.status(500).send("Error al obtener trailer");
  }
});

// VIBES
app.get("/vibes", (req, res) => {
  res.render("vibes");
});

// VIBES DINÁMICO
app.get("/vibes/:type", async (req, res) => {
  const type = req.params.type;

  let genre;
  if (type === "animarme") genre = 35;
  else if (type === "energia") genre = 12;
  else if (type === "chill") genre = 16;
  else if (type === "adrenalina") genre = 28;
  else genre = 35;

  try {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${genre}`;
    const response = await axios.get(url);

    res.render("vibes", {
      movies: response.data.results,
      type
    });

  } catch (error) {
    console.error("Error en vibes:", error.message);
    res.send("Error cargando vibes 😢");
  }
});

// CÓMO FUNCIONA
app.get("/docs", (req, res) => {
  res.render("docs");
});

// GENERAR EXPERIENCIA
app.post("/generate", async (req, res) => {
  const { mood, city, group } = req.body;

  try {
    const movie = await getMovieByMood(mood);
    const weather = await getWeather(city);
    const food = await getFoodByMood(mood);
    const music = await getMusicByMood(mood);

    res.render("result", {
      movie,
      mood,
      city,
      group,
      weather,
      food,
      music
    });

  } catch (error) {
    console.error("Error generando experiencia:", error.message);
    res.send("Error al generar la experiencia 😢");
  }
});

// SERVER
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Moodify corriendo en http://localhost:${PORT}`);
});