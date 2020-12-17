let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        let str = "";
        str = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
        return str;
    }
}

function addBookToLibrary(book, library) {
    library.push(book);
}
