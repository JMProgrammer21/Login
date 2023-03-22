const excluir = document.getElementById("excluir");


excluir.addEventListener('click',function(){

    //pegar o usuário que será excluido
    const usuario_excluir = localStorage.getItem('validado');
    // pegar o array JSON.
    const array_usuarios = localStorage.getItem('banco');
    
    // transformar em array de objetos
    const array_usuarios_json =JSON.parse(array_usuarios);
    // pegar o indice dele onde ele está posicionado.
    let index = array_usuarios_json.findIndex(usuario => usuario.Login === usuario_excluir);
;
    // perguntar se quer que ele seja excluido
    if(confirm('Tem certeza que quer excluir sua conta?')){
        array_usuarios_json.splice(index,1)
    
    
    // transformar o array em json// salavar no localstorage.
    localStorage.setItem('banco', JSON.stringify(array_usuarios_json));

    //redirecionar para a pagina inicial de login
    window.location.href='../PROJETO_LOGIN/formulario_de_login.html';

    //zerando o usuário logado
    let Uvalidado = localStorage.getItem('validado');
    Uvalidado =[];
    
    localStorage.setItem('validado',Uvalidado);}   
    else{
        return;
}});