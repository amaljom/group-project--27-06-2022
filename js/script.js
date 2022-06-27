let timer = document.getElementById("timer");


let timerCounter = "00 : 00 : 00 : 00";

stampa();

const avvia = document.getElementById("avvia");
const pausa = document.getElementById("pausa");
const azzera = document.getElementById("azzera");

let H = 0;
let M = 0;
let S = 0;
let C = 0;


let ore = 0;
let min = 0;
let sec = 0;
let cent = 0;

console.log(pausa)
let clock;




clock = setInterval(function() {}, 10);

console.log('inizia');


avvia.addEventListener('click', function() {
    clock = setInterval(aggiungiUnita, 10);
});

function aggiungiUnita() {
    C++;
    if (C < 10) {
        cent = `0${C}`;
    } else if (C > 9) {
        cent = C + 1;
    }

    if (S < 10) {
        sec = `0${S}`;
    } else if (S > 9) {
        sec = S;
    }
    if (M < 10) {
        min = `0${M}`;
    } else if (M > 9) {
        min = M;
    }
    if (H < 10) {
        ore = `0${H}`;
    } else if (H > 9) {
        ore = H;
    }


    if (C > 99) {
        C = 0;
        S++;
    }
    if (S > 59) {
        S = 0;
        M++;
    }
    if (M > 59) {
        M = 0;
        H++;
    }
    timerCounter = `${ore} : ${min} : ${sec} : ${cent}`;
    stampa();
};

function stampa() {
    timer.innerHTML = timerCounter
}

pausa.addEventListener('click', function() {
    clearInterval(clock);
});


azzera.addEventListener('click', function() {
    H = 0;
    M = 0;
    S = 0;
    C = 0;

    timerCounter = `0${H} : 0${M} : 0${S} : 0${C}`;
    stampa();
});