const table = document.querySelector('.table');
const addButton = document.querySelector('.addButton');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

let myLibrary = [];

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

