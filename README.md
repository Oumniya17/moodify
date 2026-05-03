<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Poppins&weight=700&size=40&duration=3000&pause=1000&color=FF0000&center=true&vCenter=true&width=600&lines=Moodify" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?color=FFFFFF&size=18&center=true&vCenter=true&width=600&lines=AI-powered+movie+experience;Mood-based+recommendations;Multi-API+system;Smart+caching+engine" />
</p>

## 🎞️ Una experiencia, no una aplicación

Moodify actúa como un director invisible que convierte tu estado emocional en una historia completa.

No eliges solo una película…  
>defines el tono de una experiencia.

A partir de tres decisiones:

- 😄 Cómo te sientes  
- 🌍 Dónde estás  
- ❤️ Con quién estás  

El sistema construye una narrativa que combina:

- 🎬 Cine  
- 🌦 Contexto real  
- 🎧 Música  
- 🍔 Sensaciones  

✨ Cada sesión es única  
✨ Cada resultado tiene intención  

>Moodify no muestra contenido… **dirige momentos**.

---

## 🎬 Cómo funciona (detrás de cámaras)

```text
Usuario → Input → Backend → APIs → Caché → Experiencia final
````

```text
🎭 El usuario define el tono
        ↓
🎬 El sistema interpreta
        ↓
🌐 Se conectan múltiples APIs
        ↓
⚙️ Se optimiza (caché)
        ↓
🍿 Se renderiza la experiencia
```

>Lo que parece simple… está cuidadosamente orquestado.

---

## 🎥 Motor de APIs

### 🎬 TMDB — La historia

* Tendencias
* Detalles de películas
* Trailers
* Recomendaciones por género

>El núcleo cinematográfico.



### 🌦 OpenWeather — El escenario

* Clima en tiempo real

>Da contexto a la experiencia.



### 🎧 Deezer — La emoción

* Música según mood
* Preview reproducible

>Hace que la experiencia cobre vida.



### 🍔 TheMealDB — El toque final

* Sugerencias de comida

>Completa la experiencia fuera de la pantalla.

---

## ⚙️ Rutas de APIs utilizadas

### 🎬 TMDB

* `/trending/movie/week` → películas en tendencia (Explore)
* `/movie/{id}` → detalles de película (modal)
* `/movie/{id}/videos` → trailers (modal)
* `/discover/movie` → recomendaciones por mood (Vibes)

### 🌦 OpenWeather

* `/weather?q={city}` → clima en tiempo real (Result)

### 🎧 Deezer

* `/search?q={mood}` → música según estado emocional (Result)

### 🍔 TheMealDB

* `/search.php?s={food}` → sugerencias de comida (Result)

---

## 🔗 Cómo se conectan

| Entrada   | Resultado                  |
| --------- | -------------------------- |
| Mood 🎭   | Película + Música + Comida |
| Ciudad 🌍 | Clima                      |

>Todo está diseñado para crear una experiencia coherente.<br>
>💡 Esta combinación permite transformar datos aislados en una experiencia completa basada en el contexto del usuario.

---

## ⚡ Rendimiento inteligente (Caché)

* 🎬 Películas → almacenadas en `/cache`
* 🌦 Clima → cache en memoria
* 🎧 Música → cache en memoria
* 🍔 Comida → cache en memoria

>Reduce llamadas a APIs y mejora el rendimiento.

---

## 🖥️ Interfaz — Una narrativa visual

* `/` → Inicio
* `/explore` → Descubrimiento
* `/vibes` → Emoción
* `/result` → Clímax
* `/docs` → Detrás de cámaras

>No navegas… avanzas en una historia.<br>
>El usuario interactúa mediante selección de moods, exploración de contenido y reproducción de trailers en tiempo real.

---

## 🔌 Uso de APIs en la interfaz

Las APIs se integran directamente en la experiencia del usuario:

* 🎬 **Explore**

  * TMDB → muestra películas en tendencia
  * TMDB → carga detalles en modal
  * TMDB → reproduce trailers

* 🎧 **Vibes**

  * TMDB → genera películas según emoción
  * TMDB → permite ver detalles y trailers

* 🍿 **Result**

  * TMDB → película recomendada
  * OpenWeather → clima en tiempo real
  * Deezer → música con preview
  * MealDB → comida sugerida

>Cada parte de la interfaz refleja datos reales de APIs externas.

---

# 🎥 Experiencia Moodify

<p align="center">
  <b>Inspirado en plataformas de streaming y narrativa cinematográfica</b>
</p>

### 🏠 Home — El comienzo

<p align="center">
  <img src="https://github.com/user-attachments/assets/b44417e8-eb5e-4f06-b018-7c3f105db69e" width="800"/>
</p>

<p align="center">
  Aquí defines el tono de tu historia.
</p>

---

### 🎬 Explore — Descubrimiento interactivo

<p align="center">
  <img src="https://github.com/user-attachments/assets/df89a5c4-3630-46a3-92ec-374db2eb921d" width="800"/>
</p>

<p align="center">
  Explora películas en tendencia con una experiencia visual tipo streaming.
</p>

#### 🎥 Interacciones disponibles

* Navegación por contenido en tiempo real
* Apertura de detalles en modal
* Descripción completa de películas
* ⭐ Valoraciones
* ▶️ Reproducción de trailers

>Explore no solo muestra… **te deja descubrir**.

---

### 🎧 Vibes — Recomendación emocional

<p align="center">
  <img src="https://github.com/user-attachments/assets/f71f3a24-8be3-4b42-94f3-a3b51289e142" width="800"/>
</p>

<p align="center">
  Selecciona tu mood y deja que el sistema reaccione.
</p>

#### 🎬 Interacciones disponibles

* Selección de estados emocionales
* Generación automática de contenido
* Grid dinámico de películas
* Apertura de modales
* ▶️ Reproducción de trailers

>Vibes no recomienda… **siente contigo**.

---

### 🍿 Result — El clímax

<p align="center">
  <img src="https://github.com/user-attachments/assets/a2d66c99-f6f3-44e2-800e-658711cdd677" width="800"/>
</p>

<p align="center">
  Todo converge en una experiencia única: cine, clima, música y comida.
</p>

---

### ⚙️ Docs — Detrás de cámaras

<p align="center">
  <img src="https://github.com/user-attachments/assets/bede3f2e-e4ff-454f-b368-45663aeb1c24" width="800"/>
</p>

<p align="center">
  Donde la lógica se convierte en magia.
</p>

---

## 🔑 Configuración

```env
TMDB_API_KEY=tu_api_key
OPENWEATHER_API_KEY=tu_api_key
```

>Las claves API no se incluyen por seguridad.

---

## ▶️ Ejecución

```bash
npm install
node app.js
```

Abrir en:

```
http://localhost:3000
```

---

## 🧠 Tecnologías

* Node.js
* Express
* EJS
* Axios
* APIs externas

---

## 🎬 Conclusión

Moodify no es solo una aplicación técnica.

Es una experiencia que:

* interpreta emociones
* conecta servicios
* construye narrativa

>No se trata de datos…
>se trata de lo que sientes.

---

## 👩‍💻 Quién está detrás

<p align="center">
  <img src="https://github.com/user-attachments/assets/d549c019-35bb-4af8-8e61-8d6885c6cd9b" width="200">
</p>

**Oumniya — Developer & Designer**


<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Poppins&weight=600&size=22&duration=3000&pause=1000&color=FF0000&center=true&vCenter=true&width=450&lines=Lights+off.+Mood+on.;Let+the+experience+begin." />
</p>


