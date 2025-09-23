interface Carro { //modelagem de dados
    placa: string;
    cor: string;
    modelo: string;
    direcao?: string; //? dado opcional
}

// const carro1: Carro = { // objeto = conjunto de dados com base em uma modelagem (interface)
//     placa: "44sff",
//     cor: "rosa",
//     modelo: "hb20"
// }

const carros: Carro[] = [
    {placa: "shb43",
        cor:"amarelo",
        modelo: "corsa",
        direcao: "manual",
    }, 
    {placa: "bhs7",
        cor:"roxo",
        modelo: "gol",
    }, 
    {placa: "poe9",
        cor:"cinza",
        modelo: "jeep",
    }
]
function exibirCarro(carro:Carro[]) { // uma acao
    console.log(carro)
}

exibirCarro(carros)

function exibirModelo(modelo?:string) {
        console.log(modelo)
}

exibirModelo(carros[1]?.direcao) // para acessar propriedade de um objeto usar o .