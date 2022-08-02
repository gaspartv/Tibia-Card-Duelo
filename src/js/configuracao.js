// SECTIONS PARA CRIAR LAYOUT NA PÁGINA
const header = document.getElementById("cabecalho")

const mainDuelar = document.querySelector(".mainDuelar")
const mainDeck = document.querySelector(".mainDeck")
const mainLoja = document.querySelector(".mainLoja")
const mainConfiguracao = document.querySelector(".mainConfiguracao")
const mainMinhaConta = document.querySelector(".mainMinhaConta")

// BUTTON DO MENU PRINCIPAL
const btnDuelar = document.getElementById("duelar")
const btnDeck = document.getElementById("deck")
const btnLoja = document.getElementById("loja")
const btnConfiguracao = document.getElementById("configuracao")
const btnMinhaConta = document.getElementById("minhaConta")

// BOTÃO MENU DUELAR
btnDuelar.addEventListener("click" , (event) => {
    let target = event.target
    if (target.tagName == "LI") {
        header.classList.remove("hiddenSection")
        mainDuelar.classList.remove("hiddenSection")
        mainDeck.classList.add("hiddenSection")
        mainLoja.classList.add("hiddenSection")
        mainConfiguracao.classList.add("hiddenSection")
        mainMinhaConta.classList.add("hiddenSection")
        player1()
        modoDeEsperaPlayer2()
        comprarCartasPlayer2()
        hpPlayers()
    }
})

// BOTÃO MENU DECK
btnDeck.addEventListener("click", (event) => {
    let target = event.target
    if (target.tagName == "LI") {
        mainDuelar.classList.add("hiddenSection")
        mainDeck.classList.remove("hiddenSection")
        mainLoja.classList.add("hiddenSection")
        mainConfiguracao.classList.add("hiddenSection")
        mainMinhaConta.classList.add("hiddenSection")
    }
})

// BOTÃO MENU LOJA
btnLoja.addEventListener("click", (event) => {
    let target = event.target
    if (target.tagName == "LI") {
        mainDuelar.classList.add("hiddenSection")
        mainDeck.classList.add("hiddenSection")
        mainLoja.classList.remove("hiddenSection")
        mainConfiguracao.classList.add("hiddenSection")
        mainMinhaConta.classList.add("hiddenSection")
    }
})

// BOTÃO MENU Configurações
btnConfiguracao.addEventListener("click" , (event) => {
    let target = event.target
    if (target.tagName == "LI") {
        mainDuelar.classList.add("hiddenSection")
        mainDeck.classList.add("hiddenSection")
        mainLoja.classList.add("hiddenSection")
        mainConfiguracao.classList.remove("hiddenSection")
        mainMinhaConta.classList.add("hiddenSection")
    }
})

// BOTÃO MENU MINHA CONTA
btnMinhaConta.addEventListener("click", (event) => {
    let target = event.target
    if (target.tagName == "LI") {
        mainDuelar.classList.add("hiddenSection")
        mainDeck.classList.add("hiddenSection")
        mainLoja.classList.add("hiddenSection")
        mainConfiguracao.classList.add("hiddenSection")
        mainMinhaConta.classList.remove("hiddenSection")  
    }
})

// BUTTON DA PÁGINA CONFIGURAÇÕES
const btntutorialInicial = document.querySelector(".tutorialInicial")

const imgVoltar = document.querySelector(".imgVoltar")

const inicioSite = document.getElementById("inicioSite")
const login = document.getElementById("login")
const modoDeJogo = document.getElementById("modoDeJogo")

const jogarSemLogin = document.querySelector(".jogarSemLogin")
const efetuarLogin = document.querySelector(".efetuarLogin")
const criarConta = document.querySelector(".criarConta")

const cadastroNomeUsuario = document.querySelector(".cadastroNomeUsuario")
const cadastroSenha = document.querySelector(".cadastroSenha")
const cadastroRepitaSenha = document.querySelector(".cadastroRepitaSenha")
const cadastroEmail = document.querySelector(".cadastroEmail")
const cadastroRepitaEmail = document.querySelector(".cadastroRepitaEmail")

