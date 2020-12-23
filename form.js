function parseForm(form) {
    //takes elements of form, and stores them as a book, then adds to library
    let newBook = new Book(form.elements[0].value, form.elements[1].value, form.elements[2].value, form.elements[3].value)
    
    addBookToLibrary(newBook, myLibrary);
    
    showBooks(myLibrary);
    closeForm();
    console.log("this is running")
  
}
