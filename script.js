function logar(){ // FUNÇÃO LOGAR
    // VARIAVEIS
    var login = document.getElementById('login').value // VARIAVEL LOGIN RECEBE O QUE FOR DIGITADO NO INPUT LOGIN
    var senha = document.getElementById('senha').value // VARIAVEL LOGIN QUE RECEBE O QUE FOR DIGITADO  NO INPUT SENHA
    // VALIDAÇÃO DO USUÁRIO E SENHA

    if(login == "palhacocacarola" && senha == "pipocacomsal") {
        alert('Login efetuado com sucesso!'); // MOSTRA MENSAGEM

        location.href = "home.html"; // CHAMA A PÁGINA "HOME"
    }

    else{
        alert('Usuário ou senha incorretos.'); // MOSTRA MENSAGEM
        document.getElementById('login').value=''; // LIMPA O CAMPO
        document.getElementById('senha').value=''; // LIMPA O CAMPO
        document.getElementById('Login').autofocus=''; // POSICIONA O CURSOR NO INPUT DE LOGIN
    }


}