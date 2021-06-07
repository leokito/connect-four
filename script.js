// Construir tabela 7x6 
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
    for (let j = 0 ; j < 6; j++){
        let bloco = document.createElement('div')
        bloco.style.width = '48px'
        bloco.style.height = '48px'
        bloco.style.border = '1px solid green'
        bloco.className = 'bloco'
        let destino = document.getElementById('linha' + cont)
        destino.appendChild(bloco)
    }
    cont++
}


// Colocar disco na tabela ao comando
const linha1 = document.querySelectorAll('.linha')
let auxcolor = 0


linhaId =  document.querySelectorAll(".linha").forEach(linha1 => 
    linha1.addEventListener("click", () => {
            
            let linhaId = linha1.id
            if(linhaId === 'linha0' && linha1.childElementCount < 7){
                let coluna = document.getElementById('linha0')
                let disco = document.createElement('div')
                disco.style.width = '40px'
                disco.style.height = '40px'
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    map[0].push('x')
                }else{
                    disco.style.background = 'red'
                    map[0].push('O')
                }
                disco.style.borderRadius = '100%'
                coluna.appendChild(disco)
            }
            if(linhaId === 'linha1' && linha1.childElementCount < 7){
                let coluna = document.getElementById('linha1')
                let disco = document.createElement('div')
                disco.style.width = '40px'
                disco.style.height = '40px'
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    map[1].push('x')
                }else{
                    disco.style.background = 'red'
                    map[1].push('O')
                }
                disco.style.borderRadius = '100%'
                coluna.appendChild(disco)
            }
            if(linhaId === 'linha2' && linha1.childElementCount < 7){
                let coluna = document.getElementById('linha2')
                let disco = document.createElement('div')
                disco.style.width = '40px'
                disco.style.height = '40px'
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    map[2].push('x')
                }else{
                    disco.style.background = 'red'
                    map[2].push('O')
                }
                disco.style.borderRadius = '100%'
                coluna.appendChild(disco)
            }
            if(linhaId === 'linha3' && linha1.childElementCount < 7){
                let coluna = document.getElementById('linha3')
                let disco = document.createElement('div')
                disco.style.width = '40px'
                disco.style.height = '40px'
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    map[3].push('x')
                }else{
                    disco.style.background = 'red'
                    map[3].push('O')
                }
                disco.style.borderRadius = '100%'
                coluna.appendChild(disco)
            }
            if(linhaId === 'linha4' && linha1.childElementCount < 7){
                let coluna = document.getElementById('linha4')
                let disco = document.createElement('div')
                disco.style.width = '40px'
                disco.style.height = '40px'
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    map[4].push('x')
                }else{
                    disco.style.background = 'red'
                    map[4].push('O')
                }

                disco.style.borderRadius = '100%'
                coluna.appendChild(disco)
            }
            if(linhaId === 'linha5' && linha1.childElementCount < 7){
                let coluna = document.getElementById('linha5')
                let disco = document.createElement('div')
                disco.style.width = '40px'
                disco.style.height = '40px'
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    map[5].push('x')
                }else{
                    disco.style.background = 'red'
                    map[5].push('O')
                }
                disco.style.borderRadius = '100%'
                coluna.appendChild(disco)
            }
            if(linhaId === 'linha6' && linha1.childElementCount < 7){
                let coluna = document.getElementById('linha6')
                let disco = document.createElement('div')
                disco.style.width = '40px'
                disco.style.height = '40px'
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    map[6].push('x')
                }else{
                    disco.style.background = 'red'
                    map[6].push('O')
                }
                disco.style.borderRadius = '100%'
                coluna.appendChild(disco)
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

// Colocar disco na tabela ao comando

// Alternar entre os jogadores

// Checar condição de vitória