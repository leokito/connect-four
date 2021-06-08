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
   
    
    cont++
}

// Colocar disco na tabela ao comando
const linha1 = document.querySelectorAll('.linha')
let auxcolor = 0


linhaId =  document.querySelectorAll(".linha").forEach(linha1 => 
    linha1.addEventListener("click", () => {
            
            if(linha1.childElementCount < 6){
                
                let disco = document.createElement('div')
                disco.style.width = '48px'
                disco.style.height = '48px'
                if (auxcolor % 2 === 0){
                    disco.style.background = 'black'
                    map[0].push('x')
                }else{
                    disco.style.background = 'red'
                    map[0].push('O')
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

// Colocar disco na tabela ao comando

// Alternar entre os jogadores

// Checar condição de vitória