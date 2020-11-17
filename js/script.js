const addBook = document.querySelector('.addBook');
addBook.addEventListener('click', () => bookInfoWrapper.style.display = "block");

const bookInfoWrapper = document.querySelector('#book-info-wrapper');

class Book {
    constructor(title = '', author = '', totalPages = 0, pagesRead = 0, completed = false) {
        this.title = title;
        this.author = author;
        this.totalPages = totalPages;
        this.pagesRead = pagesRead;
        this.completed = completed;
    }
}

let myLibrary = ["this is the end", "world war z", "go fuck yourself"]

function addBookToLibrary() {
    var f = document.createElement("form");
    f.setAttribute('method',"post");
    f.setAttribute('action', "submit.php");
}

function clickTest() {
    alert("I have been clicked.");
}

