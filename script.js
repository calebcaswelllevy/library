
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
        let book = document.createElement('div');
        let bookTile = document.createElement('div');
        bookTile.classList.add("bookTile");
        let button = document.createElement('button');
        let remove = document.createElement('button');
        button.textContent = "Toggle read";
        let c = () => {toggleRead(myLibrary[i])};
        button.onclick = c;
        remove.textContent = "Remove";
        //Need to solve this problem with remove button: it removes book 
        remove.onclick = () => {
            console.log("removing");
            removeBook(myLibrary, i)};
        book.textContent = myLibrary[i].info();
        book.setAttribute('id', i);
        console.log(book.id);
        bookTile.appendChild(book);
        
        bookTile.appendChild(button);
        bookTile.appendChild(remove);
        stacks.appendChild(bookTile);
    }
}

function toggleRead(book) {
    if (book.read.toLowerCase() === "yes") { 
        book.read = "no";
    }
    else// no
     {
        book.read = "yes";
    }
    console.log("toggled")
    showBooks(myLibrary);
}

function removeBook(library, i){
    console.log("lib before = ", myLibrary)
    library.splice(i, 1);
    console.log("lib after = ", myLibrary)
    showBooks();
}

function openForm() {
    document.getElementById("bookAdder").style.display = "block";
  }
  function closeForm() {
    document.getElementById("bookAdder").style.display = "none";
  }



showBooks(myLibrary);