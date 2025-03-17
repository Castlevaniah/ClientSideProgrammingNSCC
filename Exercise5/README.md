# HelpMe File for Library System

## Library System (Book, Librarian, Library)

### 1. Book Object

#### Description:
The `book` object represents a book in the library.

#### Properties:
- `title` (String) – The title of the book (e.g., "Life of Pi").
- `author` (String) – The author's name (e.g., "Yann Martel").
- `available` (Boolean) – Whether the book is available for borrowing (initially `true`).

#### Methods:
- `getDetails()`: Returns book details in the format:
  ```javascript
  "Title: Life of Pi, Author: Yann Martel"
  ```
- `borrowBook()`: Changes `available` to `false` if not already borrowed, otherwise informs that the book is unavailable.
- `returnBook()`: Changes `available` to `true` if borrowed, otherwise informs that the book is already available.

#### Example Usage:
```javascript
let book = {
    title: "Life of Pi",
    author: "Yann Martel",
    available: true,

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}`;
    },

    borrowBook() {
        if (this.available) {
            this.available = false;
            return "Book borrowed successfully!";
        } else {
            return "Sorry, this book has already been borrowed.";
        }
    },

    returnBook() {
        if (!this.available) {
            this.available = true;
            return "Book returned successfully!";
        } else {
            return "The book is already available.";
        }
    }
};

console.log(book.getDetails());
console.log(book.borrowBook());
console.log(book.borrowBook());
console.log(book.returnBook());
```

---

### 2. Librarian Object

#### Description:
The `librarian` object represents a librarian managing the library.

#### Properties:
- `firstName` (String) – Librarian's first name (e.g., "Sarah").
- `lastName` (String) – Librarian's last name (e.g., "Smith").
- `_shift` (String) – Current shift, initially set to "morning".

#### Methods:
- `fullName` (Getter): Returns the librarian's full name.
- `shift` (Setter): Updates shift to "morning" or "evening" only.
- `shift` (Getter): Returns the current shift.

#### Example Usage:
```javascript
let librarian = {
    firstName: "Sarah",
    lastName: "Smith",
    _shift: "morning",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set shift(newShift) {
        if (newShift === "morning" || newShift === "evening") {
            this._shift = newShift;
        } else {
            console.log("Invalid shift. Please enter 'morning' or 'evening'.");
        }
    },

    get shift() {
        return this._shift;
    }
};

console.log(librarian.fullName);
librarian.shift = "night";
librarian.shift = "evening";
console.log(librarian.shift);
```

---

### 3. Library Object

#### Description:
The `library` object manages the collection of books and the assigned librarian.

#### Properties:
- `books` (Array) – Stores book objects.
- `librarian` (Object) – The librarian managing the library.

#### Methods:
- `addBook(newBook)`: Adds a book to the `books` array.
- `listAvailableBooks()`: Returns an array of available book titles.

#### Example Usage:
```javascript
let library = {
    books: [],
    librarian: librarian,

    addBook(newBook) {
        this.books.push(newBook);
    },

    listAvailableBooks() {
        return this.books.filter(book => book.available).map(book => book.title);
    }
};

library.addBook({ title: "Life of Pi", author: "Yann Martel", available: true });
library.addBook({ title: "Introduction to JavaScript", author: "John Doe", available: false });
library.addBook({ title: "The Catcher in the Rye", author: "J.D. Salinger", available: true });

console.log(library.listAvailableBooks());
```

---

### Notes:
- Ensure that `shift` is set only to "morning" or "evening".
- `borrowBook()` and `returnBook()` modify the `available` property accordingly.
- The library stores books in an array and allows retrieval of available books.

