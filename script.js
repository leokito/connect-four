// Alternar entre os jogadores

let nome1 = "Jogador 1";
let nome2 = "Jogador 2";

const botao = document.getElementById("submit");
botao.addEventListener("click", (pegarNome) => {
    const nomeJogador1 = document.getElementById("play1").value;
    const nomeJogador2 = document.getElementById("play2").value;
    nome1 = nomeJogador1;
    nome2 = nomeJogador2;
});
// Declaração de variáveis
const msgVitoria = document.querySelector('.msgVitoria');
const resetButton = document.getElementById('resetButton');

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
resetButton.addEventListener('click', () => {
    document.querySelectorAll('.linha').forEach((elem) => {
        elem.innerHTML = '';
    });
    for(let i = 0; i < map.length; i++){
        map[i] = [];
    }
    jogador1 = true;
    msgVitoria.classList.remove('showElement');
})

// Colocar disco na map ao comando
const linha1 = document.querySelectorAll(".linha");
let jogador1 = true;
let player = document.getElementById("jogador");
player.innerText = "Jogador 1";
let element = document.querySelector('discDrop');

linhaId = document.querySelectorAll(".linha").forEach((linha1) =>
    linha1.addEventListener("click", () => {
        if (linha1.childElementCount < 6) {
            let disco = document.createElement("div");
            let coluna = linha1.id.substr(linha1.id.length - 1);
            disco.classList.add('disco');

            if (jogador1) {
                disco.classList.add("preto");
                map[coluna].push("P");
                player.innerText = frases() + nome2;
            } else {
                disco.classList.add("vermelho");
                map[coluna].push("V");
                player.innerText = frases() + nome1;
            }
            let distance = -300+(linha1.childElementCount*50);
            let time = 0.5-(linha1.childElementCount*0.05);
            disco.style.setProperty('--distance', distance+'px');
            disco.style.setProperty('--fall-time', time+'s');
            jogador1 = !jogador1;
            linha1.appendChild(disco);
            disco.classList.add('discDrop');
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
            return "Faça o movimento que te levará para a vitória, ";
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
            if (cell === map[i + 1][j] && cell === map[i + 2][j] && cell === map[i + 3][j]) {
                if (!jogador1) {
                    msgVitoria.style.setProperty('--player-name' , "'"+nome1+", você venceu!'");
                } else {
                    msgVitoria.style.setProperty('--player-name' , "'"+nome2+", você venceu!'");
                }
                msgVitoria.classList.add('showElement');
            }
        }
    }
};

const checkVertical = () => {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length - 3; j++) {
            let cell = map[i][j];
            if (cell === map[i][j + 1] && cell === map[i][j + 2] && cell === map[i][j + 3]) {
                if (!jogador1) {
                    msgVitoria.style.setProperty('--player-name' , "'"+nome1+", você venceu!'");
                } else {
                    msgVitoria.style.setProperty('--player-name' , "'"+nome2+", você venceu!'");
                }
                msgVitoria.classList.add('showElement');
            }
        }
    }
};

const checkDiagonais = () => {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = map[i][j];
            if (cell !== undefined) {
                if (cell === map[i + 1][j + 1] && cell === map[i + 2][j + 2] && cell === map[i + 3][j + 3]) {
                    if (!jogador1) {
                        msgVitoria.style.setProperty('--player-name' , "'"+nome1+", você venceu!'");
                    } else {
                        msgVitoria.style.setProperty('--player-name' , "'"+nome2+", você venceu!'");
                    }
                    msgVitoria.classList.add('showElement');
                }
            }
        }
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 3; j < map[i].length; j++) {
            let cell = map[i][j];
            if (cell !== undefined) {
                if (cell === map[i + 1][j - 1] && cell === map[i + 2][j - 2] && cell === map[i + 3][j - 3]) {
                    if (!jogador1) {
                        msgVitoria.style.setProperty('--player-name' , "'"+nome1+", você venceu!'");
                    } else {
                        msgVitoria.style.setProperty('--player-name' , "'"+nome2+", você venceu!'");
                    }
                    msgVitoria.classList.add('showElement');
                }
            }
        }
    }
};

const checkEmpate = () => {
    if(map.every((elem) => elem.length >= 6)){
        msgVitoria.style.setProperty('--player-name' , "'Que pena! Empatou!'");
        msgVitoria.classList.add('showElement');
    };
}