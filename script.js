// Alternar entre os jogadores

let nome1 = "";
let nome2 = "";

const botao = document.getElementById("submit");
botao.addEventListener("click", (pegarNome) => {
    const nomeJogador1 = document.getElementById("play1").value;
    const nomeJogador2 = document.getElementById("play2").value;
    nome1 = nomeJogador1;
    nome2 = nomeJogador2;
});

// Construir tabela 7x6

const map = [[], [], [], [], [], [], []];
let idLinha = 0;
let cont = 0;
for (let i = 0; i < 7; i++) {
    let linha = document.createElement("div");
    linha.className = "linha";
    linha.id = "linha" + idLinha;
    idLinha++;
    linha.style.border = "1px solid red";
    linha.style.height = "300px";
    linha.style.width = "50px";
    let destino = document.getElementById("containerJogo");
    destino.appendChild(linha);

    cont++;
}

// Colocar disco na map ao comando
const linha1 = document.querySelectorAll(".linha");
let jogador1 = true;
let player = document.getElementById("jogador");
player.innerText = "Jogador 1";

linhaId = document.querySelectorAll(".linha").forEach((linha1) =>
    linha1.addEventListener("click", () => {
        if (linha1.childElementCount < 6) {
            let disco = document.createElement("div");
            let coluna = linha1.id.substr(linha1.id.length - 1);
            disco.style.width = "48px";
            disco.style.height = "48px";

            if (jogador1) {
                disco.style.background = "black";
                disco.classList.add("preto");
                map[coluna].push("P");
                player.innerText = frases() + nome2;
            } else {
                disco.style.background = "red";
                disco.classList.add("vermelho");
                map[coluna].push("V");
                player.innerText = frases() + nome1;
            }
            disco.style.borderRadius = "100%";
            linha1.appendChild(disco);
        }
        checkHorizontal();
        checkVertical();
        checkDiagonais();
        jogador1 = !jogador1;
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
            if (
                cell === map[i + 1][j] &&
                cell === map[i + 2][j] &&
                cell === map[i + 3][j]
            ) {
                console.log("i = " + i + " / j = " + j);
                if (jogador1) {
                    console.log("Jogador 1: Vitória horizontal!");
                } else {
                    console.log("Jogador 2: Vitória horizontal!");
                }
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
                if (jogador1) {
                    console.log("Jogador 1: Vitória vertical!");
                } else {
                    console.log("Jogador 2: Vitória vertical!");
                }
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
                    if (jogador1) {
                        console.log("Jogador 1: Vitória diagonal esquerda!");
                    } else {
                        console.log("Jogador 2: Vitória diagonal esquerda!");
                    }
                }
            }
        }
    }
    for (let i = 3; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = map[i][j];
            if (cell !== undefined) {
                if (
                    cell === map[i - 1][j + 1] &&
                    cell === map[i - 2][j + 2] &&
                    cell === map[i - 3][j + 3]
                ) {
                    if (jogador1) {
                        console.log("Jogador 1: Vitória diagonal direita!");
                    } else {
                        console.log("Jogador 2: Vitória diagonal direita!");
                    }
                }
            }
        }
    }
};
