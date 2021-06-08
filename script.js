// Construir tabela 7x6 

const map = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
]
let idLinha = 0
let cont = 0
for(let i = 0 ; i < 7 ; i++){
    let linha = document.createElement('div')
    linha.className = 'linha'
    linha.id = 'linha' + idLinha
    idLinha ++
    linha.style.border = '1px solid red'
    linha.style.height = '300px'
    linha.style.width = '50px'
    let destino = document.getElementById('containerJogo')
    destino.appendChild(linha)
       
    cont++
}

// Colocar disco na tabela ao comando
const linha1 = document.querySelectorAll('.linha')
let auxcolor = 0
let player = document.getElementById('jogador')
player.innerText = 'Jogador 1'

linhaId =  document.querySelectorAll(".linha").forEach(linha1 => 
    linha1.addEventListener("click", () => {
            
            if(linha1.childElementCount < 6){
                
                let disco = document.createElement('div')
                disco.style.width = '48px'
                disco.style.height = '48px'
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    map[0].push('x')
                    player.innerText = 'Jogador 2'
                }else{
                    disco.style.background = 'red'
                    map[0].push('O')
                    player.innerHTML = ''
                    player.innerText = 'Jogador 1'
                }
                disco.style.borderRadius = '100%'
                linha1.appendChild(disco)
            }
           
            auxcolor ++
            //Condição de vitoria 
            for (let i = 0 ; i < map.length ; i ++){
                for(let j = 0 ; j < map[i].length ; j++){
                    if (map[i][j] === 'x' && map[i][j+1] === 'x' && map[i][j+2] === 'x' && map[i][j+3] === 'x'){
                        console.log('vitoria')
                    }
                    
                }
            }
            
        }
    )
  )
// Alternar entre os jogadores

// Checar condição de vitória

let tabela = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

for (let i = 0; i < tabela.length; i++) {
    for (let j = 0; j < tabela[i].length - 3; j++) {
        let cell = tabela[i][j];
        if (cell !== 0) {
            if (tabela[i].slice(j, j + 4).every((elem) => elem === 1 || elem === 2)) {
                console.log("i = " + i + " / j = " + j);
                if (cell === 1) {
                    console.log("Jogador 1: Vitória horizontal!");
                } else if (cell === 2) {
                    console.log("Jogador 2: Vitória horizontal!");
                }
            }
        }
    }
}

for (let i = 0; i < tabela.length - 3; i++) {
    for (let j = 0; j < tabela[i].length; j++) {
        let cell = tabela[i][j];
        if (tabela[i][j] !== 0) {
            if (cell === tabela[i + 1][j] && cell === tabela[i + 2][j] && cell === tabela[i + 3][j]) {
                console.log("i = " + i + " / j = " + j);
                if (cell === 1) {
                    console.log("Jogador 1: Vitória vertical!");
                } else if (cell === 2) {
                    console.log("Jogador 2: Vitória vertical!");
                }
            }
        }
    }
}

for (let i = 0; i < tabela.length - 3; i++) {
    for (let j = 0; j < tabela[i].length - 3; j++) {
        let cell = tabela[i][j];
        if (cell !== 0) {
            if (cell === tabela[i + 1][j + 1] && cell === tabela[i + 2][j + 2] && cell === tabela[i + 3][j + 3]) {
                console.log("i = " + i + " / j = " + j);
                if (cell === 1) {
                    console.log("Jogador 1: Vitória diagonal direita!");
                } else if (cell === 2) {
                    console.log("Jogador 2: Vitória diagonal direita!");
                }
            }
        }
    }
}

for (let i = 3; i < tabela.length; i++) {
    for (let j = 0; j < tabela[i].length - 3; j++) {
        let cell = tabela[i][j];
        if (cell !== 0) {
            if (cell === tabela[i - 1][j + 1] && cell === tabela[i - 2][j + 2] && cell === tabela[i - 3][j + 3]) {
                console.log("i = " + i + " / j = " + j);
                if (cell === 1) {
                    console.log("Jogador 1: Vitória diagonal esquerda!");
                } else if (cell === 2) {
                    console.log("Jogador 2: Vitória diagonal esquerda!");
                }
            }
        }
    }
}
