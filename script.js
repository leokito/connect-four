// Alternar entre os jogadores
function setted() {
    let nomecitos = document.getElementById('test')
    nomecitos.style.display = 'none'
    console.log('oi fui executada')
}
let nome1 = "Jogador 1";
let nome2 = "Jogador 2";


const botao = document.getElementById("submit")
botao.addEventListener("click", pegarNome => {
    const nomeJogador1 = document.getElementById("play1").value;
    const nomeJogador2 = document.getElementById("play2").value;
    nome1 = nomeJogador1;
    nome2 = nomeJogador2;
    setted()
    
})


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
                    player.innerText = frases() + nome1
                }else{
                    disco.style.background = 'red'
                    map[0].push('O')
                    player.innerHTML = ''
                    player.innerText = frases() + nome2
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

// frases para os jogadores
function frases() {
    switch (Math.floor((Math.random() * 7) + 1)) {
        case 1:
            return "Sua vez, "
        case 2:
            return "Acabe com isso, "
        case 3:
            return "Escolha com sabedoria, "
        case 4:
            return "Mostre como se faz, "
        case 5:
            return "Faça o movimento que te levará para a vitória, "
        case 6:
            return "Vamos lá, "
        case 7:
            return "Em frente, "
       }
}



// Checar condição de vitória