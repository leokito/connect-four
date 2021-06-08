let jogador1 = ''
let jogador2 =''

let nomesJogadores = document.getElementById('aceitarNomes')

nomesJogadores.addEventListener('click', (evente) =>{
    let jogador1Campo = document.getElementById('nomeJogadorUm')
    let jogador2Campo = document.getElementById('nomeJogadorDois')
    jogador1 = jogador1Campo.value
    jogador2 = jogador2Campo.value 
    let player = document.getElementById('jogador')
    player.innerText = `É a vez do ${jogador1}` 
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
for(let i = 0 ; i < 7 ; i++){
    let linha = document.createElement('div')
    linha.className = 'linha'
    linha.id = 'linha' + idLinha
    if (i % 2 === 0){
        linha.style.background = 'lightgray'
    }
    idLinha ++
    let destino = document.getElementById('containerJogo')
    destino.appendChild(linha)
}


const linha1 = document.querySelectorAll('.linha')
let auxcolor = 0




//Função que detecta a coluna clicada e adiciona um disco na mesma
linhaId =  document.querySelectorAll(".linha").forEach(linha1 => 
    linha1.addEventListener("click", () => {
            let disco = document.createElement('div')
            disco.className = 'disco'
            if(linha1.childElementCount < 6){
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    if (linha1.id ==='linha0'){
                        map[0].push('x')
                    }else if (linha1.id === 'linha1'){
                        map[1].push('x')
                    }else if (linha1.id === 'linha2'){
                        map[2].push('x')
                    }else if (linha1.id === 'linha3'){
                        map[3].push('x')
                    }else if (linha1.id === 'linha4'){
                        map[4].push('x')
                    }else if (linha1.id === 'linha5'){
                        map[5].push('x')
                    }else if (linha1.id === 'linha6'){
                        map[6].push('x')
                    }
                    
                }else{
                    disco.style.background = 'red'
                    if (linha1.id ==='linha0'){
                        map[0].push('O')
                    }else if (linha1.id === 'linha1'){
                        map[1].push('O')
                    }else if (linha1.id === 'linha2'){
                        map[2].push('O')
                    }else if (linha1.id === 'linha3'){
                        map[3].push('O')
                    }else if (linha1.id === 'linha4'){
                        map[4].push('O')
                    }else if (linha1.id === 'linha5'){
                        map[5].push('O')
                    }else if (linha1.id === 'linha6'){
                        map[6].push('O')
                    }
                }
                linha1.appendChild(disco)
            }
            
            auxcolor ++

            checkarVitoria(map)
        }
    )
  )

function checkarVitoria(map){
    for (let i = 0 ; i < map.length ; i ++){
        for(let j = 0 ; j < map[i].length ; j++){
            //Vertical para preto
            if (map[i][j] === 'x' && map[i][j+1] === 'x' && map[i][j+2] === 'x' && map[i][j+3] === 'x'){
                console.log('vitoria vertical preto')
            }
            //vertical para vermelho
            else if(map[i][j] === 'O' && map[i][j+1] === 'O' && map[i][j+2] === 'O' && map[i][j+3] === 'O'){
                console.log('vitoria vertical vermelho')
            }
            //Horizontal para preto
            if(map[i][j] === 'x' && map[i+1][j] === 'x' && map[i+2][j] === 'x' && map[i+3][j] === 'x'){
                console.log('vitoria horizontal preto')
            }
            //Horizontal vermelho
            else if (map[i][j] === 'O' && map[i+1][j] === 'O' && map[i+2][j] === 'O' && map[i+3][j] === 'O'){
                console.log('vitoria horizontal Vermelho')
            }
            //Diagonal para preto
            if(map[i][j] === 'x' && map[i+1][j+1] === 'x' && map[i+2][j+2] === 'x' && map[i+3][j+3] === 'x'){
                console.log('vitoria diagonal preto')
            }
            //Diagonal para vermelho
            else if (map[i][j] === 'O' && map[i+1][j+1] === 'O' && map[i+2][j+2] === 'O' && map[i+3][j+3] === 'O'){
                console.log('vitoria diagonal vermelho')
            }
            
        }
    }
    for (let i = 6 ; i > 0 ; i--){
        for (let j = 0 ; j < 5 ; j++){
            if(map[i][j] === 'x' && map[i-1][j+1] === 'x' && map[i-2][j+2] === 'x' && map[i-3][j+3] === 'x'){
                console.log('vitoria diagonal inversa vermelho')
            }
        }
    }

}



// Colocar disco na tabela ao comando   

// Alternar entre os jogadores

// Checar condição de vitória

