import peliculas from './peliculas.js'
import peliculas from './peliculas.json'; // Assuming peliculas data is in JSON format

const generoContainers = document.querySelectorAll('.genero-container');

generoContainers.forEach(container => {
  const generoId = container.querySelector('h2').textContent.split(' ')[3]; // Extract genre ID from h2 text

  const movies = peliculas.filter(movie => movie.genre_ids.includes(Number(generoId))); // Filter movies by genre ID

  movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');

    const imageURL = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`; // Use w200 for smaller images
    const image = document.createElement('img');
    image.src = imageURL;
    image.alt = movie.title;

    const title = document.createElement('p');
    title.textContent = movie.title;

    movieElement.appendChild(image);
    movieElement.appendChild(title);

    container.querySelector('.genero').appendChild(movieElement);
  });
});


