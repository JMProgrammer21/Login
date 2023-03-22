//Criando as Variaveis que receberão os dados

const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const email = document.getElementById("email");
const endereco = document.getElementById("endereco");
const telefone = document.getElementById("telefone");
const senha = document.getElementById("senha");
const senha2 =document.getElementById("senha2");
const BTenviar = document.getElementById("enviar");
const logUsuario = document.getElementById("log_usuario");
const senhaLog = document.getElementById("senha_log");
const BTLOGAR = document.getElementById("botao_login");
const container = document.getElementById("container");


//variaveis vazias que receberão os dados
let USUARIOS = [];
let USUARIOS_JSON = ''; // converte o array Usuarios para Json.
let ValorValido =[];


// executa a criação de um novo usuário
BTenviar.addEventListener('click', function() {
    // chamar o banco de dados do local storage para gravar novamente. para que cada vez que um novo usuário seja cadastrado, os dados sejam acumulados no localStorage, você precisa primeiro recuperar os dados já existentes no localStorage antes de adicionar o novo usuário

    USUARIOS_JSON = localStorage.getItem('banco'); 
    if(USUARIOS_JSON){

        //CONVERTENDO JSON PARA OBJETO
        USUARIOS = JSON.parse(USUARIOS_JSON); 
    }
    //CRIANDO UM NOVO USUÁRIO
    const novoUsuario = Usuario.criarUsuario(nome.value, idade.value, email.value, endereco.value, telefone.value, senha.value);
    
    // convertendo o array em JSON    
    USUARIOS_JSON = JSON.stringify(USUARIOS); 

    //Salvando no local storage
    localStorage.setItem('banco', USUARIOS_JSON); 

});


BTLOGAR.addEventListener('click', function(){

    //buscando os dados do formulário
    USUARIOS_JSON = localStorage.getItem('banco'); 

    // convertendo novamente os dados JSON em OBJETOS.
    let USUARIOS_CONVERTIDOS = JSON.parse(USUARIOS_JSON); 
    
    //buscando o usuario no banco de dados
    let resultado_login = USUARIOS_CONVERTIDOS.find(Login => Login.Login === logUsuario.value && Login.Senha === senhaLog.value);

    // se o usuario for verdadeiro 
    if (resultado_login ) 

    {
        // adiciona o usuario no array de usuarios
        ValorValido.push(logUsuario.value);

        // salva novamente no banco de dados
        localStorage.setItem('validado',ValorValido);
        
        // redireciona para a pagina logado
        window.location.href = '../PROJETO_LOGIN/conseguiu_logado.html';
    }
    else{alert('USUARIO OU SENHA INCORRETOS');}
});



//Criar uma classe para receber os dados dos usuários
 class Usuario
    {
        //método construtor da classe
        constructor(LOGIN, IDADE, EMAIL, END, TEL, SENHA)
        {   
            this.Login = LOGIN;
            this.Idade = IDADE; 
            this.Email = EMAIL;
            this.End = END;
            this.Tel = TEL;
            this.Senha = SENHA; }

        //método para adicionar novos usuarios
        static criarUsuario(login, idade, email, end, tel, senha) 
        {
        const novoUsuario = new Usuario(login, idade, email, end, tel, senha);
        USUARIOS.push(novoUsuario);
        console.log('Novo usuário cadastrado:', novoUsuario);
        return novoUsuario;};
        

        static VerTodosOsUsuarios() {
    console.log('Lista de todos os usuários:', USUARIOS);
    return USUARIOS;
    }
      
  };
  


