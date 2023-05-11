const artyom = new Artyom();

const activarDeteccionVoz = document.getElementById("voiceDetection");
const detectionButtonsVoz = document.getElementById("voiceButtons");
const btnGuardar = document.getElementById("btn-guardar")
const inputNombre = document.getElementById("nombres");


activarDeteccionVoz.addEventListener("change", function () {
    if (this.checked) {
        detectionButtonsVoz.style.display = "block";
    } else {
        detectionButtonsVoz.style.display = "none";
    }
});

//Puertas
const puerta1 = document.getElementById("door1");
const puerta2 = document.getElementById("door2");
const puerta3 = document.getElementById("door3");
const puerta4 = document.getElementById("door4");
const puerta5 = document.getElementById("door5");
const puerta6 = document.getElementById("door6");
//Ventanas
const ventana1 = document.getElementById("window1");
const ventana2 = document.getElementById("window2");
const ventana3 = document.getElementById("window3");
const ventana4 = document.getElementById("window4");
//Habitaciones
const habitacion1 = document.getElementById("room1");
const habitacion2 = document.getElementById("room2");
const habitacion3 = document.getElementById("room3");
const sala = document.getElementById("living-room");
const cocina = document.getElementById("kitchen");
const banio1 = document.getElementById("restroom1");
const banio2 = document.getElementById("restroom2");
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
            indexes: ["abrir puerta de la sala"],
            action: () => {
                artyom.say("Puerta abierta");
                abrirPuerta(1);
            }
        },
        {
            indexes: ["abrir puerta de la habitación uno"],
            action: () => {
                artyom.say("Puerta abierta");
                abrirPuerta(2);
            }
        },
        {
            indexes: ["abrir puerta de la habitación dos"],
            action: () => {
                artyom.say("Puerta abierta");
                abrirPuerta(3);
            }
        },
        {
            indexes: ["abrir puerta de la habitación tres"],
            action: () => {
                artyom.say("Puerta abierta");
                abrirPuerta(4);
            }
        },
        {
            indexes: ["abrir puerta del baño uno"],
            action: () => {
                artyom.say("Puerta abierta");
                abrirPuerta(5);
            }
        },
        {
            indexes: ["abrir puerta del baño dos"],
            action: () => {
                artyom.say("Puerta abierta");
                abrirPuerta(6);
            }
        },
        {
            indexes: ["cerrar puerta de la sala"],
            action: () => {
                artyom.say("Puerta cerrada");
                cerrarPuerta(1);
            }
        },
        {
            indexes: ["cerrar puerta de la habitación uno"],
            action: () => {
                artyom.say("Puerta cerrada");
                cerrarPuerta(2);
            }
        },
        {
            indexes: ["cerrar puerta de la habitación dos"],
            action: () => {
                artyom.say("Puerta cerrada");
                cerrarPuerta(3);
            }
        },
        {
            indexes: ["cerrar puerta de la habitación tres"],
            action: () => {
                artyom.say("Puerta cerrada");
                cerrarPuerta(4);
            }
        },
        {
            indexes: ["cerrar puerta del baño uno"],
            action: () => {
                artyom.say("Puerta cerrada");
                cerrarPuerta(5);
            }
        },
        {
            indexes: ["cerrar puerta del baño dos"],
            action: () => {
                artyom.say("Puerta cerrada");
                cerrarPuerta(6);
            }
        },
        {
            indexes: ["abrir ventana de la habitación uno"],
            action: () => {
                artyom.say("Ventana abierta");
                abrirVentana(1);
            }
        },
        {
            indexes: ["abrir ventana de la habitación dos"],
            action: () => {
                artyom.say("Ventana abierta");
                abrirVentana(2);
            }
        },
        {
            indexes: ["abrir ventana de la habitación tres"],
            action: () => {
                artyom.say("Ventana abierta");
                abrirVentana(3);
            }
        },
        {
            indexes: ["abrir ventana de la sala"],
            action: () => {
                artyom.say("Ventana abierta");
                abrirVentana(4);
            }
        },
        {
            indexes: ["cerrar ventana de la habitación uno"],
            action: () => {
                artyom.say("Ventana cerrada");
                cerrarVentana(1);
            }
        },
        {
            indexes: ["cerrar ventana de la habitación dos"],
            action: () => {
                artyom.say("Ventana cerrada");
                cerrarVentana(2);
            }
        },
        {
            indexes: ["cerrar ventana de la habitación tres"],
            action: () => {
                artyom.say("Ventana cerrada");
                cerrarVentana(3);
            }
        },
        {
            indexes: ["cerrar ventana de la sala"],
            action: () => {
                artyom.say("Ventana cerrada");
                cerrarVentana(4);
            }
        },
        {
            indexes: ["encender luz de la habitación uno"],
            action: () => {
                artyom.say("Luz encendida");
                encenderLuz(1);
            }
        },
        {
            indexes: ["encender luz de la habitación dos"],
            action: () => {
                artyom.say("Luz encendida");
                encenderLuz(2);
            }
        },
        {
            indexes: ["encender luz de la habitación tres"],
            action: () => {
                artyom.say("Luz encendida");
                encenderLuz(3);
            }
        },
        {
            indexes: ["encender luz de la sala"],
            action: () => {
                artyom.say("Luz encendida");
                encenderLuz(4);
            }
        },
        {
            indexes: ["encender luz de la cocina"],
            action: () => {
                artyom.say("Luz encendida");
                encenderLuz(5);
            }
        },
        {
            indexes: ["encender luz del baño uno"],
            action: () => {
                artyom.say("Luz encendida");
                encenderLuz(6);
            }
        },
        {
            indexes: ["encender luz del baño dos"],
            action: () => {
                artyom.say("Luz encendida");
                encenderLuz(7);
            }
        },
        {
            indexes: ["apagar luz de la habitación uno"],
            action: () => {
                artyom.say("Luz apagada");
                apagarLuz(1);
            }
        },
        {
            indexes: ["apagar luz de la habitación dos"],
            action: () => {
                artyom.say("Luz apagada");
                apagarLuz(2);
            }
        },
        {
            indexes: ["apagar luz de la habitación tres"],
            action: () => {
                artyom.say("Luz apagada");
                apagarLuz(3);
            }
        },
        {
            indexes: ["apagar luz de la sala"],
            action: () => {
                artyom.say("Luz apagada");
                apagarLuz(4);
            }
        },
        {
            indexes: ["apagar luz de la cocina"],
            action: () => {
                artyom.say("Luz apagada");
                apagarLuz(5);
            }
        },
        {
            indexes: ["apagar luz del baño uno"],
            action: () => {
                artyom.say("Luz apagada");
                apagarLuz(6);
            }
        },
        {
            indexes: ["apagar luz del baño dos"],
            action: () => {
                artyom.say("Luz apagada");
                apagarLuz(7);
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
        case 5:
            puerta5.style.transform = "rotate(60deg)";
            break;
        case 6:
            puerta6.style.transform = "rotate(60deg)";
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
        case 5:
            puerta5.style.transform = "rotate(0deg)";
            break;
        case 6:
            puerta6.style.transform = "rotate(0deg)";
            break;
    }
}

