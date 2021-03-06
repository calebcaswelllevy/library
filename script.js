



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

// initialize myLibrary
let myLibrary;

//load from localstorage if possible
if (!(localStorage.getItem('library'))) {
    
    //initialize to empty array
    myLibrary = [];

    //add some starter books
    myLibrary.push(new Book("Grapes of Wrath", "steinbeck", "100", "yes"));
    myLibrary.push(new Book("East of Eden", "Steinbeck", "100", "no"));
    myLibrary.push(new Book("Blood Meridian", "McArthy", "100", "yes"));
    
    //save to local storage
    localStorage.setItem('library',  JSON.stringify(myLibrary));

} else { 
    // retrieve previous library from storage
    myLibrary = JSON.parse(localStorage.getItem('library'));
}

// add book to library
function addBookToLibrary(book, library) {
    library.push(book);
}


function showBooks(myLibrary) {
    //creates html list to show library object

    // holder for the html list:
    const stacks = document.getElementById('books');
    stacks.innerHTML = "";
  

    for (let i =0; i< myLibrary.length; i++){
        
        //create a row for each book
        let bookTile = document.createElement('tr');
        
        //give id and class
        bookTile.classList.add("bookTile");
        bookTile.id = i;

        //
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
            removeBook(myLibrary, i)};
        
        
     
        buttonCell.appendChild(button);
        removeCell.appendChild(remove);
        bookTile.appendChild(buttonCell);
        bookTile.appendChild(removeCell);
        stacks.appendChild(bookTile);
    }
}

// change read status
function toggleRead(book) {
    // if its yes, change to no
    if (book.read.toLowerCase() === "yes") { 
        book.read = "no";
    }
    else// its no, so change to yes
     {
        book.read = "yes";
    }
    
    localStorage.setItem('library',  JSON.stringify(myLibrary));
    showBooks(myLibrary);
}
// delete book from library
function removeBook(library, i){
    
    //Splice out book i
    library.splice(i, 1);

    //update the HTML table
    showBooks(library);

    //update local storage
    localStorage.setItem('library',  JSON.stringify(myLibrary));

}
// open and close the form
function openForm() {
    document.getElementById("bookAdder").style.display = "block";
  }
  function closeForm() {
    document.getElementById("bookAdder").style.display = "none";
  }

 /*
 /// FIREBASE
  //Get Elements
  const preObject = document.getElementById('library')

  //Create db reference
  const dbRef = firebase.database().ref('library');
  
  // create button reference
  let submit = document.getElementById("submit");
  
  submit.addEventListener('click', () => {
      let title = document.getElementById("title").value;
      let author = document.getElementById("author").value;
      let pages = document.getElementById("pages").value;
      let read = document.getElementById("read").value;
  
      saveBook();
  }
  );
  //Sync object changes
  dbRef.on('value', snap => console.log(snap.val()));

  //Save messages to Firebase
  function saveBook(title, author, pages, read) {
      let newdbRef = dbRef.push()
      newdbRef.set({
        title:title,
        author:author,
        pages:pages,
        read:read
      })
  }
*/
showBooks(myLibrary);