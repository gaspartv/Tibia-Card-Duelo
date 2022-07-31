// FUNÇÃO PARA CRIAR LAYOUT DUELO
function layout() {
    const main = document.getElementById("main")
    main.innerHTML = ""
    let sectionMain = document.createElement("section")
    sectionMain.id = "cardsCombatHTML"
    let pTexto1 = document.createElement("p")
    pTexto1.id = "contadorRegressivo"
    pTexto1.innerText = "Vamos batalhar?"
    let ulMain = document.createElement("ul")
    ulMain.id = "batalhaHTML"
    ulMain.classList.add("cardsCombat")
    let liPlayer1 = document.createElement("li")
    liPlayer1.classList.add("cardPlayer1")
    let liDivisor = document.createElement("li")
    liDivisor.classList.add("divisorX")
    liDivisor.innerText = "X"
    let liPlayer2 = document.createElement("li")
    liPlayer2.classList.add("cardPlayer2")
    let pTexto2 = document.createElement("p")
    pTexto2.id = "logFight"
    pTexto2.innerText = "Estou aguardando sua joga!!!"
    let pTexto3 = document.createElement("p")
    pTexto3.id = "logFight2"
    pTexto3.innerText = "Não tenha pressa, tenho todo tempo do mundo!"
    ulMain.append(liPlayer1, liDivisor, liPlayer2)
    sectionMain.append(pTexto1, ulMain, pTexto2, pTexto3)
    let divMain = document.createElement("div")
    divMain.id = "footer"
    let pTextoCartasRestantes = document.createElement("p")
    pTextoCartasRestantes.classList.add("cartasComprar")
    let divBotoes = document.createElement("div")
    divBotoes.classList.add("botoes")
    let btnAtacar = document.createElement("button")
    btnAtacar.id = "atacarCarta"
    btnAtacar.innerText = "Atacar"
    let btnComprar = document.createElement("button")
    btnComprar.id = "comprarCarta"
    btnComprar.innerText = "Comprar"
    let btnDescartar = document.createElement("button")
    btnDescartar.id = "descartarCarta"
    btnDescartar.innerText = "Descartar"
    let ulCartasMao = document.createElement("ul")
    ulCartasMao.id = "cardsMaoHTML"
    ulCartasMao.classList.add("cardsHands")
    divBotoes.append(btnAtacar, btnComprar, btnDescartar)
    divMain.append(pTextoCartasRestantes, divBotoes, ulCartasMao)
    main.append(sectionMain, divMain)
    
}