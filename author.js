var Book = require('./book.js');

class Author {
  constructor(authorInfo) {
    this.first = authorInfo.first;
    this.last = authorInfo.last;
    this.books = [];
  }

  write(title, publicationYear) {
    var newBook = new Book();
    newBook.title = 'The House of the Spirits';
    newBook.author = `${this.first} ${this.last}`;
    newBook.publicationYear = 'April 12, 1985';
    this.books.push(newBook);
    return newBook;
  }
}

module.exports = Author;
