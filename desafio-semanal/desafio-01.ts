//Desafio semanal - Semana 1

// Descrição: Cadastro de estudantes e suas aprendizagens
// Você vai criar um mini sistema de registro de estudantes e suas aprendizagens, usando arrays e objetos literais,
// e aplicar funções e condicionais.

// Crie três objetos literais para representar estudantes, com as propriedades:
interface Estudante {
  nome: string;
  cursoId: number; // número que referencia o curso que estudante está fazendo;
  notas: number[]; //array com 3 números;
  mensagem: string;
}

const estudantes: Estudante []= [
{
  nome: "Ayla",
  cursoId: 20,
  notas: [10, 8, 5], //array com 3 números;
  mensagem: "Fériaaaaaas!",
},

{
  nome: "Zaira",
  cursoId: 30,
  notas: [5, 2, 3],
  mensagem: "Me ferrei, vem recuperação",
},

{
  nome: "Dandara",
  cursoId: 10,
  notas: [9, 8, 10],
  mensagem: "50% médica",
},
]

// Crie uma lista de cursos (array de objetos) contendo três cursos, cada um com:
interface Cursos {
  id: number;
  nome: string;
}
const cursos: Cursos[] = [
  {
    id: 10, //número identificador do curso;
    nome: "Medicina", //nome do curso;
  },
  { id: 20, nome: "Jornalismo" },
  { id: 30, nome: "Geografia" },
];

//Crie uma função declarada chamada **mediaEstudante** que receba um objeto estudante 
// e **retorne a média das notas**, somando diretamente os três elementos do array, sem usar loops.

const media = function (estudantes.notas): number {
  return a + b +a 
}
  
function mediaEstudante(estudantes: Estudante): number {
    return media 

}