const table = document.querySelector('.table');
const addButton = document.querySelector('.addButton');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
let movieContainer = document.querySelector('.movie-container');
const theme = document.querySelector('.theme');

const titleInfo = document.querySelector('#title');
const directorInfo = document.querySelector('#director');
const genreInfo = document.querySelector('#genre');
const runtimeInfo = document.querySelector('#runtime');
const yearInfo = document.querySelector('#year');

const submit = document.querySelector('.submit');

function validate() {
    let titleRGEX = /^(?!\s*$).+/;
    let titleResult = titleRGEX.test(titleInfo.value);
    if (titleResult == false) {
        alert("Missing title");
        return false;
    }

    let directorRGEX = /^(?!\s*$).+/;
    let directorResult = directorRGEX.test(directorInfo.value);
    if (directorResult == false) {
        alert("Missing director");
        return false;
    }

    let genreRGEX = /^(?!\s*$).+/;
    let genreResult = genreRGEX.test(genreInfo.value);
    if (genreResult == false) {
        alert("Missing genre");
        return false;
    }

    let runtimeRGEX = /^(?!\s*$).+/;
    let runtimeResult = runtimeRGEX.test(runtimeInfo.value);
    if (runtimeResult == false) {
        alert("Missing runtime");
        return false;
    }

    let yearRGEX = /^\d{4}$/;
    let yearResult = yearRGEX.test(yearInfo.value);
    if(yearResult == false) {
        alert('Missing/incorrect year');
        return false;
    }

    return true;
}

let myLibrary = [];

function Movie(title, director, genre, runtime, year) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.runtime = runtime;
    this.year = year;
}

Movie.prototype.createMovie = function() {

    const newContainer = document.createElement('div');
    newContainer.className = 'newContainer'
    movieContainer.appendChild(newContainer);

    const newTitle = document.createElement('div');
    newTitle.innerText = '"' + newMovie.title + '"';
    newTitle.className = newTitle.innerText;
    newContainer.appendChild(newTitle);

    const newDirector = document.createElement('span');
    newDirector.innerText = newMovie.director;
    newContainer.appendChild(newDirector);

    const newGenre = document.createElement('span');
    newGenre.innerText = newMovie.genre;
    newContainer.appendChild(newGenre);

    const newRuntime = document.createElement('span');
    newRuntime.innerText = newMovie.runtime;
    newContainer.appendChild(newRuntime);

    const newYear = document.createElement('span');
    newYear.innerText = newMovie.year;
    newContainer.appendChild(newYear);

    modal.style.display = 'none';

    const newRemove = document.createElement('div');
    newRemove.className = newTitle.innerText + ' material-symbols-outlined';
    newRemove.innerText = 'delete';
    newContainer.appendChild(newRemove);

    newRemove.addEventListener('click', () => {
        newContainer.remove();
        let index = myLibrary.map(function(e) {return e.title;}).indexOf(newRemove.className);
        myLibrary.splice(index, 1);
    });

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


submit.addEventListener('click', () => {
    if (validate() == true) {
        addMovieToLibrary();
    };
    
});


function themeToggle() {
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    const themeText = theme.innerText === 'dark_mode' ? 'light_mode' : 'dark_mode';
    root.className = newTheme;
    theme.innerText = themeText;
}

themeToggle()

theme.addEventListener('click', themeToggle);