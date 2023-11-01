class Book {
    constructor(title, author, description) {
        this.title = title;
        this.author = author;
        this.description = description;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(bookInfo){
        const book = new Book(bookInfo.title, bookInfo.author, bookInfo.description);
        this.books.push(book);
        return book;
    }

    getBooks() {
        return this.books;
    }

    removeBookById(id) {
        
        this.books.splice(id, 1);
        
    }
    
    getBookById(id) {
        return this.books[id];
      }
    
    updateBookById(id, info) {
        const book = this.getBookById(id);
        if (book) {
          if (info.title) {
            book.title = info.title;
          }
          if (info.description) {
            book.description = info.description;
          }
          if (info.author) {
            book.author = info.author;
          }
          return book;
        }
        return null;
      }
    }
