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
}

// Creates web-card storing book information
function createBook(item) {

    // div for card holding book info
    const library = document.createElement('div');
    library.classList.add('book-container');
    
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-button');

    const bookRead = document.createElement('input');
    bookRead.classList.add('book-read');
    bookRead.setAttribute('type', 'radio');
}


