'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Leitura = sequelize.define('Leitura',{	
		id_h_temp: {
			field: 'id_h_temp',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		temp_sen: {
			field: 'temp_sen',
			type: DataTypes.REAL,
			allowNull: false
		},
		data_hora_regis: {
			field: 'data_hora_regis',
			type: DataTypes.DATE, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		momento_grafico: {
			type: DataTypes.VIRTUAL, // campo 'falso' (não existe na tabela). Deverá ser preenchido 'manualmente' no select
			allowNull: true
		}
	}, 
	{
		tableName: 'historico_temp', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Leitura;
};
