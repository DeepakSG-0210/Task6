function searchMovies() {
  const apiKey = "d33b0a0b";
  const search = document.getElementById("title").value;

  const MoviesGrid = document.getElementById("movie");

  if (search.trim() !== "") {
    MoviesGrid.innerHTML = "<p>Loading movies...</p>";

    fetch(` http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${search}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search && data.Search.length > 0) {
          moviestoshow(data.Search);
        } else {
          MoviesGrid.innerHTML = "<p>No movies found with the given name!</p>";
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        MoviesGrid.innerHTML =
          "<p>Error fetching movies. Please try again later.</p>";
      });
  } else {
    alert("Enter a movie title then search!");
  }
}

function moviestoshow(movies) {
  const MoviesGrid = document.getElementById("movie");

  MoviesGrid.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = ` 
      <img src="${movie.Poster}" alt="${movie.Title}"> 
      <h2>${movie.Title}</h2> 
      <p>${movie.Year}</p> 
    `;

    MoviesGrid.appendChild(movieCard);
  });
}
