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

let myLibrary = [];

function Movie(title, director, genre, runtime, date) {
    this.title = title
    this.director = director
    this.genre = genre
    this.runtime = runtime
    this.date = date
}

function addMovieToLibrary() {
    newMovie = titleInfo.value + ',' + directorInfo.value + ',' + genreInfo.value + ',' + runtimeInfo.value + ',' + yearInfo.value;
    myLibrary.push(newMovie);
    console.log(myLibrary);

    const newCard = document.createElement('div');
    newCard.innerText = newMovie;
    newCard.style.border = '1px solid black';

    movieContainer.appendChild(newCard);
}


addButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});


submit.addEventListener('click', addMovieToLibrary)
