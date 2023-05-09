const artyom = new Artyom();

//Puertas
const puerta1 = document.getElementById("door1");
const puerta2 = document.getElementById("door2");
const puerta3 = document.getElementById("door3");
const puerta4 = document.getElementById("door4");
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
                abrirPuerta(1);
            }
        },
        {
            indexes: ["abrir puerta de la habitación uno"],
            action: () => {
                artyom.say("Abriendo la puerta de la habitación número 1");
                abrirPuerta(2);
            }
        },
        {
            indexes: ["abrir puerta de la habitación dos"],
            action: () => {
                artyom.say("Abriendo la puerta de la habitación número 2");
                abrirPuerta(3);
            }
        },
        {
            indexes: ["abrir puerta de la habitación tres"],
            action: () => {
                artyom.say("Abriendo la puerta de la habitación número 3");
                abrirPuerta(4);
            }
        },
        {
            indexes: ["cerrar puerta de la sala"],
            action: () => {
                artyom.say("Cerrando la puerta de la sala");
                cerrarPuerta(1);
            }
        },
        {
            indexes: ["cerrar puerta de la habitación uno"],
            action: () => {
                artyom.say("Cerrando la puerta de la habitación 1");
                cerrarPuerta(2);
            }
        },
        {
            indexes: ["cerrar puerta de la habitación dos"],
            action: () => {
                artyom.say("Cerrando la puerta de la habitación 2");
                cerrarPuerta(3);
            }
        },
        {
            indexes: ["cerrar puerta de la habitación tres"],
            action: () => {
                artyom.say("Cerrando la puerta de la habitación 3");
                cerrarPuerta(4);
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

function abrirPuerta(puerta) {
    console.log("Rotando");
    switch (puerta) {
        case 1:
            puerta1.style.transform = "rotate(60deg)";
            break;
        case 2:
            puerta2.style.transform = "rotate(60deg)";
            break;
        case 3:
            puerta3.style.transform = "rotate(60deg)";
            break;
        case 4:
            puerta4.style.transform = "rotate(60deg)";
            break;
    }

}

function cerrarPuerta(puerta) {
    switch (puerta) {
        case 1:
            puerta1.style.transform = "rotate(0deg)";
            break;

        case 2:
            puerta2.style.transform = "rotate(0deg)";
            break;
        case 3:
            puerta3.style.transform = "rotate(0deg)";
            break;
        case 4:
            puerta4.style.transform = "rotate(0deg)";
            break;
    }
}
