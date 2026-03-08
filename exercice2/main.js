let todos = [];
function ajouter() {

    var input = document.getElementsByTagName("input").value;



    var task = {
        id: 0,
        value: input,
        date: new Date().toISOString(),
        completed: false
    };

    todos.push(task);

    input.value = "";


    afficher();

}


function afficher() {

    let list = document.getElementById("list");
    list.innerHTML = "";

    todos.forEach(function (list) {

        var li = document.createElement("li");
        list.appendChild(li);
    });

}

localStorage.setItem();
localStorage.getItem();

















localStorage.setItem()
localStorage.getItem()

