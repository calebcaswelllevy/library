
//const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
(function() {

//initialize firebase
//firebase.initializeApp({
 //   apiKey: 'AIzaSyApGOFaDj07yo0nMLeOBrytNxD2sHoSSDI',
//    authDomain: 'library-2df85.firebaseapp.com',
//    projectId: 'library-2df85'
//  });
  
  //Get Elements
  const preObject = document.getElementById('library')

  //Create references
  const dbRefObject = firebase.database().ref().child('library');

  //Sync object changes
  dbRefObject.on('value', snap => console.log(snap.val()));

}());
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
myLibrary.push(new Book("East of Eden", "Steinbeck", "100", "no"))
myLibrary.push(new Book("Blood Meridian", "McArthy", "100", "yes"))

function addBookToLibrary(book, library) {
    library.push(book);
}

function showBooks(myLibrary) {
    const stacks = document.getElementById('books');
    stacks.innerHTML = "";
    console.log("now drawing library:", myLibrary, "\n Number of books: ", myLibrary.length)
   
   //need to refactor this to work with table html
   // - create td objects for each element
   // - create tr object to represent book
   // - populate each element with input text
   // - add td elements to tr
   // - add buttons to the end

    for (let i =0; i< myLibrary.length; i++){
        let bookTile = document.createElement('tr');
        bookTile.classList.add("bookTile");
        bookTile.id = i;
            for (let j = 0; j<4; j++) {
                let keys = ['title', 'author', 'pages', 'read']
                let cell = document.createElement('td');
                cell.textContent = myLibrary[i][keys[j]];
                bookTile.appendChild(cell);
            }


        let button = document.createElement('button');
        let remove = document.createElement('button');
        let buttonCell = document.createElement('td');
        let removeCell = document.createElement('td');
        button.textContent = "Toggle read";
        let c = () => {toggleRead(myLibrary[i])};
        button.onclick = c;
        remove.textContent = "Remove";
        button.classList.add("toggle-button", "btn");
        remove.classList.add("cancel", "btn")
        
        remove.onclick = () => {
            console.log("removing");
            removeBook(myLibrary, i)};
        
        
     
        buttonCell.appendChild(button);
        removeCell.appendChild(remove);
        bookTile.appendChild(buttonCell);
        bookTile.appendChild(removeCell);
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
    console.log("Removing book : ", i);
    console.log("lib before = ", library)
    library.splice(i, 1);
    console.log("lib after = ", library)
    showBooks(library);
}

function openForm() {
    document.getElementById("bookAdder").style.display = "block";
  }
  function closeForm() {
    document.getElementById("bookAdder").style.display = "none";
  }



showBooks(myLibrary);