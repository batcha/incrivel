// ============================================================
//  A MELHOR PAGINA DA WWW - EFFECTS.JS
//  JavaScript classsico da era 1999
//  Cursor trail de estrelas + neve de asteriscos + piada do dia
// ============================================================

// --- CURSOR TRAIL DE ESTRELAS ---
var trailChars = ["*", ".", "+", "o", "*", ".", "&#10022;", "&#9733;"];
var trailColors = ["#FFFF00", "#FF00FF", "#00FFFF", "#FF8800", "#00FF00", "#FF0000"];
var trailElements = [];
var TRAIL_LENGTH = 14;

function createTrail() {
    for (var i = 0; i < TRAIL_LENGTH; i++) {
        var el = document.createElement("span");
        el.style.position = "fixed";
        el.style.pointerEvents = "none";
        el.style.zIndex = "9999";
        el.style.fontSize = (10 + Math.floor(Math.random() * 8)) + "px";
        el.style.fontWeight = "bold";
        el.style.opacity = "0";
        el.style.fontFamily = "Courier New, monospace";
        el.style.transition = "opacity 0.3s";
        el.innerHTML = trailChars[i % trailChars.length];
        document.body.appendChild(el);
        trailElements.push({ el: el, x: -100, y: -100, life: 0 });
    }
}

var mouseX = 0, mouseY = 0;
var trailIndex = 0;

document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    var t = trailElements[trailIndex % TRAIL_LENGTH];
    t.el.style.left = (mouseX + Math.floor(Math.random() * 20) - 10) + "px";
    t.el.style.top = (mouseY + Math.floor(Math.random() * 20) - 10) + "px";
    t.el.style.color = trailColors[Math.floor(Math.random() * trailColors.length)];
    t.el.innerHTML = trailChars[Math.floor(Math.random() * trailChars.length)];
    t.el.style.opacity = "1";
    t.life = 18;
    trailIndex++;
});

function animateTrail() {
    for (var i = 0; i < trailElements.length; i++) {
        var t = trailElements[i];
        if (t.life > 0) {
            t.life--;
            t.el.style.opacity = (t.life / 18).toFixed(2);
            t.el.style.top = (parseFloat(t.el.style.top) + 1) + "px";
        } else {
            t.el.style.opacity = "0";
        }
    }
    setTimeout(animateTrail, 40);
}

// --- NEVE DE ASTERISCOS ---
var snowflakes = [];
var SNOW_COUNT = 30;

function createSnow() {
    var snowChars = ["*", "+", ".", "o", "&#10022;"];
    var snowColors = ["#FFFFFF", "#CCCCFF", "#FFFF88", "#AAFFAA"];
    for (var i = 0; i < SNOW_COUNT; i++) {
        var el = document.createElement("span");
        el.style.position = "fixed";
        el.style.pointerEvents = "none";
        el.style.zIndex = "9998";
        el.style.fontSize = (8 + Math.floor(Math.random() * 10)) + "px";
        el.style.fontFamily = "Courier New, monospace";
        el.style.color = snowColors[Math.floor(Math.random() * snowColors.length)];
        el.innerHTML = snowChars[Math.floor(Math.random() * snowChars.length)];
        document.body.appendChild(el);
        snowflakes.push({
            el: el,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight * -1,
            speed: 0.5 + Math.random() * 1.5,
            drift: (Math.random() - 0.5) * 0.5
        });
    }
}

function animateSnow() {
    for (var i = 0; i < snowflakes.length; i++) {
        var s = snowflakes[i];
        s.y += s.speed;
        s.x += s.drift;
        if (s.y > window.innerHeight + 10) {
            s.y = -10;
            s.x = Math.random() * window.innerWidth;
        }
        s.el.style.left = s.x + "px";
        s.el.style.top = s.y + "px";
    }
    setTimeout(animateSnow, 30);
}

// --- PIADA DO DIA ---
var piadas = [
    "Por que o computador foi ao medico?\n\nPorque estava com VIRUS!!!  hahahaha",
    "O que o internauta disse para o modem?\n\nVoce me conecta!!! rs rs rs",
    "Por que o programador usa oculos?\n\nPorque ele nao consegue C#!!!  HAHAHA",
    "O que o HTML disse para o CSS?\n\nVoce me estiliza muito!! kkkkk",
    "Como se chama o cachorro do Bill Gates?\n\nMICROSOFT!!  pow que piada boa!!!"
];

function exibirPiadaDoDia() {
    var el = document.getElementById("piada-do-dia");
    if (el) {
        var idx = Math.floor(Math.random() * piadas.length);
        el.innerHTML = piadas[idx].replace(/\n/g, "<br>");
    }
}

// --- HOROSCOPO MENTIROSO ---
var horoscopo = [
    "ARIES: Hoje sera um dia INCRIVEL para navegar na internet!! Evite baixar arquivos .exe de fontes desconhecidas.",
    "TOURO: Os astros indicam que seu modem vai cair varias vezes hoje. Tenha paciencia!!",
    "GEMEOS: Voce vai encontrar um site muito legal hoje!! Salve nos Favoritos com ctrl+D!!",
    "CANCER: Cuidado com emails de desconhecidos!! Podem ser VIRUS!!!",
    "LEAO: Otimo dia para criar sua pagina no Geocities!! Os astros estao a seu favor.",
    "VIRGEM: Seu ICQ vai ficar desconectando hoje. Eh a Mercury em retrogrado.",
    "LIBRA: Hoje voce vai receber uma corrente importante!! NAO QUEBRE A CORRENTE!!",
    "ESCORPIAO: Os astros dizem que voce vai ganhar na loteria! (nao garantimos nada hehe)",
    "SAGITARIO: Dia perfeito para instalar o Windows 98!! Faca backup antes.",
    "CAPRICORNIO: Evite o Internet Explorer hoje. Use o Netscape Navigator para proteção.",
    "AQUARIO: Alguem especial vai te mandar um ICQ hoje!! Deixe o status como Disponivel!!",
    "PEIXES: Os astros recomendam mais de 3 horas de internet hoje. Eh obrigatorio!!"
];

function exibirHoroscopo() {
    var el = document.getElementById("horoscopo-texto");
    if (el) {
        var idx = Math.floor(Math.random() * horoscopo.length);
        el.innerHTML = horoscopo[idx];
    }
}

// --- INICIALIZACAO ---
window.onload = function () {
    createTrail();
    animateTrail();
    createSnow();
    animateSnow();
    exibirPiadaDoDia();
    exibirHoroscopo();
};
