while (true) {

    var theme = prompt("ajouter couleur ");

    if (theme === "green" || theme === "blue" || theme === "red") {
        break;
    }

    alert("erreur");
}

if (theme === "green") {

    document.body.style.backgroundColor = "#36f436ff";
    document.body.style.color = "green";
    document.querySelector("div").style.borderColor = "#023c06ff";

    document.getElementById("message").textContent = "Green theme";
    document.getElementById("image").src = "vert.jpg";

}

else if (theme === "blue") {

    document.body.style.backgroundColor = "#54a4fbff";
    document.body.style.color = "#003e9cff";
    document.querySelector("div").style.borderColor = "#001f4eff";

    document.getElementById("message").textContent = "Blue theme";
    document.getElementById("image").src = "blue.jpg";

}

else if (theme === "red") {

    document.body.style.backgroundColor = "#ff4545ff";
    document.body.style.color = "red";
    document.querySelector("div").style.borderColor = "#4d0707ff";

    document.getElementById("message").textContent = "Red theme";
    document.getElementById("image").src = "rouge.png";

}
