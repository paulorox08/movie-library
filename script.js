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

    const newTitle = document.createElement('span');
    newTitle.innerText = newMovie.title;
    newTitle.className = newTitle.innerText;
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

    const newRemove = document.createElement('div');
    newRemove.className = newTitle.innerText + " " + "material-symbols-outlined";
    newRemove.innerText = 'Remove';
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
