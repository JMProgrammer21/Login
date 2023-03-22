//variaveis

const BTEDITAR = document.getElementById("editar");
const BTEXCLUIR = document.getElementById("excluir");
const BTvoltar = document.getElementById("voltar");
const BTEditarUsuario= document.getElementById("voltarLogado");
const teste = document.getElementById("h1");
const MSMH = document.getElementById("MSMh1");

//buscar um usuario que foi validado e está logado
let validado = localStorage.getItem('validado');
MSMH.innerHTML =('você está logado '+ validado);
MSMH.style.fontSize = '100px';



//trocar a cor dos botões ao clicar.
const corOriginal = BTEDITAR.style.backgroundColor;

BTEDITAR.addEventListener('mousedown', function() {
  this.style.backgroundColor = 'black';
});

BTEDITAR.addEventListener('mouseup', function() {
  this.style.backgroundColor = corOriginal;
});

BTEXCLUIR.addEventListener('mousedown', function() {
    this.style.backgroundColor = 'black';
});
  
BTEXCLUIR.addEventListener('mouseup', function() {
this.style.backgroundColor = corOriginal;
});

    
//retornando para a pagina de login ao clicar em voltar
BTvoltar.addEventListener('click', function(){
    window.location.href = '../PROJETO_LOGIN/formulario_de_login.html'; 

    //tornando vazio quem está logado, fechando a sessão.
    validado =[];
    //salvando novamente no localstorage.
    localStorage.setItem('validado',validado);
});


//stile de botão separar

BTvoltar.addEventListener('mousedown', function() {
    this.style.opacity = '0.5';
    });
    
BTvoltar.addEventListener('mouseup', function() {
    this.style.opacity = '1';
});
 
BTEDITAR.addEventListener('click',function(){
    window.location.href="../PROJETO_LOGIN/conseguiu_logado_editar.html";
    });        
