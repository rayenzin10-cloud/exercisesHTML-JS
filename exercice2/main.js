//var todos = [];
var todos = JSON.parse(localStorage.getItem("todos"));
function ajouter() {

    var inputElement = document.getElementById("ajout");
    var val = inputElement.value;



    var task = {
        id: Date.now(),
        value: input,
        date: new Date().toLocaleDateString(),
        completed: false
    };

    todos.push(task);
    localStorage.setItem("todos", JSON.stringify(todos));
    afficher();
    input.value = "";




}


function afficher() {

    var list = document.getElementById("list");
    list.innerHTML = "";

    todos.forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = `${item.value} (${item.date})`;

        list.appendChild(li);
    });
}


function supprimer() {
    if (confirm("supprimer")) {
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        afficher();
    }
}



















