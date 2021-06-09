// Alternar entre os jogadores e MODAL

function travarDestravar() {
    document.getElementById('submit').disabled = true;
    
    if(document.getElementById("play1").value!=="" && document.getElementById("play2").value!=="") { 
           document.getElementById('submit').disabled = false;
       }
   }

   travarDestravar()
   let input1 = document.getElementById("play1");
   let input2 = document.getElementById("play2");
   input1.addEventListener("input", travarDestravar);
   input2.addEventListener("input", travarDestravar);

const modal = document.querySelector('.modal')

let nome1 = "Jogador 1";
let nome2 = "Jogador 2";

const botao = document.getElementById("submit");
botao.addEventListener("click", (pegarNome) => {
    const nomeJogador1 = document.getElementById("play1").value;
    const nomeJogador2 = document.getElementById("play2").value;
    nome1 = nomeJogador1;
    nome2 = nomeJogador2;
    modal.className = "hidden";
});
// Declaração de variáveis
const msgVitoria = document.querySelector(".msgVitoria");
const resetButton = document.getElementById("resetButton");

// Construir tabela 7x6

const map = [[], [], [], [], [], [], []];
let destino = document.getElementById("containerJogo");

for (let i = 0; i < 7; i++) {
    let linha = document.createElement("div");
    linha.className = "linha";
    linha.id = "linha" + i;
    destino.appendChild(linha);
}

// Função de reset
resetButton.addEventListener("click", () => {
    document.querySelectorAll(".linha").forEach((elem) => {
        elem.innerHTML = "";
    });
    for (let i = 0; i < map.length; i++) {
        map[i] = [];
    }
    jogador1 = true;
    msgVitoria.classList.remove("showElement");
});

// Colocar disco na map ao comando
const linha1 = document.querySelectorAll(".linha");
let jogador1 = true;
let player = document.getElementById("jogador");
player.innerText = "Jogador 1";
let element = document.querySelector("discDrop");

linhaId = document.querySelectorAll(".linha").forEach((linha1) =>
    linha1.addEventListener("click", () => {
        if (linha1.childElementCount < 6) {
            let disco = document.createElement("div");
            let coluna = linha1.id.substr(linha1.id.length - 1);
            disco.classList.add("disco");

            if (jogador1) {
                disco.classList.add("preto");
                map[coluna].push("P");
                player.innerText = frases() + nome2;
            } else {
                disco.classList.add("vermelho");
                map[coluna].push("V");
                player.innerText = frases() + nome1;
            }
            animateDisc(disco, linha1);
            jogador1 = !jogador1;
            linha1.appendChild(disco);
        }
        checkHorizontal();
        checkVertical();
        checkDiagonais();
        checkEmpate();
    })
);
// Alternar entre os jogadores
// frases para os jogadores
function frases() {
    switch (Math.floor(Math.random() * 7 + 1)) {
        case 1:
            return "Sua vez, ";
        case 2:
            return "Acabe com isso, ";
        case 3:
            return "Escolha com sabedoria, ";
        case 4:
            return "Mostre como se faz, ";
        case 5:
            return "Atenção aos seus movimentos, ";
        case 6:
            return "Vamos lá, ";
        case 7:
            return "Em frente, ";
    }
}

// Checar condição de vitória

const checkHorizontal = () => {
    for (let i = 0; i < map.length - 3; i++) {
        for (let j = 0; j < map[i].length; j++) {
            let cell = map[i][j];
            if (
                cell === map[i + 1][j] &&
                cell === map[i + 2][j] &&
                cell === map[i + 3][j]
            ) {
                if (!jogador1) {
                    msgVitoria.style.setProperty(
                        "--player-name",
                        "'" + nome1 + ", você venceu!'"
                    );
                } else {
                    msgVitoria.style.setProperty(
                        "--player-name",
                        "'" + nome2 + ", você venceu!'"
                    );
                }
                msgVitoria.classList.add("showElement");
            }
        }
    }
};

const checkVertical = () => {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length - 3; j++) {
            let cell = map[i][j];
            if (
                cell === map[i][j + 1] &&
                cell === map[i][j + 2] &&
                cell === map[i][j + 3]
            ) {
                if (!jogador1) {
                    msgVitoria.style.setProperty(
                        "--player-name",
                        "'" + nome1 + ", você venceu!'"
                    );
                } else {
                    msgVitoria.style.setProperty(
                        "--player-name",
                        "'" + nome2 + ", você venceu!'"
                    );
                }
                msgVitoria.classList.add("showElement");
            }
        }
    }
};

const checkDiagonais = () => {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = map[i][j];
            if (cell !== undefined) {
                if (
                    cell === map[i + 1][j + 1] &&
                    cell === map[i + 2][j + 2] &&
                    cell === map[i + 3][j + 3]
                ) {
                    if (!jogador1) {
                        msgVitoria.style.setProperty(
                            "--player-name",
                            "'" + nome1 + ", você venceu!'"
                        );
                    } else {
                        msgVitoria.style.setProperty(
                            "--player-name",
                            "'" + nome2 + ", você venceu!'"
                        );
                    }
                    msgVitoria.classList.add("showElement");
                }
            }
        }
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 3; j < map[i].length; j++) {
            let cell = map[i][j];
            if (cell !== undefined) {
                if (
                    cell === map[i + 1][j - 1] &&
                    cell === map[i + 2][j - 2] &&
                    cell === map[i + 3][j - 3]
                ) {
                    if (!jogador1) {
                        msgVitoria.style.setProperty(
                            "--player-name",
                            "'" + nome1 + ", você venceu!'"
                        );
                    } else {
                        msgVitoria.style.setProperty(
                            "--player-name",
                            "'" + nome2 + ", você venceu!'"
                        );
                    }
                    msgVitoria.classList.add("showElement");
                }
            }
        }
    }
};

const checkEmpate = () => {
    if (map.every((elem) => elem.length >= 6)) {
        msgVitoria.style.setProperty("--player-name", "'Que pena! Empatou!'");
        msgVitoria.classList.add("showElement");
    }
};

// Função para animar os discos de forma dinâmica

const animateDisc = (disco, coluna) => {
    let distance = -300 + coluna.childElementCount * 50;
    let time = 0.5 - coluna.childElementCount * 0.05;
    let bounce = -20 + coluna.childElementCount * 3.5;
    disco.style.setProperty("--distance", distance + "px");
    disco.style.setProperty("--fall-time", time + "s");
    disco.style.setProperty("--bounce", bounce + "px");
    disco.classList.add("discDrop");
};
