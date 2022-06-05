var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Leitura = require('../models').Leitura;
var env = process.env.NODE_ENV || 'development';

/* Recuperar as últimas N leituras */
router.get('/ultimas/:id_sensor', function(req, res, next) {
	
	// quantas são as últimas leituras que quer? 7 está bom?
	const limite_linhas = 7;

	var id_sensor = req.params.id_sensor;

	console.log(`Recuperando as ultimas ${limite_linhas} leituras`);
	
	let instrucaoSql = "";

	if (env == 'dev') {
		// abaixo, escreva o select de dados para o Workbench
		instrucaoSql = `select 
		temp_sen, 
		data_hora_regis,
		DATE_FORMAT(data_hora_regis,'%H:%i:%s') as momento_grafico
		from historico_temp
		where id_sensor = ${id_sensor}
		order by id_h_temp desc limit ${limite_linhas}`;
	} else if (env == 'production') {
		// abaixo, escreva o select de dados para o SQL Server
		instrucaoSql = `select 
		temp_sen, 
		data_hora_regis as momento_grafico
		from historico_temp
		where id_sensor = ${id_sensor}
		order by id_h_temp desc limit ${limite_linhas}`;
	} else {
		console.log("\n\n\n\nVERIFIQUE O VALOR DE LINHA 1 EM APP.JS!\n\n\n\n")
	}
	
	sequelize.query(instrucaoSql, {
		model: Leitura,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});


router.get('/tempo-real/:id_sensor', function(req, res, next) {
	console.log('Recuperando caminhões');
	
	//var idcaminhao = req.body.idcaminhao; // depois de .body, use o nome (name) do campo em seu formulário de login
	var id_sensor = req.params.id_sensor;
	
	let instrucaoSql = "";
	
	if (env == 'dev') {
		// abaixo, escreva o select de dados para o Workbench
		instrucaoSql = `select 
		temp_sen, 
		data_hora_regis,
		DATE_FORMAT(data_hora_regis,'%H:%i:%s') as momento_grafico
		from historico_temp
		where id_sensor = ${id_sensor} order by id_h_temp desc`;
	} else if (env == 'production') {
		// abaixo, escreva o select de dados para o SQL Server
		instrucaoSql = `select top 1 temperatura, umidade, FORMAT(momento,'HH:mm:ss') as momento_grafico, fkcaminhao from leitura where fkcaminhao = ${idcaminhao} order by id desc`;
	} else {
		console.log("\n\n\n\nVERIFIQUE O VALOR DE LINHA 1 EM APP.JS!\n\n\n\n")
	}
	
	console.log(instrucaoSql);
	
	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
	.then(resultado => {
		res.json(resultado[0]);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

router.get('/consulta_dadosUser/:idUsuario', function(req, res, next) {
	console.log('Recuperando caminhões');
	
	//var idcaminhao = req.body.idcaminhao; // depois de .body, use o nome (name) do campo em seu formulário de login
	var idUsuario = req.params.idUsuario;
	
	let instrucaoSql = "";
	
	if (env == 'dev') {
		// abaixo, escreva o select de dados para o Workbench
		instrucaoSql = `select * from usuario where id_usuario = ${idUsuario}`;
	} else if (env == 'production') {
		// abaixo, escreva o select de dados para o SQL Server
		instrucaoSql = `select * from usuario where id_usuario = ${idUsuario}`;
	} else {
		console.log("\n\n\n\nVERIFIQUE O VALOR DE LINHA 1 EM APP.JS!\n\n\n\n")
	}
	
	console.log(instrucaoSql);
	
	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
	.then(resultado => {
		res.json(resultado[0]);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});
// estatísticas (max, min, média, mediana, quartis etc)
router.get('/estatisticas', function (req, res, next) {
	
	console.log(`Recuperando as estatísticas atuais`);

	const instrucaoSql = `select 
							max(temperatura) as temp_maxima, 
							min(temperatura) as temp_minima, 
							avg(temperatura) as temp_media,
							max(umidade) as umidade_maxima, 
							min(umidade) as umidade_minima, 
							avg(umidade) as umidade_media 
						from leitura`;
					

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
});

router.get('/alterar_senha/:idUsuario,:senha', (req, response) => {

	var idUsuario = req.params.idUsuario;
	var senha = req.params.senha

	var instrucaoSql = ""

	if (env == "dev") {
		instrucaoSql = `update usuario set senha = '${senha}' where id_usuario = ${idUsuario};`;
	} else {
		instrucaoSql = `update usuario set senha = '${senha}' where id_usuario = ${idUsuario};`;
	}

	console.log(instrucaoSql)

	sequelize.query(instrucaoSql, {
	}).then(resultado => {
		console.log(`\n\nRegistro alterado com sucesso!\nO comando executado foi como abaixo:\n`);
		console.log(instrucaoSql)
		console.log(`\nFim do comando SQL executado.`);
		response.status(200).send("Dado inserido com sucesso.");
	}).catch(erro => {
		console.error(erro);
		response.status(500).send(erro.message);
	});
});



module.exports = router;
