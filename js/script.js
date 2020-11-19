const addBook = document.querySelector('.addBook');
addBook.addEventListener('click', () => bookInfoWrapper.style.display = "block");

const closeModal = document.querySelector('#close');
closeModal.addEventListener('click', () => bookInfoWrapper.style.display = "none");

const bookInfoWrapper = document.querySelector('#book-info-wrapper');

class Book {
    constructor(title, author) {
        this.title = form.title.value;
        this.author = form.author.value;
    }
}

let myLibrary = [];

function addBookToLibrary() {
    let newBook = new Book(title, author);
    myLibrary.push(newBook);
    console.log(myLibrary);
}



