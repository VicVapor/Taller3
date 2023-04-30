const puerta1 = document.getElementById("door1");
const btnAbrirPuerta = document.getElementById("abrir-puerta-uno");
const btnReiniciar = document.getElementById("boton-reiniciar");

function abrirPuertaUno() {
    console.log("Rotando");
    puerta1.style.transform = "rotate(60deg)";
}

btnAbrirPuerta.addEventListener("click", abrirPuertaUno);


function reiniciar() {
    puerta1.style.transform = "rotate(0deg)";
}

btnReiniciar.addEventListener("click", reiniciar);