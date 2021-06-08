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
            let linhaId = linha1.id
            if(linhaId === 'linha0' && linha1.childElementCount < 6){
                let coluna = document.getElementById('linha0')
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    map[0].push('x')
                }else{
                    disco.style.background = 'red'
                    map[0].push('O')
                }
                coluna.appendChild(disco)
            }
            if(linhaId === 'linha1' && linha1.childElementCount < 6){
                let coluna = document.getElementById('linha1')
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    map[1].push('x')
                }else{
                    disco.style.background = 'red'
                    map[1].push('O')
                }
                coluna.appendChild(disco)
            }
            if(linhaId === 'linha2' && linha1.childElementCount < 6){
                let coluna = document.getElementById('linha2')
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    map[2].push('x')
                }else{
                    disco.style.background = 'red'
                    map[2].push('O')
                }
                coluna.appendChild(disco)
            }
            if(linhaId === 'linha3' && linha1.childElementCount < 6){
                let coluna = document.getElementById('linha3')
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    map[3].push('x')
                }else{
                    disco.style.background = 'red'
                    map[3].push('O')
                }
                coluna.appendChild(disco)
            }
            if(linhaId === 'linha4' && linha1.childElementCount < 6){
                let coluna = document.getElementById('linha4')
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    map[4].push('x')
                }else{
                    disco.style.background = 'red'
                    map[4].push('O')
                }
                coluna.appendChild(disco)
            }
            if(linhaId === 'linha5' && linha1.childElementCount < 6){
                let coluna = document.getElementById('linha5')
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    map[5].push('x')
                }else{
                    disco.style.background = 'red'
                    map[5].push('O')
                }
                coluna.appendChild(disco)
            }
            if(linhaId === 'linha6' && linha1.childElementCount < 6){
                let coluna = document.getElementById('linha6')
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    map[6].push('x')
                }else{
                    disco.style.background = 'red'
                    map[6].push('O')
                }
                coluna.appendChild(disco)
            }
            auxcolor ++

            checkarVitoria(map)
        }
    )
  )

function colocarDisco(){
    
}



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

}



// Colocar disco na tabela ao comando   

// Alternar entre os jogadores

// Checar condição de vitória

