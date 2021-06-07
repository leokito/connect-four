// Construir tabela 7x6

// Colocar disco na tabela ao comando

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
console.log(tabela);

for (let i = 0; i < tabela.length; i++) {
    for (let j = 0; j < tabela[i].length - 3; j++) {
        let cell = tabela[i][j];
        if (cell !== 0) {
            if (
                tabela[i]
                    .slice(j, j + 4)
                    .every((elem) => elem === 1 || elem === 2)
            ) {
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
