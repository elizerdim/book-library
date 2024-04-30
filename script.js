const newBookBtn = document.getElementById('new-book-btn');
const booksDisplay = document.getElementById('books');
const newBookModal = document.getElementById('new-book-modal');
const newBookForm = document.getElementById('new-book-form');
const titleInput = document.getElementById('new-book-title');
const authorInput = document.getElementById('new-book-author');
const pagesInput = document.getElementById('new-book-pages');
const readInput = document.getElementById('new-book-read');
const notReadInput = document.getElementById('new-book-not-read');
const addBookBtn = document.getElementById('add-book-btn');
const cancelAddBookBtn = document.getElementById('cancel-add-book-btn');

const library = [];

let newBookTitle;
let newBookAuthor;
let newBookPages;
let newBookRead;

function displayBooks(books) {
  booksDisplay.innerHTML = '';

  books.forEach(
    ({ title, author, pages, read }) => {
      booksDisplay.innerHTML += `
        <article class="book">
          <h2 class="book-title">${title}</h2>
          <p class="book-author">by ${author}</p>
          <p class="book-pages">${pages} pages</p>
          <button type="button" class="book-read-btn">${read ? "Read" : "Not read"}</button>
        </article>
      `
    }
  )
}

// TODO: Add functionality to book-read-btn buttons

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook() {
  const newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);
  library.push(newBook);
  displayBooks(library);
  resetInputValues();
  newBookModal.close();
}

function resetInputValues() {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = null;
  readInput.checked = false;
  notReadInput.checked = false;
}

newBookBtn.addEventListener('click', () => {
  newBookModal.showModal();
})

newBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
})

cancelAddBookBtn.addEventListener('click', () => {
  resetInputValues();
  newBookModal.close();
})

titleInput.addEventListener('change', (e) => {
  newBookTitle = e.target.value;
})

authorInput.addEventListener('change', (e) => {
  newBookAuthor = e.target.value;
})

pagesInput.addEventListener('change', (e) => {
  newBookPages = e.target.value;
})

readInput.addEventListener('change', (e) => {
  if (e.target.checked === true) {
    newBookRead = true;
  }
})

notReadInput.addEventListener('change', (e) => {
  if (e.target.checked === true) {
    newBookRead = false;
  }
})