//Desafio semanal - Semana 1

// Descrição: Cadastro de estudantes e suas aprendizagens
// Você vai criar um mini sistema de registro de
// estudantes e suas aprendizagens, usando arrays e objetos literais,
// e aplicar funções e condicionais.

// propriedades:
interface Estudante {
  nome: string;
  cursoId: number; // número que referencia o curso que estudante está fazendo;
  notas: number[]; //array com 3 números;
}

// Crie uma lista de cursos (array de objetos) contendo três cursos, cada um com:
interface Cursos {
  id: number;
  nome: string;
}
const cursos: Cursos[] = [
  {
    id: 10, //número identificador do curso;
    nome: "Ciência de Dados", //nome do curso;
  },
  { id: 20, nome: "Análise e Desenvolvimento de Sistemas" },
  { id: 30, nome: "Tecnologia da Informação" },
];

// Crie três objetos literais para representar estudantes,
const estudantes: Estudante[] = [
  {
    nome: "Ayla",
    cursoId: 20,
    notas: [2, 8, 8], //array com 3 números;
  },

  {
    nome: "Zaira",
    cursoId: 30,
    notas: [4, 2, 3],
  },

  {
    nome: "Dandara",
    cursoId: 10,
    notas: [9, 8, 10],
  },
];

//Crie uma função declarada chamada **mediaEstudante** que receba um objeto estudante
// e **retorne a média das notas**, somando diretamente os três elementos do array, sem usar loops.

function mediaEstudante(estudante: Estudante): number {
  const notas: number[] = estudante.notas;
  return (notas[0]! + notas[1]! + notas[2]!) / notas.length;
}

// Crie uma função anônima e atribua à **estiloAprendizado** que receba
//     um objeto estudante e retorne uma das seguintes mensagens baseado na
//     média das notas:
//     -   "Exploradora confiante." se a média ≥ 7
//     -   "Brilha como aprendiz." se a média ≥ 5 e \< 7
//     -   "Desbravando a programação." se a média \< 5

const estiloAprendizado = function (estudante: Estudante): string {
  const mediaRecebida = mediaEstudante(estudante);
  if (mediaRecebida >= 7) {
    return "Exploradora confiante.";
  } else if (mediaRecebida >= 5) {
    return "Brilha como aprendiz.";
  } else {
    return "Desbravando a programação.";
  }
};

// -   Adapte a função anterior para **arrow function**, mantendo a mesma lógica e mensagens.
const novoAprendizado = (estudante: Estudante): string => {
  const mediaRecebida = mediaEstudante(estudante);
  if (mediaRecebida >= 7) {
    return "Exploradora confiante.";
  } else if (mediaRecebida >= 5) {
    return "Brilha como aprendiz.";
  } else {
    return "Desbravando a programação.";
  }
};
const novaMensagem = novoAprendizado(estudantes[0]!);
console.log(novaMensagem);
// Use **switch/case** para imprimir o nome de um curso, usando a  propriedade **cursoId** // como referência à lista de cursos.

function exibirCurso(cursoId: number): string {
  switch (cursoId) {
    case 10:
      return "Ciência de Dados";
    case 20:
      return "Análise e Desenvolvimento de Sistemas";
    case 30:
      return "Tecnologia da Informação";
    default:
      return "Curso NÃO encontrado";
  }
}

// Para cada estudante, imprima:
// -   **Nome**
// -   **Nome de um curso**
// -   **Média das notas**
// -   **Mensagem**

//Estudante1
console.log(`Nome:`, estudantes[0]?.nome);
const nomeCurso0 = exibirCurso(estudantes[0]?.cursoId!);
console.log(`Nome do curso:`, nomeCurso0);
const mediaRecebida0 = mediaEstudante(estudantes[0]!);
console.log(`Média:`, mediaRecebida0);
const mensagemRecebida0 = estiloAprendizado(estudantes[0]!);
console.log(`Mensagem:`, mensagemRecebida0);

//Estudante2
console.log(`Nome:`, estudantes[1]?.nome);
const nomeCurso1 = exibirCurso(estudantes[1]?.cursoId!);
console.log(`Nome do curso:`, nomeCurso1);
const mediaRecebida1 = mediaEstudante(estudantes[1]!);
console.log(`Média:`, mediaRecebida1);
const mensagemRecebida1 = estiloAprendizado(estudantes[1]!);
console.log(`Mensagem:`, mensagemRecebida1);

//Estudante3
console.log(`Nome:`, estudantes[2]?.nome);
const nomeCurso2 = exibirCurso(estudantes[2]?.cursoId!);
console.log(`Nome do curso:`, nomeCurso2);
const mediaRecebida2 = mediaEstudante(estudantes[2]!);
console.log(`Média:`, mediaRecebida2);
const mensagemRecebida2 = estiloAprendizado(estudantes[2]!);
console.log(`Mensagem:`, mensagemRecebida2);
