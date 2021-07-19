function newNotes() {
    var newnote = document.createElement("DIV");
    newnote.innerHTML = "<h1>" + prompt("name") + "</h1>";
    newnote.setAttribute("style", "background-color: red; width: 100%; height: 10vw")
    document.body.appendChild(newnote)
}