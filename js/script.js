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
        this.pages = form.pages.value;
        this.finished = form.finished.checked;
    }
}

let myLibrary = [];

function addBookToLibrary() {
    event.preventDefault();
    bookInfoWrapper.style.display = "none";

    let newBook = new Book(title, author, pages, finished);
    myLibrary.push(newBook);

    const display = document.getElementById('library-catalogue');
    const books = document.querySelectorAll(".book");
    console.log(books)
    books.forEach(book => display.removeChild(book));
    console.log(books)

    for(let i=0; i<myLibrary.length; i++) {
        createBook(myLibrary[i]);
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
    titleDiv.textContent = "Title: " + item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);
    console.log(titleDiv.textContent);

    // Stores styling and content of book author
    const authorDiv = document.createElement('div');
    authorDiv.textContent = "Author: " + item.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    const pagesDiv = document.createElement('div');
    pagesDiv.textContent = "Pages: " + item.pages;
    pagesDiv.classList.add('pages');
    bookDiv.appendChild(pagesDiv);

    const finishedDiv = document.createElement('div');
    finishedDiv.classList.add('finished-checkbox');
    bookDiv.appendChild(finishedDiv);
    if(item.finished===false) {
        finishedDiv.textContent = "Not Finished";
    } else {
        finishedDiv.textContent = 'Finished';
    }

    library.appendChild(bookDiv);
}


