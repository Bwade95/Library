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

let bookLibrary = [];

function addBookToLibrary() {
    event.preventDefault();

    let newBook = new Book(title, author, pages, finished);
    bookLibrary.push(newBook);

    storeData();
    updateDisplay();
    form.reset();
}

function updateDisplay() {
    const display = document.getElementById('library-catalogue');
    const books = document.querySelectorAll(".book");
    books.forEach(book => display.removeChild(book));

    for(let i=0; i<bookLibrary.length; i++) {
        createBook(bookLibrary[i]);
    }
}

// Creates web-card storing book information
function createBook(item) {
    // Creates divs and elements for book info
    library = document.querySelector('#library-catalogue');
    

    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', bookLibrary.indexOf(item));

    const titleDiv = document.createElement('div');
    titleDiv.textContent = "Title: " + item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);
    console.log(titleDiv.textContent);

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

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    bookDiv.append(removeBtn);
    removeBtn.textContent = "Remove";

    library.appendChild(bookDiv);
    
    finishedBtn.addEventListener('click', () => {
        item.finished = !item.finished
        updateDisplay();
    })
    
    removeBtn.addEventListener('click', () => {
        bookLibrary.splice(bookLibrary.indexOf(item),1);
        updateDisplay();
    })
}

function storeData() {
    localStorage.setItem('Library', JSON.stringify(bookLibrary));
}

function recoverData() {
    if (!localStorage.bookLibrary) {
        updateDisplay();
    } else {
        let objects = JSON.parse(localStorage.getItem('Library'));
        bookLibrary = objects;
        console.log(bookLibrary);
        updateDisplay();
    }
}

function closeModal() {
    bookInfoWrapper.style.display = "none";
}

recoverData();

