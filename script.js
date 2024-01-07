const myLibrary = [
    {
        name: "left",
        type: "right"
    },
    {
        name: "top",
        type: "bottom"
    }
];

function Book(){

}

function addBookToLibrary(){

}

function display(array){
    array.forEach(element => {
        console.log(element)
    });
}

display(myLibrary);