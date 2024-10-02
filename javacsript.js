var layout=document.querySelector(".popup-overlay")
var detail=document.querySelector(".detail")
var add=document.getElementById("add-button")
var cancel=document.getElementById("cancel")
add.addEventListener("click",function(){
    layout.style.display="block"
    detail.style.display="block"
})
cancel.addEventListener("click",function(event){
    event.preventDefault()
    layout.style.display="none"
detail.style.display="none"
})
var container=document.querySelector(".container")
var book=document.getElementById("book")
var author=document.getElementById("author-name")
var description=document.getElementById("book-description")
var add=document.getElementById("add")
// Assuming you have the following HTML structure:
// <div id="container"></div>
// <button id="add">Add Book</button>


add.addEventListener("click", function (event) {
    event.preventDefault();
    layout.style.display="none"
detail.style.display="none"

    // Create a new book container
    const div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${book.value}</h2>
        <h3>${author.value}</h3>
        <p>${description.value}</p>
        <button type="button" class="btn btn-danger" onclick="del(event)">Delete</button>
    `;

    // Append the new container to the main container
    container.appendChild(div);
});

function del(event) {
    // Assuming the event.target is the delete button
    const bookContainer = event.target.closest(".book-container");
    if (bookContainer) {
        container.removeChild(bookContainer);
    }
}


function del(event)
   {
    event.target.parentElement.remove(event)
   }


