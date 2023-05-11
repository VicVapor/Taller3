const activarDeteccion = document.getElementById("objectDetection");
const detectionButtons = document.getElementById("detectionButtons");

activarDeteccion.addEventListener("change", function () {
    if (this.checked) {
        detectionButtons.style.display = "block";
    } else {
        detectionButtons.style.display = "none";
    }
});

let video = null;
let detector = null;
let detections = [];
let videoVisibility = true;
let detecting = false;
let aprobador=true;

const videoAction = document.getElementById('videoAction');
const detectionAction = document.getElementById('detectionAction');

document.body.style.cursor = 'wait';

function preload() {
    detector = ml5.objectDetector('cocossd');
}

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(640, 480);

}

function draw() {
    if (!video || !detecting) return;
    image(video, 0, 0);
    for (let i = 0; i < detections.length; i++) {
        drawResult(detections[i]);
    }
}

function drawResult(object) {
    boundingBox(object);
    drawLabel(object);
}

function boundingBox(object) {
    stroke('blue');
    strokeWeight(6);
    noFill();
    rect(object.x, object.y, object.width, object.height);
}

function drawLabel(object) {
    noStroke();
    fill('white');
    textSize(34);
    text(object.label, object.x + 15, object.y + 34);
}

function onDetected(error, results) {
    if (error) {
        console.error(error);
    }
    detections = results;
    try {
        if (detections[0].label === "person" && aprobador===true) {
            alert("Persona detectada");
            aprobador=false;
        }else if (detections[0].label === "dog" && aprobador===true){
            alert("Perrito detectado");
            aprobador=false;
        }
    } catch (e) {
        console.log(e);
    }


    if (detecting) {
        detect();
    }
}

function detect() {
    detector.detect(video, onDetected);
}

function toggleVideo() {
    if (!video) return;
    if (videoVisibility) {
        video.hide();
        videoAction.innerText = 'Activar Video';
    } else {
        video.show();
        videoAction.innerText = 'Desactivar Video';
    }
    videoVisibility = !videoVisibility;
}

function toggleDetecting() {
    if (!video || !detector) return;
    if (!detecting) {
        detect();
        detectionAction.innerText = 'Parar...';
    } else {
        detectionAction.innerText = 'Detectar Objetos';
    }
    detecting = !detecting;
}
