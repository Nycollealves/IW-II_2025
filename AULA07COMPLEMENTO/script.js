// Seleciona os elementos
const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");
const statusElement = document.getElementById("status");


let lampadaLigada = false;


function ligarLampada() {
    if (!lampadaLigada) {
        lampada.src = "img/lâmpadaon.png";
        lampada.alt = "Lâmpada Ligada";
        lampadaLigada = true;
        atualizarBotoes();
        statusElement.textContent = "Lâmpada ligada";
    }
}

function desligarLampada() {
    if (lampadaLigada) {
        lampada.src = "img/lampadaoff.png";
        lampada.alt = "Lâmpada Desligada";
        lampadaLigada = false;
        atualizarBotoes();
        statusElement.textContent = "Lâmpada desligada";
    }
}


function atualizarBotoes() {
    btnLigar.disabled = lampadaLigada;
    btnDesligar.disabled = !lampadaLigada;
}


btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada);


lampada.addEventListener("mouseover", () => {
    if (!lampadaLigada) {
        ligarLampada();
    }
});

lampada.addEventListener("mouseout", () => {
    if (lampadaLigada) {
        desligarLampada();
    }
});


lampada.addEventListener("click", () => {
    if (lampadaLigada) {
        desligarLampada();
    } else {
        ligarLampada();
    }
});


atualizarBotoes();