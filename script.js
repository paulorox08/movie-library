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

function Movie(title, director, genre, runtime, year) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.runtime = runtime;
    this.year = year;
}

Movie.prototype.createMovie = function() {
    console.log("This is the movie" + this.title + this.director + this.genre + this.runtime + this.year);

    const newContainer = document.createElement('div');
    newContainer.style.border = '5px solid black';
    movieContainer.appendChild(newContainer);

    const newTitle = document.createElement('span');
    newTitle.innerText = newMovie.title;
    newTitle.style.border = '1px solid blue';
    newContainer.appendChild(newTitle);

    const newDirector = document.createElement('span');
    newDirector.innerText = newMovie.director;
    newDirector.style.border = '1px solid red';
    newContainer.appendChild(newDirector);

    const newGenre = document.createElement('span');
    newGenre.innerText = newMovie.genre;
    newGenre.style.border = '1px solid green';
    newContainer.appendChild(newGenre);

    const newRuntime = document.createElement('span');
    newRuntime.innerText = newMovie.runtime;
    newRuntime.style.border = '1px solid purple';
    newContainer.appendChild(newRuntime);

    const newYear = document.createElement('span');
    newYear.innerText = newMovie.year;
    newYear.style.border = '1px solid pink';
    newContainer.appendChild(newYear);


    modal.style.display = 'none';
}

function addMovieToLibrary() {
    newMovie = new Movie(titleInfo.value, directorInfo.value, genreInfo.value, runtimeInfo.value, yearInfo.value);
    myLibrary.push(newMovie);
    console.log(myLibrary);

    newMovie.createMovie();
}



addButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});


submit.addEventListener('click', addMovieToLibrary)
