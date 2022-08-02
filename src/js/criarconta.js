// FUNÇÃO PARA ADICIONAR MOSTRAR ERRO
function cadastroErroAdd(classe) {
    classe.classList.add("cadastroInputErro")
    classe.classList.remove("cadastroInput")
}

// FUNÇÃO PARA ADICIONAR ESCONDER ERRO
function cadastroErroRemover(classe) {
    classe.classList.remove("cadastroInputErro")
    classe.classList.add("cadastroInput")
}

// BOTÃO "CRIAR CONTA"
const cadastroNomeUsuario = document.querySelector(".cadastroNomeUsuario")
const cadastroSenha = document.querySelector(".cadastroSenha")
const cadastroRepitaSenha = document.querySelector(".cadastroRepitaSenha")
const cadastroEmail = document.querySelector(".cadastroEmail")
const cadastroRepitaEmail = document.querySelector(".cadastroRepitaEmail")

const cadastroMsgErro = document.getElementById("cadastroMsgErro")
const cadastroSenhaMsgErro = document.getElementById("cadastroSenhaMsgErro")
const cadastroRepitaSenhaMsgErro = document.getElementById("cadastroRepitaSenhaMsgErro")
const cadastroEmailMsgErro = document.getElementById("cadastroEmailMsgErro")
const cadastroRepetirEmailMsgErro = document.getElementById("cadastroRepetirEmailMsgErro")

const btnCadastrar = document.getElementById("btnCadastrar")
btnCadastrar.addEventListener("click", (event) => {
    let target = event.target
    let regex = new RegExp("^[ 0-9a-zA-Z\b]+$")
    let nomeUsuario = cadastroNomeUsuario.value.replace(/\s/g, '')
    let senhaUsuario = cadastroSenha.value.replace(/\s/g, '')
    let repetirSenhaUsuario = cadastroRepitaSenha.value.replace(/\s/g, '')
    let emailUsuario = cadastroEmail.value.replace(/\s/g, '')
    let repetirEmailUsuario = cadastroRepitaEmail.value.replace(/\s/g, '')

    let validarUsuario = false
    for (let key in usuario) {
        if (usuario[key].user == nomeUsuario.toLowerCase()) {
            validarUsuario = true
        }
    }

    if (target.tagName == "BUTTON") {
        if (nomeUsuario != "" && nomeUsuario.length >= 5 && nomeUsuario.length <= 10 && validarUsuario != true) {
            cadastroMsgErro.classList.add("hidden")
            cadastroErroRemover(cadastroNomeUsuario)
            if (!regex.test(nomeUsuario)) {
                cadastroMsgErro.classList.remove("hidden")
                cadastroMsgErro.innerText = `Apenas letras e números`
                cadastroErroAdd(cadastroNomeUsuario)
            } else if (senhaUsuario != "" && senhaUsuario.length >= 5) {
                    cadastroSenhaMsgErro.classList.add("hidden")
                    cadastroErroRemover(cadastroSenha)
                if (repetirSenhaUsuario != "" && repetirSenhaUsuario === senhaUsuario) {
                    cadastroRepitaSenhaMsgErro.classList.add("hidden")
                    cadastroErroRemover(cadastroRepitaSenha)
                    if (emailUsuario != "" && emailUsuario.includes("@")) {
                        cadastroEmailMsgErro.classList.add("hidden")
                        cadastroErroRemover(cadastroEmail)
                        if (repetirEmailUsuario != "" && repetirEmailUsuario === emailUsuario) {
                            cadastroRepetirEmailMsgErro.classList.add("hidden")
                            cadastroErroRemover(cadastroRepitaEmail)

                            usuario.push({
                                id: usuario.length,
                                user: nomeUsuario.toLowerCase(),
                                senha: senhaUsuario.toLowerCase(),
                                email: emailUsuario.toLowerCase(),
                            })


                            modoDeJogo.classList.remove("displayFlex")
                            cadastroOk.classList.add("displayFlex")

                            modoDeJogo.classList.add("hiddenSection")
                            cadastroOk.classList.remove("hiddenSection")

                        } else if (repetirEmailUsuario == "") {
                            cadastroRepetirEmailMsgErro.classList.remove("hidden")
                            cadastroRepetirEmailMsgErro.innerText = `Você precisa digitar o e-mail!`
                            cadastroErroAdd(cadastroRepitaEmail)
                        } else {
                            cadastroRepetirEmailMsgErro.classList.remove("hidden")
                            cadastroRepetirEmailMsgErro.innerText = `Os e-mails não são iguais!`
                            cadastroErroAdd(cadastroRepitaEmail)
                        }
                    } else if (emailUsuario == "") {
                        cadastroEmailMsgErro.classList.remove("hidden")
                        cadastroEmailMsgErro.innerText = `Você precisa digitar um e-mail!`
                        cadastroErroAdd(cadastroEmail)
                    } else {
                        cadastroEmailMsgErro.classList.remove("hidden")
                        cadastroEmailMsgErro.innerText = `Você precisa digitar um e-mail válido!`
                        cadastroErroAdd(cadastroEmail)
                    }
                } else if (repetirSenhaUsuario == "") {
                    cadastroRepitaSenhaMsgErro.classList.remove("hidden")
                    cadastroRepitaSenhaMsgErro.innerText = `Você precisa repetir a senha!`
                    cadastroErroAdd(cadastroRepitaSenha)
                } else {
                    cadastroRepitaSenhaMsgErro.classList.remove("hidden")
                    cadastroRepitaSenhaMsgErro.innerText = `As senhas não estão iguais!`
                    cadastroErroAdd(cadastroRepitaSenha)
                }
            } else if (senhaUsuario == "") {
                cadastroSenhaMsgErro.classList.remove("hidden")
                cadastroSenhaMsgErro.innerText = `Você precisa digitar uma senha!`
                cadastroMsgErro.classList.add("hidden")
                cadastroErroAdd(cadastroSenha)
                cadastroErroRemover(cadastroNomeUsuario)
            } else {
                cadastroSenhaMsgErro.classList.remove("hidden")
                cadastroSenhaMsgErro.innerText = `Deve conter mínimo 5 caracteres!`
                cadastroMsgErro.classList.add("hidden")
                cadastroErroAdd(cadastroSenha)
                cadastroErroRemover(cadastroNomeUsuario)
            }
        } else if (nomeUsuario == "") {
            cadastroMsgErro.classList.remove("hidden")
            cadastroMsgErro.innerText = `Você precisa digitar um Usuário`
            cadastroErroAdd(cadastroNomeUsuario)
        } else if (nomeUsuario.length < 5 && nomeUsuario.length > 10) {
            cadastroMsgErro.classList.remove("hidden")
            cadastroMsgErro.innerText = `Deve conter no min 5 e no max 10`
            cadastroErroAdd(cadastroNomeUsuario)
        } else {
            cadastroMsgErro.classList.remove("hidden")
            cadastroMsgErro.innerText = `Usuário já existe!`
            cadastroErroAdd(cadastroNomeUsuario)
        }
    }
})

// BOTÃO "APRENDA JOGAR"
const btntutorialInicial = document.querySelector(".tutorialInicial")
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
