var database = require("../database/config");

// function buscarUltimasMedidas(idAquario, limite_linhas) {
    
//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         momento,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
//                     FROM medida
//                     WHERE fk_aquario = ${idAquario}
//                     ORDER BY id DESC LIMIT ${limite_linhas}`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// function buscarMedidasEmTempoReal(idAquario) {
    
//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         FROM medida WHERE fk_aquario = ${idAquario} 
//                     ORDER BY id DESC LIMIT 1`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

function buscarDadosDash(idUsuario) {
    var instrucaoSql = `
        SELECT 
            nome_personagem, 
            votos_personagem, 
            personagem_do_usuario,
            FK_personagem
        FROM vw_dados_dash 
        WHERE idUsuario = ${idUsuario}
        ORDER BY votos_personagem DESC
        LIMIT 14
        ;
    `;
    
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    buscarDadosDash
}
