const addBook = document.querySelector('.addBook');
addBook.addEventListener('click', () => bookInfoWrapper.style.display = "block");

const bookInfoWrapper = document.querySelector('#book-info-wrapper');
window.onclick = function(event) {
    if (event.target == bookInfoWrapper) {
        bookInfoWrapper.style.display = "none";
    }
}

class Book {
    constructor(title, author) {
        this.title = form.title.value;
        this.author = form.author.value;
    }
}

let myLibrary = [];
let newBook;

function addBookToLibrary() {
    newBook = new Book(title, author);
    myLibrary.push(newBook);
    render();
}

function render() {
    const display = document.getElementById('book-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for(let i=0; i<myLibrary.length; i++) {
        createBook(myLibrary[i]);
    }
}

// Creates web-card storing book information
function createBook(item) {

    // div for card holding book info
    const libraryDiv = document.createElement('div');
    libraryDiv.classList.add('book-container');
    library = document.querySelector('.book-container');
    
    // Stores styling and content of entire book
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));
    library.appendChild(bookDiv);

    // Stores styling and content of book title
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    // Stores styling and content of book author
    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    // Stores styling and content of remove button
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-button');
    bookDiv.appendChild(removeBtn);

    // Stores styling and content of book completion checker
    const bookRead = document.createElement('input');
    bookRead.classList.add('book-read');
    bookRead.setAttribute('type', 'radio');
    bookDiv.appendChild(bookRead);
}


