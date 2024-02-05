function NoppaEri() {
    var eriNro = Math.floor(Math.random() * 6) + 1;
    var kuva = document.getElementById("diceImage");
    kuva.src = "img/" + eriNro + ".png";
    kuva.alt = "Noppa " + eriNro;
}
