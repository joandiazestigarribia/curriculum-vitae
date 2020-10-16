const nombre = "Diaz Estigarribia, Joan Ignacio";

const experiencia = [
    {
        lugar: "Productora audiovisual 'Campamento'",
        periodo: "12/2017 – 02/2018",
        descripción: "Asistencia y logística"
    },
    {
        lugar: "Mini mercado",
        periodo: "2013 – 05/2017",
        descripción: "Atención al público"
    }
];

const estudios = [
    {
        lugar: "Universidad Nacional del Nordeste (UNNE)",
        periodo: "2014 - Presente",
        descripción: "Contador público"
    },
    {
        lugar: "Instituto Adventista de Resistencia U.E.P Nº 42",
        periodo: "2008 - 2012",
        descripción: "Bachiller con orientación en ciencias naturales"
    }
]

const lenguajesAprendiendo = [
    "https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-plain.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/bootstrap/bootstrap-plain.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/visualstudio/visualstudio-plain.svg",
    "https://devicon.dev/devicon.git/icons/java/java-original.svg",
    "https://devicons.github.io/devicon/devicon.git/icons/github/github-original.svg"
]

// cambia el nombre del h1 que contiene el nombre del usuario
var nombreDOM = document.getElementById("name")
nombreDOM.innerText = nombre;

// itineracion que crea los items en "experiencia"
for (i = 0; i < experiencia.length; i++){
    var item = document.createElement("div")
    item.innerHTML = `<div class="d-flex justify-content-between mt-3">
    <span class="card-title h6 exp-title">${experiencia[i].lugar}</span>
    <span class="exp-date">${experiencia[i].periodo}</span>
    </div>
    <p>${experiencia[i].descripción}</p>`
    document.getElementById("experiencia").appendChild(item)
}

// itineracion que crea los items en "estudios"
for (i = 0; i < estudios.length; i++){
    var item = document.createElement("div")
    item.innerHTML = `<div class="d-flex justify-content-between">
    <span class="card-title h6 exp-title">${estudios[i].lugar}</span>
    <span class="exp-date">${estudios[i].periodo}</span>
    </div>
    <p>${estudios[i].descripción}</p>`
    document.getElementById("estudios").appendChild(item)
}

// itineracion que crea los items en "Lenguajes y tecnologías en estudio"
for (i = 0; i < lenguajesAprendiendo.length; i++){
    var item = document.createElement("div")
    item.innerHTML = `<img class="languages" align="left" alt="JavaScript" width="40" src="${lenguajesAprendiendo[i]}" />`
    document.getElementById("lenguajes_aprendiendo").appendChild(item)
}

function printDiv(printeable){
    var printContents = document.getElementById(printeable).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}