var email_usuario;
var nome_usuario;
var id_usuario

function redirecionar_login() {
    window.location.href = "login.html"
}

function verificar_home() {
    email_usuario = sessionStorage.email_usuario_meuapp;

    if (email_usuario == undefined)  {
        home_sem_login.style.display = "inline-block"
        home_com_login.style.display = "none"
    } else {
        home_sem_login.style.display = "none"
        home_com_login.style.display = "inline-block"
    }
}

function verificar_dash() {
    email_usuario = sessionStorage.email_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    id_usuario = sessionStorage.id_usuario_meuapp;

    if (email_usuario == undefined)  {
        redirecionar_login();
    } else {
        n_user_dash.innerHTML += nome_usuario;
        validar_sessao();
    }
}

function verificar_conta() {
    email_usuario = sessionStorage.email_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    id_usuario = sessionStorage.id_usuario_meuapp;

    if (email_usuario == undefined)  {
        redirecionar_login();
    } else {
        n_user_conta.innerHTML = nome_usuario;
        consult(id_usuario);
        validar_sessao();
    }
}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${email_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${email_usuario}`, {cache:'no-store'}); 
}

function consult(id_usuario) {
    fetch(`/leituras/consulta_dadosUser/${id_usuario}`, {
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                inpt_user.value = `${resposta.nome}`
                inpt_email.value = `${resposta.email}`
                inpt_tel.value = `${resposta.telefone}`
                inpt_regiao.value = `${resposta.estado}`
            });

        } else {

            console.log('Erro de login!');

            resposta.text().then(texto => {
                console.error(texto);
                finalizar_aguardar(texto);
            });
        }
    });

    return false;
}

function alterar_senha() {

    var senha_v = senha.value;
    var repetir_v = repetir.value;
    id_usuario = sessionStorage.id_usuario_meuapp;

    if (senha_v == repetir_v){
        fetch(`/leituras/alterar_senha/${id_usuario},${senha.value}`);
        alert('Senha Trocada com sucesso')
    } else {
        alert('A senhas digitas incompativeis');
    }
}