const btnCadastrar = document.getElementById("btnCadastrar")

// BOTÃO JOGAR SEM LOGIN
jogarSemLogin.addEventListener("click", (event) => {
    let target = event.target
    if (target.tagName == "BUTTON") {
        header.classList.remove("hiddenSection")
        mainDuelar.classList.remove("hiddenSection")
        mainDeck.classList.add("hiddenSection")
        mainLoja.classList.add("hiddenSection")
        mainConfiguracao.classList.add("hiddenSection")
        mainMinhaConta.classList.add("hiddenSection")  
        player1()
        modoDeEsperaPlayer2()
        comprarCartasPlayer2()
        hpPlayers()
    }
})

// BOTÃO EFETUAR LOGIN
efetuarLogin.addEventListener("click", (event) => {
    let target = event.target
    if (target.tagName == "BUTTON") {
        imgVoltar.classList.remove("hidden")
        inicioSite.classList.remove("displayFlex")
        inicioSite.classList.add("hiddenSection")
        login.classList.remove("hiddenSection")
        login.classList.add("displayFlex")
        modoDeJogo.classList.add("hiddenSection")
        modoDeJogo.classList.remove("displayFlex")
    }
})

// BOTÃO CRIAR CONTA
criarConta.addEventListener("click", (event) => {
    let target = event.target
    if (target.tagName == "BUTTON") {
        imgVoltar.classList.remove("hidden")
        inicioSite.classList.remove("displayFlex")
        inicioSite.classList.add("hiddenSection")
        login.classList.add("hiddenSection")
        login.classList.remove("displayFlex")
        modoDeJogo.classList.remove("hiddenSection")
        modoDeJogo.classList.add("displayFlex")
    }
})

// BOTÃO VOLTAR
imgVoltar.addEventListener("click", (event) => {
    let target = event.target
    if (target.tagName == "IMG") {
        imgVoltar.classList.add("hidden")
        inicioSite.classList.remove("hiddenSection")
        inicioSite.classList.add("displayFlex")
        login.classList.add("hiddenSection")
        login.classList.remove("displayFlex")
        modoDeJogo.classList.add("hiddenSection")
        modoDeJogo.classList.remove("displayFlex")
    }
})

function quandoAbrirOsite() {
    inicioSite.classList.add("displayFlex")
    login.classList.add("hiddenSection")
    modoDeJogo.classList.add("hiddenSection")
}

// BOTÃO CONFIG APRENDA JOGAR
btntutorialInicial.addEventListener("click", (event) => {
    let target = event.target
    if (target.tagName == "BUTTON") {
        header.classList.remove("hiddenSection")
        mainDuelar.classList.remove("hiddenSection")
        mainDeck.classList.add("hiddenSection")
        mainLoja.classList.add("hiddenSection")
        mainConfiguracao.classList.add("hiddenSection")
        mainMinhaConta.classList.add("hiddenSection")  
        player1()
        modoDeEsperaPlayer2()
        comprarCartasPlayer2()
        hpPlayers()
    }
})

// BOTÃO CADASTRAR
btnCadastrar.addEventListener("click", (event) => {
    let target = event.target
    if (target.tagName == "BUTTON") {
        if (cadastroNomeUsuario.value != "") {
            if (cadastroSenha.value != "") {
                if (cadastroRepitaSenha.value != "") {
                    if (cadastroSenha.value != cadastroRepitaSenha.value) {
                        console.log("As senhas não são iguais!")
                    } else if (cadastroEmail.value != "") {
                        if (cadastroRepitaEmail.value != "") {
                            if (cadastroEmail.value != cadastroRepitaEmail.value) {
                                console.log("Os e-mails não são iguais!")
                            } else {
                                console.log("Cadastro concluido!")
                            }
                        } else {
                            console.log("Você precisa repetir o e-mail!")
                    }} else {
                        console.log("Você precisa digitar um e-mail!")
                }} else {
                    console.log("Você precisa repetir a senha!")
            }} else {
                console.log("Você precisa digitar uma senha!")
            }
        } else {
            console.log("Você precisa digitar um nome de usuário!")
        
        }
    }
})

quandoAbrirOsite()