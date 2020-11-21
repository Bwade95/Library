const addBook = document.querySelector('.add-book-btn');
addBook.addEventListener('click', () => bookInfoWrapper.style.display = "block");

const bookInfoWrapper = document.querySelector('#book-info-wrapper');
window.onclick = function(event) {
    if (event.target == bookInfoWrapper) {
        bookInfoWrapper.style.display = "none";
    }
}

class Book {
    constructor() {
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
    form.reset();
}

function render() {
    const display = document.getElementById('library-catalogue');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));

    for(let i=0; i<myLibrary.length; i++) {
        createBook(myLibrary[i]);
    }
}

// Creates web-card storing book information
function createBook(item) {
    // div for card holding book info
    library = document.querySelector('#library-catalogue');
    
    // Stores styling and content of entire book
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    // Stores styling and content of book title
    const titleDiv = document.createElement('div');
    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);
    console.log(titleDiv.textContent);

    // Stores styling and content of book author
    const authorDiv = document.createElement('div');
    authorDiv.textContent = item.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    library.appendChild(bookDiv);
}


