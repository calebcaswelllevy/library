function parseForm(form) {
    //takes elements of form, and stores them as a book, then adds to library
    let newBook = new Book(form.elements[0].value, form.elements[1].value, form.elements[2].value, form.elements[3].value)
    
    //add to library
    addBookToLibrary(newBook, myLibrary);
    
    //update display
    showBooks(myLibrary);
    
    //update localstorage
    localStorage.setItem('library', JSON.stringify(myLibrary));

    closeForm();
  
}
