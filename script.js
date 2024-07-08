const newBookBtn = document.getElementById('new-book-btn');
const booksDisplay = document.getElementById('books');
// Remove book modal
const toggleReadBtns = document.getElementsByClassName('toggle-read-status-btn');
const removeBookBtns = document.getElementsByClassName('remove-book-btn');
const removeBookModal = document.getElementById('remove-book-modal');
const removeBtn = document.getElementById('remove-btn');
const cancelRemoveBtn = document.getElementById('cancel-remove-btn');
// New book modal
const newBookModal = document.getElementById('new-book-modal');
const newBookForm = document.getElementById('new-book-form');
const titleInput = document.getElementById('new-book-title');
const authorInput = document.getElementById('new-book-author');
const pagesInput = document.getElementById('new-book-pages');
const readInput = document.getElementById('new-book-read');
const notReadInput = document.getElementById('new-book-not-read');
const addBookBtn = document.getElementById('add-book-btn');
const cancelAddBookBtn = document.getElementById('cancel-add-book-btn');
// Discard changes modal 
const discardChangesModal = document.getElementById('discard-changes-modal');
const discardChangesBtn = document.getElementById('discard-changes-btn');
const cancelDiscardChangesBtn = document.getElementById('cancel-discard-changes-btn');

// Book class
class Book {
  id = Date.now() + Math.random();
  
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }

  toggleReadStatus() {
    this.readStatus = !this.readStatus;
  }

  addToLibrary(library) {
    library.unshift(this);
  }

  removeFromLibrary(id, library) {
    const bookIndex = library.findIndex(book => book.id === id);
    library.splice(bookIndex, 1);
  }
}

// Retrieve books from localStorage and display
const library = JSON.parse(localStorage.getItem('books')) || [];
library.forEach(book => Object.setPrototypeOf(book, Book.prototype))

if (library.length) {
  displayBooks(library);
}

function displayBooks(books) {
  booksDisplay.innerHTML = '';

  books.forEach(
    book => {
      booksDisplay.innerHTML += `
        <article class="book" id="${book.id}">
          <h2 class="book-title">${book.title}</h2>
          <p class="book-author">by ${book.author}</p>
          <p class="book-pages">${book.pages} pages</p>
          <button type="button" class="toggle-read-status-btn">${book.readStatus ? "Read" : "Not read"}</button>
          <button type="button" class="remove-book-btn">Remove</button>
        </article>
      `
    }
  );

  // Add event listeners to the buttons created above
  [...toggleReadBtns].forEach(btn => btn.addEventListener('click', (e) => {
    const bookId = Number(e.target.parentElement.id);
    const book = library.find(book => book.id === bookId);
    book.toggleReadStatus();
    btn.innerText = book.readStatus ? "Read" : "Not read";
    localStorage.setItem('books', JSON.stringify(library));
  }));

  [...removeBookBtns].forEach(btn => btn.addEventListener('click', (e) => {
    removeBookModal.show();
    bookIdToRemove = Number(e.target.parentElement.id);
  }))
}

// Remove book modal logic
let bookIdToRemove;

removeBtn.addEventListener('click', () => {
  console.log(library);
  const book = library.find(book => book.id === bookIdToRemove);
  console.log(book);
  book.removeFromLibrary(bookIdToRemove, library);
  displayBooks(library);
  console.log(library);
  localStorage.setItem('books', JSON.stringify(library));
  removeBookModal.close();
});

cancelRemoveBtn.addEventListener('click', () => {
  removeBookModal.close();
});

// New book modal logic
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
  const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
  newBook.addToLibrary(library);
  localStorage.setItem('books', JSON.stringify(library));
  displayBooks(library);
  resetInputValues();
  newBookModal.close();
})

cancelAddBookBtn.addEventListener('click', () => {
  const inputsContainValues = 
    titleInput.value ||
    authorInput.value ||
    pagesInput.value ||
    readInput.checked ||
    notReadInput.checked;

  if (inputsContainValues) {
    discardChangesModal.showModal();
  } else {
    newBookModal.close();
  }
})

// Discard changes modal logic
discardChangesBtn.addEventListener('click', () => {
  resetInputValues();
  discardChangesModal.close();
  newBookModal.close();
})

cancelDiscardChangesBtn.addEventListener('click', () => {
  discardChangesModal.close();
})