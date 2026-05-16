var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, email, FK_personagem FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function salvarPersonagem(idUsuario, idPersonagem) {
    console.log("MODEL: Salvando personagem para o usuário:", idUsuario, "Personagem ID:", idPersonagem);
    
    var instrucaoSql1 = `
        UPDATE usuario SET FK_personagem = ${idPersonagem}, 
        tentativas_quiz = IFNULL(tentativas_quiz, 0) + 1 
        WHERE id = ${idUsuario};
    `;
    
    var instrucaoSql2 = `UPDATE personagem SET contador = contador + 1 WHERE id = ${idPersonagem};`;
    
    return database.executar(instrucaoSql1).then(() => {
        return database.executar(instrucaoSql2);
    });
}
module.exports = {
    autenticar,
    cadastrar,
    salvarPersonagem
};