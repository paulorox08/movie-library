const table = document.querySelector('.table');
const addButton = document.querySelector('.addButton');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
let movieContainer = document.querySelector('.movie-container');

const titleInfo = document.querySelector('#title');
const directorInfo = document.querySelector('#director');
const genreInfo = document.querySelector('#genre');
const runtimeInfo = document.querySelector('#runtime');
const yearInfo = document.querySelector('#year');

const submit = document.querySelector('.submit');

let myLibrary = [
    title = titleInfo.value,
    director = directorInfo.value,
    genre = genreInfo.value,
    runtime = runtimeInfo.value,
    year = yearInfo.value
];

function Movie(title, director, genre, runtime, date) {
    this.title = title
    this.director = director
    this.genre = genre
    this.runtime = runtime
    this.date = date
}

function addMovieToLibrary() {

}

const m1 = new Movie("Batman Begins", "Christoper Nolan", "Supehero", "140min");


addButton.addEventListener('click', addMovieToLibrary)

addButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});


submit.addEventListener('click', () => {
    let newMovie = document.createElement('p');
    newMovie.innerText = titleInfo.value;
    movieContainer.appendChild(newMovie)
})
