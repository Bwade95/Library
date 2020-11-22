const newBookBtn = document.querySelector('.new-book-btn');
newBookBtn.addEventListener('click', () => bookInfoWrapper.style.display = "block");

const bookInfoWrapper = document.querySelector('#book-info-wrapper');
window.onclick = function(event) {
    if (event.target == bookInfoWrapper) {
        bookInfoWrapper.style.display = "none";
    }
}

const addBookBtn = document.querySelector(".add-book-btn");
addBookBtn.addEventListener('click', addBookToLibrary);

class Book {
    constructor() {
        this.title = form.title.value;
        this.author = form.author.value;
    }
}

let myLibrary = [];
let newBook;

function addBookToLibrary() {
    event.preventDefault();
    newBook = new Book(title, author);
    myLibrary.push(newBook);

    const display = document.getElementById('Library-catalogue');
    const books = document.querySelectorAll(".book");
    books.forEach(book => display.removeChild(book));
    
    for(let i=0; i<myLibrary.length; i++) {
        console.log(createBook(myLibrary[i]));
    }
    form.reset();
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


