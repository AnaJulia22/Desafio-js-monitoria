class Book {
    constructor(title, author, description, id) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.id = id;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.Id = 1;
    }

    addBook(bookInfo){
        const book = new Book(bookInfo.title, bookInfo.author, bookInfo.description, this.Id);
        this.books.push(book);
        this.Id++; 
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

const library = new Library();
    
library.addBook({
    title: "Book 1",
    description: "Book 1 description",
    author: "Book 1 author",
});
    
library.addBook({
    title: "Book 2",
    description: "Book 2 description",
    author: "Book 2 author",
});

library.addBook({
  title: "Book 3",
  description: "Book 3 description",
  author: "Book 3 author",
});
    
console.log(library.getBooks());
    
library.updateBookById(0, {
      title: "New title",
      description: "New description",
      author: "New author",
});
    
console.log(library.getBooks());

console.log(library.getBookById(1));

library.removeBookById(1);

console.log(library.getBooks());
