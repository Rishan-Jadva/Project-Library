const myLibrary = [];

function Book(name, type, pages, read){
    this.name = name;
    this.type = type;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book){
    myLibrary.push(book);
    display(myLibrary);
}

function display(array){
    const container = document.getElementById("container");
    container.textContent = '';
    array.forEach((element, index) => {
        const newBook = document.createElement('div');
        newBook.classList.add('book');

        const nameElement = document.createElement('p');
        nameElement.textContent = `Name: ${element.name}`;

        const typeElement = document.createElement('p');
        typeElement.textContent = `Type: ${element.type}`;

        const pagesElement = document.createElement('p');
        pagesElement.textContent = `Pages: ${element.pages}`;

        const readElement = document.createElement('p');
        const readText = element.read === false ? "No" : "Yes";
        readElement.textContent = `Read?: ${readText}`;

        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Toggle Read';
        toggleButton.addEventListener('click', () => {
            toggleReadState(index);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () =>{
            removeBook(index);
        })

        newBook.appendChild(nameElement);
        newBook.appendChild(typeElement);
        newBook.appendChild(pagesElement);
        newBook.appendChild(readElement);
        newBook.appendChild(toggleButton);
        newBook.appendChild(deleteButton);

        container.appendChild(newBook);
    });
}

function toggleReadState(index) {
    myLibrary[index].read = !myLibrary[index].read;
    display(myLibrary);
}

function removeBook(index){
    myLibrary.splice(index, 1);
    display(myLibrary);
}

const showDialog = document.getElementById("showDialog");
const dialog = document.getElementById("dialog");
showDialog.addEventListener("click", (e)=>{
    dialog.showModal();
})

const closeDialog = document.getElementById("closeDialog");
closeDialog.addEventListener("click", (e) => {
    dialog.close();
})

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", (e) => {
    e.preventDefault();

    const authorInput = document.getElementById("author");
    const titleInput = document.getElementById("title");
    const pagesInput = document.getElementById("pages");
    const readInput = document.getElementById("read");

    const newerBook = new Book(authorInput.value, titleInput.value, pagesInput.value,readInput.checked);
    addBookToLibrary(newerBook);

    authorInput.value = '';
    titleInput.value = '';
    pagesInput.value = '';
    readInput.checked = false;

    dialog.close();
    display(myLibrary);
})