//variáveis
const elementos = document.getElementById("container");
const Video = document.getElementById("background-video");

const TelaCadastro = document.getElementById("cadastro");
const TelaLogin = document.getElementById("login");

const Titulo_Cadastro = document.getElementById("Titulo_Cadastro");
const Titulo_Login = document.getElementById("Titulo_login");

const BotaoCadastro = document.getElementById("botaoCadastro");

//funcao para exibir um elemento com o display flex
function mostrarElementos() {
  elementos.style.display = "flex";
}

// funcao para que o video ao terminar de ser carregado ele mostre a tela, contudo desativei isso.
Video.addEventListener("timeupdate", function() {

  let currentTime = Video.currentTime;
  let duration = Video.duration;
  let isLooping = Video.loop;
  let contador= 2; // tempo de tolerância para verificar se o video deu uma volta completa

  if (isLooping && (currentTime + contador >= duration)) {
    mostrarElementos();
  }
});


// funcao para que ao clicar apareça a tela de cadastro enquanto a tela de login some.
BotaoCadastro.addEventListener("click",function(){
    TelaLogin.style.display ="none";
    Titulo_Login.style.display ="none";
    Titulo_Cadastro.style.display="block";
    TelaCadastro.style.display= "flex";
})