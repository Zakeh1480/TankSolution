function trocar_senha(){

    var nova_senha = senha.value;
    var igual = repetir.value;

    if(nova_senha.length >= 6 && igual == nova_senha){
        alert('Senha alterada com sucesso.');
    }else{
        alert('As senhas não conferem');
    }

}

function alterar_perfil(){

    var email = inpt_email.value;
    var sexo = select_sexo.value;
    var data = inpt_data.value;
    var regiao = select_regiao.value;

    if(email.indexOf('@') && email.indexOf('.') && data !== "" && regiao !== 'e' && sexo == 'm' || sexo == 'f'){
        alert('Perfil alterado com sucesso.');
    }else{
        alert('Preencha todos os campos corretamente.');
    }

}
