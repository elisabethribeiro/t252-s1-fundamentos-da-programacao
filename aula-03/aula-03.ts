// Descrição: Limpeza e Resumo de Dados de Pesquisas
// Você trabalha como analista de dados em uma empresa de tecnologia. O time de pesquisa enviou uma planilha com respostas de usuários sobre um novo aplicativo.
// Cada registro de resposta tem:
// id: número identificador da resposta;
// usuario: nome do usuário que respondeu;
// notaSatisfacao: número de 1 a 5;
// duplicado: boolean que indica se a resposta é duplicada.
// comentario: string com o comentário do usuário.

interface RespostaPesquisa {
  id: number;
  usuario: string;
  notaSatisfacao: number;
  duplicado: boolean;
  comentario: string;
}

const respostas: RespostaPesquisa[] = [
    {
    id: 1,
    usuario: "Thais",
    notaSatisfacao: 5,
    duplicado: false,
    comentario: "Amei o app!"
}, {
    id: 1,
    usuario: "Thais",
    notaSatisfacao: 5,
    duplicado: false,
    comentario: "Amei o app!"
}, 
  { id: 2, 
    usuario:"Jessica",
    notaSatisfacao: 2, 
    duplicado: false, 
    comentario: "Poderia ser mais rápido." },
{
    id: 3,
    usuario: "Thais",
    notaSatisfacao: 5,
    duplicado: true,
    comentario: "Amei o app!"
}, 
  { id: 4, 
    usuario:"Ana bia",
    notaSatisfacao: 4, 
    duplicado: false, 
    comentario: "Curti a navegação."},

  { id: 5, 
    usuario:"Carol",
    notaSatisfacao: 1, 
    duplicado: false, 
    comentario: "Muitos bugs."},
];

//Crie uma função buscarUsuario que receba o array e um nome, e retorne a nota e comentário do usuário ou "Usuário não encontrado".

/*function buscarUsuario(respostas: RespostaPesquisa[], usuario: string): string {
const resposta0 = respostas[0];
const resposta1 = respostas[1];
const resposta2 = respostas[2];
const resposta3 = respostas[3];
const resposta4 = respostas[4];

if (resposta0 && !resposta0.duplicado && resposta0.usuario === nomeBuscado)
return usuario: ${resposta0?.usuario} | Nota: ${resposta0?.notaSatisfacao}
}*/