// Alternar entre os jogadores e MODAL

const modaldevs = document.querySelector(".modal-devs");
const astro = document.getElementById("astronauta");

function aparecerModal() {
    modaldevs.classList.remove("hidden");
    modaldevs.classList.add("animation-devs-right");
    astro.classList.remove("animation");
}

function desaparecerModal() {
    modaldevs.classList.add("hidden");
    modaldevs.classList.remove("animation-devs-right");
    astro.classList.add("animation");
}

const icone = document.getElementById("icone");
const devs = document.getElementById("sobreOsDevs");
devs.addEventListener("click", aparecerModal);
icone.addEventListener("click", desaparecerModal);

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
let corJogador1 = "";
let corJogador2 = "";

// Desabilitar opção de cor já escolhida pelo outro jogador
const options1 = document.getElementById("corJogador1").getElementsByTagName('option');
const options2 = document.getElementById("corJogador2").getElementsByTagName('option');
const dropdown1 = document.getElementById("corJogador1");
const dropdown2 = document.getElementById("corJogador2");

dropdown1.addEventListener('click', () => {
    const cor1 = dropdown1.value;
    for(let i = 0; i < options2.length; i++){
        options2[i].disabled = false;
        options2[i].classList.remove('disabled');
        if(cor1 === options2[i].value){
            options2[i].disabled = true;
            options2[i].classList.add('disabled');
        }
    }
})
dropdown2.addEventListener('click', () => {
    const cor2 = dropdown2.value;
    for(let i = 0; i < options1.length; i++){
        options1[i].disabled = false;
        options1[i].classList.remove('disabled');
        if(cor2 === options1[i].value){
            options1[i].disabled = true;
            options1[i].classList.add('disabled');
        }
    }
})

const botao = document.getElementById("submit");
botao.addEventListener("click", (pegarNome) => {
    const nomeJogador1 = document.getElementById("play1").value;
    const nomeJogador2 = document.getElementById("play2").value;
    const cor1 = document.getElementById('corJogador1').value
    const cor2 = document.getElementById('corJogador2').value

    corJogador1 = cor1
    corJogador2 = cor2
    nome1 = nomeJogador1;
    nome2 = nomeJogador2;
    bgMusic()
    modal.className = "hidden";
    animation = document.getElementById("astronauta");
    animation.classList.add("animation")
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
                disco.style.background = corJogador1
                map[coluna].push("P");
                player.innerText = frases() + nome2;
                sfx1()
            } else {
                disco.classList.add("Roxo Claro");
                disco.style.background = corJogador2
                map[coluna].push("V");
                player.innerText = frases() + nome1;
                sfx2()
            }
            jogador1 = !jogador1;
            linha1.appendChild(disco);
            animateDisc(disco, linha1);
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
    let size = disco.getBoundingClientRect().width;
    let colHeight = coluna.getBoundingClientRect().height;
    let repetitions = coluna.childElementCount - 1;
    let distance = -colHeight + (repetitions * size);
    let time = 0.5 - (repetitions * 0.05);
    let bounce = -20 + (repetitions * 3.5);
    disco.style.setProperty("--distance", distance + "px");
    disco.style.setProperty("--fall-time", time + "s");
    disco.style.setProperty("--bounce", bounce + "px");
    disco.classList.add("discDrop");
};

function bgMusic() {
    const music = document.getElementById('musica');
    music.volume = 0.0;
    music.play();
    music.loop = true;
  }
  function sfx1() {
    const sound1 = document.getElementById('ost1')
    sound1.play()
  }
  
  function sfx2() {
    const sound2 = document.getElementById('ost2')
    sound2.play()
  }