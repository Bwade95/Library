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

    display();
    form.reset();
}

function display() {
    const display = document.getElementById('library-catalogue');
    const books = document.querySelectorAll(".book");
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

    const finishedBtn = document.createElement('button');
    finishedBtn.classList.add('finished-btn');
    bookDiv.appendChild(finishedBtn);
    if(item.finished===false) {
        finishedBtn.textContent = "Not Finished";
    } else {
        finishedBtn.textContent = 'Finished';
    }

    library.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item),1);
        display();
    })

    finishedBtn.addEventListener('click', () => {
        item.finished = !item.finished
        display();
    })
}


