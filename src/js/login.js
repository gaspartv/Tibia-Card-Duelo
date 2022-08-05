// PÁGINA LOGIN
// BOTÃO EFETUAR LOGIN
const loginUsuario = document.querySelector(".loginUsuario")
const loginSenha = document.querySelector(".loginSenha")
const loginBtn = document.querySelector(".loginBtn")
const loginSenhaUserErro = document.getElementById("loginSenhaUserErro")
loginBtn.addEventListener("click", (event) => {
    let logUsuario = loginUsuario.value.replace(/\s/g, '')
    let logSenha = loginSenha.value.replace(/\s/g, '')

    let target = event.target
    if (target.tagName == "BUTTON") {
        for (let key in usuario) {
            let userNome = usuario[key].user
            let userSenha = usuario[key].senha
            if (logUsuario.toLowerCase() === userNome.toLowerCase() && logSenha === userSenha) {
                header.classList.remove("hiddenSection")
                mainDuelar.classList.add("hiddenSection")
                mainDeck.classList.remove("hiddenSection")
                mainLoja.classList.add("hiddenSection")
                mainConfiguracao.classList.add("hiddenSection")
                mainMinhaConta.classList.add("hiddenSection")
            } else {
                loginSenhaUserErro.classList.remove("hidden")
                loginSenhaUserErro.innerHTML = `Usuário ou senha incorreto!`
            }
        }
    }
})
