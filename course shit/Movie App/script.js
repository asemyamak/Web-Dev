// Define the API URLs and image path
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9d9bcaa75805cf2c4f1b2ac08317fd66&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=9d9bcaa75805cf2c4f1b2ac08317fd66&query="';

// Get the HTML elements we need to interact with
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// Get the initial set of movies on page load
getMovies(API_URL);

// Async function to fetch movies data from the API
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    // Display the fetched movies on the page
    showMovies(data.results);
    console.log(data.results);  // For debugging purposes only
}

// Function to display movies on the page
function showMovies(movies){
    main.innerHTML ='';  // Clear the main container before displaying new movies

    movies.forEach((movie)=>{
        const{title, poster_path, vote_average, overview} = movie

        // Create a div to hold the movie information
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        // Populate the movie div with movie data
        movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span id="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
        `
        main.appendChild(movieEl);  // Add the movie div to the main container
    })
}

// Function to determine which color rating to use for a movie based on its vote average
function getClassByRate(vote) {
    switch (true) {
      case vote >= 8:
        return 'green';
      case vote >= 5:
        return 'orange';
      default:
        return 'red';
    }
  }
  

// Add an event listener to the search form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm && searchTerm !== '') {
        // If there is a search term, fetch the matching movies and display them
        getMovies(SEARCH_URL + searchTerm);

        search.value = '';  // Clear the search input field
    }   else {
        // If there is no search term, refresh the page
        window.location.reload();
    }
})
