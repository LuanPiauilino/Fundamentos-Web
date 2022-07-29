
/*
Case Sensitive: reconhece letras maiusculas e minusculas


por Tag; getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySeletor()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
    let txt = document.querySelector("#txtNome")

    if (nome.value.length < 3) {
        txt.innerHTML = "Nome Inválido"
        txt.style.color = "red"
        txt.style.display = 'block'
    } else {
        txt.style.display = 'none'
        nomeOk = true
    }
}

function validaEmail() {
    let txt = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txt.innerHTML = "Email Inválido"
        txt.style.color = "red"
    } else {
        txt.innerHTML = "Email Válido"
        txt.style.color = "green"
        emailOk = true
    }
}

function validaAssunto(){
    let txt = document.querySelector("#txtAssunto")

    if (assunto.value.length > 20){
        txt.innerHTML = "Texto muito grande, escreva no máximo 100 caracteres"
        txt.style.color = "red"
        txt.style.display = "block"
    } else {
        txt.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso")
    } else { 
        alert("Preenha o formuçário corretamente, antes de enviar")
    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.heigth = "600px"
}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.heigth = "250px"
}