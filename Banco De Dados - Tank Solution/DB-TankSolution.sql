create database tanksolution;
use tanksolution;

create table usuario (
	id_usuario	int 	primary key auto_increment,
    nome		varchar (70),
    email		varchar (50),
    senha		varchar (50),
    cpf			varchar (50),
    d_nasci		date,
    genero		varchar (20),
    telefone	varchar (15),
    juri_fisi	varchar (20),
    cep			varchar (20),
    estado		varchar (10),
    cidade		varchar (50),
    municipio	varchar (30),
    bairro		varchar (30),
    rua			varchar (30),
    numero		varchar (10),
    complemento	varchar (30)
);
  
create table tanque(
    id_tanque int primary key auto_increment,
    qtd_peixes int,
    litros_tanque decimal(10,2),
    id_usuario int,
    foreign key(id_usuario) references usuario(id_usuario)
);
  
create table sensor(
    id_sensor int primary key auto_increment,
    modelo varchar(42),
    id_tanque int,
    foreign key(id_tanque) references tanque(id_tanque)
);
    
create table historico_temp(
    id_h_temp int primary key auto_increment,
    temp_sen decimal(5,2),
    data_hora_regis datetime default current_timestamp,
    id_sensor int,
    foreign key(id_sensor) references sensor(id_sensor)
);

create table peixe(
    id_peixe int primary key auto_increment,
    especie varchar(30),
    tipo varchar(7),
    temp_ideal_min decimal(5,2),
    temp_ideal_max decimal(5,2),
    id_tanque int,
    foreign key(id_tanque) references tanque(id_tanque)
);

insert into tanque (qtd_peixes, litros_tanque, id_usuario) values
    (500, 2000, 1);

insert into sensor (modelo, id_tanque) values
    ('LM-35', 1);
    
    
