// SECTIONS PARA CRIAR LAYOUT NA PÁGINA
const header = document.getElementById("cabecalho")

// BUTTON DO MENU PRINCIPAL
const mainDuelar = document.querySelector(".mainDuelar")
const mainDeck = document.querySelector(".mainDeck")
const mainLoja = document.querySelector(".mainLoja")
const mainConfiguracao = document.querySelector(".mainConfiguracao")
const mainMinhaConta = document.querySelector(".mainMinhaConta")

// BOTÃO MENU DUELAR
const btnDuelar = document.getElementById("duelar")
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
const btnDeck = document.getElementById("deck")
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
const btnLoja = document.getElementById("loja")
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
const btnConfiguracao = document.getElementById("configuracao")
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
const btnMinhaConta = document.getElementById("minhaConta")
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

