var database = require("../database/config");

function buscarAquariosPorEmpresa(empresaId) {
  
  var instrucaoSql = `SELECT nome as personagem, contador FROM personagem WHERE id != 21;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

// update pra aumentar o contador do personagem
function update_character(id_personagem) {
  
  var instrucaoSql = `update personagem set contador=contador + 1 where id='${id_personagem}';`;
  
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}



module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar,
  update_character
}
