
class Book { // for book objects in the library
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = () => {
            let str = "";
            str = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
            return str;
        };
    }
}

let myLibrary = [];// to hold books as an array of objects
myLibrary.push(new Book("Grapes of Wrath", "steinbeck", "100", "yes"))

function addBookToLibrary(book, library) {
    library.push(book);
}

function showBooks(myLibrary) {
    const stacks = document.getElementById('stacks');
    stacks.innerHTML = "";
    for (let i =0; i< myLibrary.length; i++){
        let book = document.createElement('div')
        book.textContent = myLibrary[i].info();
        stacks.appendChild(book);
    }
}

function openForm() {
    document.getElementById("bookAdder").style.display = "block";
  }
  function closeForm() {
    document.getElementById("bookAdder").style.display = "none";
  }

function parseForm(form) {
    //takes elements of form, and stores them as a book, then adds to library
    let newBook = new Book(form.elements[0].value, form.elements[1].value, form.elements[2].value, form.elements[3].value)
    
    addBookToLibrary(newBook, myLibrary);
    
    showBooks(myLibrary);

    console.log("this is running")
  
}

showBooks(myLibrary);