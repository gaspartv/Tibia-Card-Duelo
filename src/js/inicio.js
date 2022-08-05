
// INICIO DO SITE
const inicioSite = document.getElementById("inicioSite")
const login = document.getElementById("login")
const modoDeJogo = document.getElementById("modoDeJogo")
const cadastroOk = document.getElementById("cadastroOk")

// BOTÃO VOLTAR
const imgVoltar = document.querySelector(".imgVoltar")
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

// BOTÃO JOGAR SEM LOGIN // FUTURAMENTE VIRAR TUTORIAL
const jogarSemLogin = document.querySelector(".jogarSemLogin")
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
const efetuarLogin = document.querySelector(".efetuarLogin")
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
        cadastroOk.classList.add("hiddenSection")
        cadastroOk.classList.remove("displayFlex")
    }
})

// BOTÃO CRIAR CONTA
const criarConta = document.querySelector(".criarConta")
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

// BOTÃO EFETUAR LOGIN APÓS CADASTRO
const efetuarLoginCadastro = document.querySelector(".efetuarLoginCadastro")
efetuarLoginCadastro.addEventListener("click", (event) => {
    let target = event.target
    if (target.tagName == "BUTTON") {
        imgVoltar.classList.remove("hidden")
        inicioSite.classList.remove("displayFlex")
        inicioSite.classList.add("hiddenSection")
        login.classList.remove("hiddenSection")
        login.classList.add("displayFlex")
        modoDeJogo.classList.add("hiddenSection")
        modoDeJogo.classList.remove("displayFlex")
        cadastroOk.classList.add("hiddenSection")
        cadastroOk.classList.remove("displayFlex")
    }
})
