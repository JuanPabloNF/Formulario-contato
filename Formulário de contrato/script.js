function validar(){

let nome = document.getElementById("Nome").value;
let senha = document.getElementById("Senha").value;
let mensagem = document.getElementById("Mensagem").value;
let alerta = document.getElementById("Alerta1");
let alerta2 = document.getElementById("Alerta2");
let alerta3 = document.getElementById("Alerta3");


    if (nome == ""){
        alerta.innerHTML = "Campo nome vazio!";
    }
    if (senha == ""){
        alerta2.innerHTML = "Campo senha vazio!";
    }

    if (mensagem == ""){
        alerta3.innerHTML = "Campo mensagem vazio!";
    }

    
    
    

   



}

