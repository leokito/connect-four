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

// Alternar entre os jogadores

// Checar condição de vitória

// Colocar disco na tabela ao comando

// Alternar entre os jogadores

// Checar condição de vitória