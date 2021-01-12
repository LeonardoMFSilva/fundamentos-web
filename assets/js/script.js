js
/* Tipos de varriaveis no js:
var - De escopo global
let - É boa pratica e quando usado dentro de {} o uso dela é apenas no escopo local, fora das {} é global
const - Constante, não mutavel
*/

/* JS é Case Sensitive.
Tipos de gets possíveis:
Tag: getElementByTagName()
por ID: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let assuntoOk = false
let emailOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txt = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txt.innerHTML = "Nome inválido"
        txt.style.color = "red"
    } else {
        txt.innerHTML = "Nome válido"
        txt.style.color = "green"
        nomeOk = true
    }
}


function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar.")
    }
}

function mapaZoom() {

    mapa.style.height = "600px"
    mapa.style.width = "800px"

}

function mapaNormal() {
    mapa.style.height = "250px"
    mapa.style.width = "400px"
}