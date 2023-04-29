const puerta1 = document.getElementById("door1");
let angle = 0;
let incremento = 1;
let intervalo = 10;

let intervaloID = setInterval(abrirPuertaUno, intervalo);

function abrirPuertaUno() {
    console.log("Rotando");
    angle += incremento;
    puerta1.style.transform = "rotate(" + angle + "deg";
    if (angle >= 45) {
        clearInterval(intervaloID);
    }
}

function reiniciar() {
    puerta1.style.transform = "rotate(0deg)";
}
