const artyom = new Artyom();

const puerta1 = document.getElementById("door1");
const btnAbrirPuerta = document.getElementById("abrir-puerta-uno");
const btnReiniciar = document.getElementById("boton-reiniciar");
const btnPruebaSaludar = document.getElementById("btn-saludar");

btnPruebaSaludar.addEventListener("click", iniciarEscucha);

//Iniciando artyom
function startListening() {
    artyom.initialize({
        lang: "es-ES",
        continuous: true,
        debug: true,
        listen: true
    }).then(() => {
        console.log("Artyom.js está listo para escuchar");
    }).catch((err) => {
        console.error("Ocurrió un error al inicializar Artyom.js: ", err);
    });

    artyom.addCommands([
        {
            indexes: ["buenos días"],
            action: () => {
                artyom.say("¿Cómo estás?");
            }
        },
        {
            indexes: ["dime algo gracioso"],
            action: () => {
                artyom.say("¿Sabías que Omen es Peruano?");
            }
        },
        {
            indexes: ["abrir puerta de la sala"],
            action: () => {
                artyom.say("Abriendo la puerta de la sala");
                abrirPuertaUno();
            }
        },
        {
            indexes: ["cerrar puerta de la sala"],
            action: () => {
                artyom.say("Cerrando la puerta de la sala");
                reiniciar();
            }
        },
        {
            indexes: ["dejar de escuchar"],
            action: () => {
                artyom.say("Deteniendo escucha");
                stopListening();
            }
        }
    ]);

}

//Funciones de la interfaz:

function iniciarEscucha() {
    artyom.say("Escucha inteligente activada");
}

function stopListening() {
    artyom.fatality();
    console.log("Artyom ya no está escuchando");
}

function abrirPuertaUno() {
    console.log("Rotando");
    puerta1.style.transform = "rotate(60deg)";
}

btnAbrirPuerta.addEventListener("click", abrirPuertaUno);


function reiniciar() {
    puerta1.style.transform = "rotate(0deg)";
}

btnReiniciar.addEventListener("click", reiniciar);