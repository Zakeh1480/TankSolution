-- Inserts na tabela cliente
insert into cliente (nome, empresa, cnpf, cpf, email) values 
	('Fernanda', 'Vila Belmiro', '25456845874453', '11941511062', 'vila.belmiro@hotmail.com'),
    ('Bruno', 'Peixes Nautico', '25456845656665', '11958324782', 'peixe.nautico@gmail.com'),
    ('Carlos', 'Mar Vida', '25456845122222', '11985478632', 'mar.vida@hotmail.com'),
    ('Isaque', 'Tilápia És', '25456845151212', '11923578487', 'tilapia.es@outlook.com'),
    ('Antonio', 'Caiunarede', '25456844412581', '11945118762', 'caiu.rede@gmail.com');

-- Inserts na tabela endereco
insert into endereco (rua, numero, complemento, bairro, cep,  cidade, estado, id_cliente) 
			values   ('Rua Albert Rodrigues', '369', 'Rua', 'Vallee', 38413-136, 'Uberlândia', 'MG', 1),
					 ('Praça Arlindo Fernandes Fissore', '2', 'Praça', 'Parque Novo Mundo', 02147-045, 'São Paulo', 'SP', 2),
                     ('Rua José Vernior', '13', 'Rua', 'Pereira Lobo', 49050-470, 'Aracaju', 'SE', 3),
                     ('Avenida Acelino de Leão', '2566', 'Avenida', 'Santa Rita', 68901-315, 'Macapá', 'AP', 4),
                     ('Rua Três Irmãos', '253', 'Rua', 'Parque São Pedro', 76907-850, 'Ji-Paraná', 'RO', 5);

-- Inserts na tabela telefone
insert into telefone (numero, tipo, id_cliente) values ('1197485743','RES',1),
													   ('1195467855','COM',1),
                                                       ('1195765475','CEL',1),
                                                       ('1195456576','CEL',2),
                                                       ('1195645645','CEL',3),
                                                       ('1194353456','COM',4),
                                                       ('1196456344','RES',5);

-- Inserts na tabela tanque
insert into tanque (qtd_peixes, litros_tanque, id_cliente) values ('4858',11300.30,1),
																  ('143',325.00,2),
                                                                  ('5949',14050.40,3),
                                                                  ('785',1560.00,4),
                                                                  ('2785',7345.00,5);

-- Inserts na tabela peixe
insert into peixe (especie, tipo, temp_ideal_min, temp_ideal_max, id_tanque) 
		values	  ('Carpa', 'Doce', 13, 22, 1),
				  ('Tilápia', 'Doce', 14, 23, 2),
                  ('Tilápia', 'Salgada', 14, 23, 3),
                  ('Carpa', 'Doce', 13, 22, 4),
                  ('Tilápia', 'Salgada', 14, 23, 5);
    
-- Inserts na tabela sensor
insert into sensor (modelo, ult_temp_regis, hora_registro, id_tanque)
			values ('LM-35', 21, '2021/04/16 14:00' , 1),
				   ('LM-35', 18, '2021/04/16 13:30' , 2),
                   ('LM-35', 19, '2021/04/16 14:30' , 3),
                   ('LM-35', 18, '2021/04/16 12:30' , 4),
                   ('LM-35', 18, '2021/04/16 14:00' , 5),
				   ('LM35', 13.33, '2021/04/16 16:30', 1);


insert into historico_temp (temp_sen, data_hora_regis, id_sensor) 
values (12.76,"2021/03/12 19:00",1),
	   (13.00,"2021/03/12 20:00",1),
       (11.00,"2021/03/12 21:00",1),
       (10.35,"2021/03/12 22:00",1),
       (23.20,"2021/03/13 14:30",2),
       (22.70,"2021/03/13 15:30",2),
       (21.34,"2021/03/13 16:00",2),
       (12.50,"2021/03/14 10:45",3),
       (14.50,"2021/03/14 11:45",3),
       (16.50,"2021/03/14 12:45",3),
       (17.50,"2021/03/14 23:20",4),
       (18.74,"2021/03/15 18:10",4),
       (19.54,"2021/03/15 18:10",4),
       (21.54,"2021/03/15 18:10",5),
       (20.84,"2021/03/15 18:10",5);

-- Inserts na tabela SAC
insert into sac (problema, desc_problema, solucionado, data_hora_regis, id_cliente ) values
('sensor com defeito','O sensor do meu tanque de carpas não está funcionando corretamente','Sim','2021/02/13 12:57',1),
('Site fora do ar', 'O site está fora do ar desde ontem e não consigo acessar minhas informações','Sim','2021/02/17 21:34', 5),
('Graficos fora do ar','Não estou conseguindo acessar meus graficos pela pagina, está dando um erro estranho','Sim','2021/02/25 15:45', 4),
('Parece que as temperaturas estão estranhas','As temperaturas que vejo no graficos estão desiguais com as que meço com meu termometro','Não','2021/03/29 17:23', 1);