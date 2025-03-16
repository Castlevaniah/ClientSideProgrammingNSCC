/* 1. Create a book Object

//Define an object book with:
title (String) – e.g., "Life of Pi"
author (String) – e.g., "Yann Martel"
available (Boolean) – initially true

Add the following methods:
getDetails() → Returns "Title: Life of Pi, Author: Yann Martel"
borrowBook() → Changes available to false if not already borrowed.
returnBook() → Changes available to true if borrowed.
*/
let book = {
    title: "Life of Pi",
    author: "Yann Martel",
    available: true,

    // Returns book details
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}`;
    },

    // Borrow the book if available
    borrowBook() {
        if (this.available) {
            this.available = false;
            return "Book borrowed successfully!";
        } else {
            return "Sorry, this book has already been borrowed.";
        }
    },

    // Return the book if it is borrowed
    returnBook() {
        if (!this.available) {
            this.available = true;
            return "Book returned successfully!";
        } else {
            return "The book is already available.";
        }
    }
};

//TEST: Book methods
console.log(book.getDetails());// Output: "Title: Life of Pi, Author: Yann Martel"
console.log(book.borrowBook());// Output: "Book borrowed successfully!"
console.log(book.borrowBook());// Output: "Sorry, the book is already borrowed."
console.log(book.returnBook());// Output: "Book returned successfully!" 


// 2. Create the librarian Object

//Define an object librarian with:
//firstName (String) – e.g., "Sarah"
//lastName (String) – e.g., "Smith"
//_shift (String) – initially "morning"

//Add the following methods:
//Getter fullName → Returns "Sarah Smith"
//Setter shift → Accepts only "morning" or "evening"

let librarian = {
    firstName: "Sarah",
    lastName: "Smith",
    _shift: "morning",

    // Getter for Full Name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Setter for Shift
    set shift(newShift) {
        if (newShift === "morning" || newShift === "evening") {
            this._shift = newShift;
        } else {
            console.log("Invalid shift. Please enter 'morning' or 'evening'.");
        }
    },

    // Getter for current shift
    get shift() {
        return this._shift;
    }
};

//TEST: Librarian methods
console.log(librarian.fullName);// Output: "Sarah Smith"
librarian.shift = "night";// Invalid shift -> logs error message
librarian.shift = "evening";// Valid shift
console.log(librarian.shift);// Output: "evening"

// 3️⃣ Create the library Object

//Define an object library with:
//books (Array) – Stores book objects 
//librarian (Object) – Assign the librarian object to this property

//Add the following methods:
//addBook(newBook) → Adds a book to the books array.
//listAvailableBooks() → Returns an array of book titles that are available.

let library = {
    books: [],
    librarian: librarian,

    // Adds a new book to the library
    addBook(newBook) {
        this.books.push(newBook);
    },

    // Returns an array of titles for available books
    listAvailableBooks() {
        return this.books.filter(book => book.available).map(book => book.title);
    }
};

//TEST: Adding books and listing available ones
library.addBook({ title: "Life of Pi", author: "Yann Martel", available: true });
library.addBook({ title: "Introduction to JavaScript", author: "John Doe", available: false });
library.addBook({ title: "The Catcher in the Rye", author: "J.D. Salinger", available: true });

console.log(library.listAvailableBooks());//Output: ["Life of Pi", "The Catcher in the Rye"]