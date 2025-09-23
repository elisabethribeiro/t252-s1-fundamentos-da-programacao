// Descrição: Central de Notificações

// objeto = conjunto de informacoes especificas
// Crie uma interface (nomear oq tem dentro do objeto = objeto com seus tipos nomeados) Notificacao com as propriedades:
interface Notificacao {
    id: number;
    titulo: string;
    tipo: "alerta" | "aviso" | "informacao";
    lida: boolean;
}


//Crie um array chamado inbox com pelo menos 3 notificações diferentes seguindo a interface.
const inbox:  Notificacao [] = [
    {
        id: 1,
        titulo: "seu boleto vence hoje",
        tipo: "alerta",
        lida: false
    },     {
        id: 2,
        titulo: "novo comentario na sua foto",
        tipo: "informacao",
        lida: false
    },     {
        id: 3,
        titulo: "celular desatualizado",
        tipo: "aviso",
        lida: false
    }
] 

//Crie uma função declarada chamada statusLeitura que receba uma notificação e retorne:
//"✅ lida" se lida = true;
function statusLeitura(notificacao: Notificacao): string {
    if (notificacao.lida === true) return "foi lida"; //.lida acessa a propriedade lida do objeto notificacao
    //"📨 não lida" se lida = false.
 return "nao lida" // else desnecessario quando se usa return
}
//exemplo 2 para usar if
function statusLeitura2(notificacao: Notificacao): string {
    if (notificacao.lida === true) {
        return "foi lida";
     } else { 
        return"nao lida";
 }
}
//exemplo 3 para usar if
function statusLeitura3(notificacao: Notificacao): string {
    return notificacao.lida === true ? "foi lida": "nao lida"; // operador ternario - simplificacao da escrita do if
}

// 1- Crie uma função anônima atribuída a uma constante chamada marcarComoLida 
// 2- que receba o array de notificações e um id:
const marcarComoLida = function (notificacoes: Notificacao[], id: number): string {
// Se encontrar uma notificação com aquele id, altere lida para true e retorne uma mensagem de confirmação.
    if (notificacoes[0]?.id === id) {
        return "Confirmado";
    } 
    return "Nao confirmado" //por padrao retorna a seguinte string

}

marcarComoLida(inbox, 1)


// Se não encontrar, retorne "ID não encontrado".
