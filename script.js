const library = [];

function displayBooks(books) {
  const booksUI = document.getElementById('books');

  books.forEach(
    ({ title, author, pages, read }) => {
      booksUI.innerHTML += `
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
displayBooks(library);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