function abrirVentana(ventana) {
    switch (ventana) {
        case 1:
            ventana1.style.transform = "scaleX(0.5)";
            // ventana1.style.transformOrigin = "100% 50%";
            break;
        case 2:
            ventana2.style.transform = "scaleX(0.5)";
            // ventana1.style.transformOrigin = "100% 50%";
            break;
        case 3:
            ventana3.style.transform = "scaleX(0.5)";
            // ventana1.style.transformOrigin = "100% 50%";
            break;
        case 4:
            ventana4.style.transform = "scaleX(0.5)";
            // ventana1.style.transformOrigin = "100% 50%";
            break;
    }
}

function cerrarVentana(ventana) {
    switch (ventana) {
        case 1:
            ventana1.style.transform = "scaleX(1)";
            // ventana1.style.transformOrigin = "100% 50%";
            break;
        case 2:
            ventana2.style.transform = "scaleX(1)";
            // ventana1.style.transformOrigin = "100% 50%";
            break;
        case 3:
            ventana3.style.transform = "scaleX(1)";
            // ventana1.style.transformOrigin = "100% 50%";
            break;
        case 4:
            ventana4.style.transform = "scaleX(1)";
            // ventana1.style.transformOrigin = "100% 50%";
            break;
    }
}

function encenderLuz(cuarto) {
    switch (cuarto) {
        case 1:
            habitacion1.style.backgroundColor = "rgba(255, 255, 0, 0.5)";
            break;
        case 2:
            habitacion2.style.backgroundColor = "rgba(255, 255, 0, 0.5)";
            break;
        case 3:
            habitacion3.style.backgroundColor = "rgba(255, 255, 0, 0.5)";
            break;
        case 4:
            sala.style.backgroundColor = "rgba(255, 255, 0, 0.5)";
            break;
        case 5:
            cocina.style.backgroundColor = "rgba(255, 255, 0, 0.5)";
            break;
        case 6:
            banio1.style.backgroundColor = "rgba(255, 255, 0, 0.5)";
            break;
        case 7:
            banio2.style.backgroundColor = "rgba(255, 255, 0, 0.5)";
            break;
    }
}

function apagarLuz(cuarto) {
    switch (cuarto) {
        case 1:
            habitacion1.style.backgroundColor = "darkolivegreen";
            break;
        case 2:
            habitacion2.style.backgroundColor = "darkolivegreen";
            break;
        case 3:
            habitacion3.style.backgroundColor = "darkolivegreen";
            break;
        case 4:
            sala.style.backgroundColor = "dimgrey";
            break;
        case 5:
            cocina.style.backgroundColor = "gray";
            break;
        case 6:
            banio1.style.backgroundColor = "deepskyblue";
            break;
        case 7:
            banio2.style.backgroundColor = "deepskyblue";
            break;
    }
}