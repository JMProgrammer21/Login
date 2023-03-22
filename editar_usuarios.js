const nomeED = document.getElementById("nomeED");
const idadeED = document.getElementById("idadeED");
const emailED = document.getElementById("emailED");
const enderecoED = document.getElementById("enderecoED");
const telefoneED = document.getElementById("telefoneED");
const senhaED = document.getElementById("senhaED");
const senha2ED = document.getElementById("senha2ED");
const resetarED = document.getElementById("resetar");
const enviarED = document.getElementById("enviar");
//buscar o usuário logado 
let VL = localStorage.getItem('validado');
console.log(VL)

//buscar o banco de dados
let localBanco = localStorage.getItem('banco');
let array = JSON.parse(localBanco);

//buscar dados desse usuário que está logado.

function ChaveEValor(chave, valor) {  

// Converte a string JSON em um array JavaScript
    


    // Itera sobre o array em busca do objeto com a propriedade desejada
    for (let i = 0; i < array.length; i++) {
        if (array[i][chave] === valor) {
        return array[i]; // Retorna o objeto correspondente
        }
    }

    // Retorna null se nenhum objeto correspondente for encontrado
    return null;
    }


enviarED.addEventListener('click',function(e){
e.preventDefault();
 
//criação das chaves e valores
let login = VL;
let obj = ChaveEValor('Login', login);

console.log(obj.Login);
console.log(obj.Idade);
console.log(obj.Email);
console.log(obj.End);
console.log(obj.Tel);
console.log(obj.Senha);
console.log('/-------------------/');





//criar validador de senha
if(senhaED.value != senha2ED.value){
    alert('Senhas incorretas');
}
else{

    //receber os valores de input
obj.login = nomeED.value;
obj.Idade = idadeED.value;
obj.Email = emailED.value;
obj.End = enderecoED.value;
obj.Tel = telefoneED.value;
obj.Senha = senhaED.value;
console.log(obj.login, obj.Idade,obj.Email, obj.End, obj.Tel,obj.Senha);
}

//salvar novamente no localStorage.

localStorage.setItem('banco',JSON.stringify(array));

});

//Feito graças a Deus.
