-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

	CREATE DATABASE guilty_gear;

	USE guilty_gear;

	CREATE TABLE usuario (
		id INT PRIMARY KEY AUTO_INCREMENT,
		nome VARCHAR(50),
		email VARCHAR(50) UNIQUE,
		senha VARCHAR(50),
		FK_personagem INT default(21),
		tentativas_quiz INT,
		FOREIGN KEY (FK_personagem) REFERENCES personagem(id)
	);


	CREATE TABLE personagem (
		id INT PRIMARY KEY AUTO_INCREMENT,
		nome VARCHAR(50),
		contador INT
	);

	insert into personagem (nome, contador) values
	('Sol Badguy', 0),
	('Ky Kyske', 0),
	('Baiken', 0),
	('Faust', 0),
	('Potemkin', 0),
	('Happy Chaos', 0),
	('Leo Whitefang', 0),
	('Zato=1', 0),
	('Millia', 0),
	('Ramlethal', 0),
	('Axl', 0),
	('I-no', 0),
	('May', 0),
	('Chipp Zanuff', 0),
	('Giovanna', 0),
	('Slayer', 0),
	('Jack-O', 0),
	('Testament', 0),
	('Nagoriyuki', 0),
	('Dizzy', 0);

	CREATE VIEW vw_dados_dash AS
		SELECT 
			u.id AS idUsuario,
			p_user.nome AS personagem_do_usuario, -- nome do personagem que o user escolheu
			p_rank.nome AS nome_personagem,        -- nome para a lista do gráfico
			p_rank.contador AS votos_personagem,   -- votos para a lista do gráfico
			u.FK_PERSONAGEM
		FROM usuario u
		LEFT JOIN personagem p_user ON u.FK_personagem = p_user.id
		JOIN personagem p_rank;