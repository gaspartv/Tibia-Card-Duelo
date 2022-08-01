let cartasMaoPlayer1 = []
let cartaPlayer1 = []
let hpPlayer1 = 5000
let hpPlayer1Max = 5000
let cartasComprasPlayer1 = []
let cartasMaoPlayer2 = []
let cartaPlayer2 = []
let hpPlayer2 = 5000
let hpPlayer2Max = 5000
let cartasComprasPlayer2 = []
let cartasBatalha = []
let quantidadeCartasComprar = 10
let quantidadeCartasComprar2 = 10

const cardsMaoHTML = document.getElementById("cardsMaoHTML")
const cardsCombatHTML = document.getElementById("cardsCombatHTML")
const qntCartas = document.querySelector(".cartasComprar")
qntCartas.innerText = ""
const logFight = document.getElementById("logFight")
const logFight2 = document.getElementById("logFight2")
const contadorRegressivo = document.getElementById("contadorRegressivo")
const cardPlayer1 = document.querySelector(".cardPlayer1")
const cardPlayer2 = document.querySelector(".cardPlayer2")
const divisorX = document.querySelector(".divisorX")
const footer = document.getElementById("footer")
const body = document.getElementById("body")
const textoCardPlayer1 = document.getElementById("textoCardPlayer1")
const textoCardPlayer2 = document.getElementById("textoCardPlayer2")
const btnDuelar = document.getElementById("duelar")
const btnDeck = document.getElementById("deck")
const botoes = document.querySelector(".botoes")
const habilidadesPlayer1 = document.getElementById("habilidadesPlayer1")
const habilidadesPlayer2 = document.getElementById("habilidadesPlayer2")


if (quantidadeCartasComprar == 1) {
    qntCartas.innerText = `Você selecionou o modo para jogar com ${quantidadeCartasComprar} carta!`
} else if (quantidadeCartasComprar > 1) {
    qntCartas.innerText = `Você selecionou o modo para jogar com ${quantidadeCartasComprar} cartas!`
} else {
    qntCartas.innerText = `Para iniciar o jogo, volte no menu e selecione a quantidade de cartas!`
}

// FUNÇÃO BATALHA
function batalha() {
    player1()
    modoDeEsperaPlayer2()
}

// FUNÇÃO RANDOM NÚMERO
function randomNumber(numeroMaximo) {
    return Math.floor(Math.random() * numeroMaximo)
}

// FUNÇÃO CALCULAR DANO
function calcularDano(player1, player2) {
    let danoFisico = player1[0].ataqueFisico - player2[0].defesa
    let danoMagico = 0
    let porcentagem = 0
    let arrayMagias = player1[0].ataqueMagico[0]
    let arrayResistencia = player2[0].resistencia[0]
    for (let keyATK in arrayMagias) {
        let keyMagiasATK = arrayMagias[keyATK]
        if (keyMagiasATK > 0) {
            for (let keyResist in arrayResistencia) {
                let keyResistencia = arrayResistencia[keyResist]
                if (keyATK == keyResist) {
                    porcentagem = (keyResistencia / 100) *  keyMagiasATK
                    if (keyResistencia < 0) {
                        danoMagico = keyMagiasATK + porcentagem
                    } else if (keyResistencia > 0) {
                        danoMagico = keyMagiasATK - porcentagem
                    } else {
                        danoMagico = keyMagiasATK
                    }
                }
                porcentagem = 0
            }
        }
    }
    return dano = danoFisico + danoMagico
}

// FUNÇÃO COMBATE
function combate() {
    // DAMAGE
    let danoPlayer1 = 0
    let danoPlayer2 = 0

    let danoExtra1 = 0
    let danoExtra2 = 0

    let danoDrunk1 = 1
    let danoDrunk2 = 1

    let velocidadeExtra1 = 0
    let velocidadeExtra2 = 0

    let velocidadeParalizy1 = 0
    let velocidadeParalizy2 = 0

    cartaPlayer1.forEach(elem => {
        elem.status.forEach(elemStatus => {
            elemStatus == "heal" ? elem.hp += elem.habilidades[0].heal : ""
            elemStatus == "veneno" ? danoExtra2 = elem.habilidades[0].veneno : ""
            elemStatus == "drunk" ? danoDrunk1 = elem.habilidades[0].drunk : ""
            elemStatus == "haste" ? velocidadeExtra1 = elem.habilidades[0].haste : ""
            elemStatus == "paralyze" ? velocidadeParalizy2 = elem.habilidades[0].paralyze : ""
        })
    })
    cartaPlayer2.forEach(elem => {
        elem.status.forEach(elemStatus => {
            elemStatus == "heal" ? elem.hp += elem.habilidades[0].heal : ""
            elemStatus == "veneno" ? danoExtra1 = elem.habilidades[0].veneno : ""
            elemStatus == "drunk" ? danoDrunk2 = elem.habilidades[0].drunk : ""
            elemStatus == "haste" ? velocidadeExtra2 = elem.habilidades[0].haste : ""
            elemStatus == "paralyze" ? velocidadeParalizy1 = elem.habilidades[0].paralyze : ""
        })
    })

    let velocidadePlayer1 = parseInt((cartaPlayer1[0].velocidade + cartaPlayer1[0].stamina + velocidadeExtra1) - velocidadeParalizy1)
    let velocidadePlayer2 = parseInt((cartaPlayer2[0].velocidade + cartaPlayer2[0].stamina + velocidadeExtra2) - velocidadeParalizy2)

    // QUEM ATACA PRIMEIRO
    if (velocidadePlayer1 == velocidadePlayer2) {
        if (cartaPlayer1[0].estrela == cartaPlayer2[0].estrela) {
            if (cartaPlayer1[0].raridade == cartaPlayer2[0].raridade) {
                danoPlayer1 = cartaPlayer2[0].ataqueFisico - cartaPlayer1[0].defesa
                danoPlayer2 = cartaPlayer1[0].ataqueFisico - cartaPlayer2[0].defesa
            } else if (cartaPlayer1[0].raridade > cartaPlayer2[0].raridade) {
                danoPlayer1 = cartaPlayer2[0].ataqueFisico - cartaPlayer1[0].defesa
                danoPlayer2 = calcularDano(cartaPlayer1, cartaPlayer2)
            } else {
                danoPlayer2 = cartaPlayer1[0].ataqueFisico - cartaPlayer2[0].defesa
                danoPlayer1 = calcularDano(cartaPlayer2, cartaPlayer1)
            }
        } else if (cartaPlayer1[0].estrela > cartaPlayer2[0].estrela) {
            danoPlayer1 = cartaPlayer2[0].ataqueFisico - cartaPlayer1[0].defesa
            danoPlayer2 = calcularDano(cartaPlayer1, cartaPlayer2)
        } else {
            danoPlayer2 = cartaPlayer1[0].ataqueFisico - cartaPlayer2[0].defesa
            danoPlayer1 = calcularDano(cartaPlayer2, cartaPlayer1)
        }
    } else if (velocidadePlayer1 > velocidadePlayer2) {
        danoPlayer1 = cartaPlayer2[0].ataqueFisico - cartaPlayer1[0].defesa
        danoPlayer2 = calcularDano(cartaPlayer1, cartaPlayer2)
    } else {
        danoPlayer2 = cartaPlayer1[0].ataqueFisico - cartaPlayer2[0].defesa
        danoPlayer1 = calcularDano(cartaPlayer2, cartaPlayer1)
    }

    let dano1 = parseInt((danoPlayer1 + danoExtra1) / danoDrunk1)
    let dano2 = parseInt((danoPlayer2 + danoExtra2) / danoDrunk2)

    if (cartaPlayer1[0].hp > dano1) {
        cartaPlayer1[0].hp += -dano1
    } else if (cartaPlayer1[0].hp < dano1) {
        let danoPuro = cartaPlayer1[0].hp += -dano1
        cartaPlayer1[0].hp += -danoPuro
        hpPlayer1 += danoPuro
    }
    if (cartaPlayer2[0].hp > dano2) {
        cartaPlayer2[0].hp += -dano2
    } else if (cartaPlayer2[0].hp < dano2) {
        let danoPuro = cartaPlayer2[0].hp += -dano2
        cartaPlayer2[0].hp += -danoPuro
        hpPlayer2 += danoPuro
    }


    cartaPlayer1[0].hp += -dano1
    cartaPlayer2[0].hp += -dano2

    // GASTO DE STAMINA
    cartaPlayer1[0].stamina = cartaPlayer1[0].stamina - 10
    cartaPlayer2[0].stamina = cartaPlayer2[0].stamina - 10

    // MENSAGENS NA TELA
        divisorX.innerText = ``
        contadorRegressivo.innerHTML = ``
        logFight2.innerHTML = ``
        logFight.innerHTML = ``
    if (danoPlayer1 < danoPlayer2) {
        divisorX.innerText = `< ${cartaPlayer1[0].nome} venceu!`
        contadorRegressivo.innerHTML = `Causando ${dano2} dano!`
        logFight2.innerHTML = `Resistiu a ${dano1} dano!`
    } else if (danoPlayer1 > danoPlayer2) {
        divisorX.innerText = `${cartaPlayer2[0].nome} venceu! >`
        contadorRegressivo.innerHTML = `Causando ${dano1} dano!`
        logFight2.innerHTML = `Resistiu a ${dano2} dano!`
    } else {
        divisorX.innerText = `EMPATE!`
        logFight.innerHTML = `Você recebeu ${dano1} de dano e tirou ${dano2} de dano!`
    }


    // PLAYER 1
    let idCartaPlayer1 = cartaPlayer1[0].id
    cartasMaoPlayer1.forEach((elem, index) => {
        if (idCartaPlayer1 != elem.id) {
            elem.stamina < 30 ? elem.stamina += 10 : ""
        }
        if (idCartaPlayer1 == elem.id) {
            if (elem.hp <= 0) {
                cartasMaoPlayer1.splice(index, 1)
                logFight.innerHTML = `Você perdeu a carta&nbsp;<del style="color: red;">${elem.nome}</del>`
                textoCardPlayer1.innerHTML = "Não consegui resistir!"
                textoCardPlayer2.innerHTML = "ESTE E O SEU MELHOR?"
                cardPlayer1.classList.add("derrota")
            } else if (elem.hp > 0) {
                cartasMaoPlayer1.splice(index, 1)
                cartasMaoPlayer1.push(cartaPlayer1[0])
            }
        }
        player1()
        criarCardsMao()
    })

    // PLAYER 2
    let idCartaPlayer2 = cartaPlayer2[0].id
    cartasMaoPlayer2.forEach((elem, index) => {
        if (idCartaPlayer2 != elem.id) {
            elem.stamina < 30 ? elem.stamina += 10 : ""
        }
        if (idCartaPlayer2 == elem.id) {
            if (elem.hp <= 0) {
                cartasMaoPlayer2.splice(index, 1)
                logFight.innerHTML = `Você destruiu a carta&nbsp;<del style="color: red;">${elem.nome}</del> do seu inimigo!`
                textoCardPlayer1.innerHTML = "SEM PIEDADE!"
                textoCardPlayer2.innerHTML = "Ohhh não..."
                cardPlayer2.classList.add("derrota")
            } else if (elem.hp > 0) {
                cartasMaoPlayer2.splice(index, 1)
                cartasMaoPlayer2.push(cartaPlayer2[0])
            }
        }
        player2()
    })

    // RESETAR TODOS OS ATRIBUTOS 
    botoes.classList.remove("hidden")
    hpPlayers()
}

// FUNÇÃO HABILIDADES
function habilidades() {
    cartasMaoPlayer1.forEach((elem) => {
        let arrayStatus = elem.status
        let arrayHabilidades = elem.habilidades[0]
        for (let key in arrayHabilidades) {
            let statusTrueFalse = arrayStatus.includes(key)
            if (statusTrueFalse == false) {
                if (arrayHabilidades[key] != false) {
                    arrayStatus.push(key)
                }
            }
        }
    })
    cartasMaoPlayer2.forEach((elem) => {
        let arrayStatus = elem.status
        let arrayHabilidades = elem.habilidades[0]
        for (let key in arrayHabilidades) {
            let statusTrueFalse = arrayStatus.includes(key)
            if (statusTrueFalse == false) {
                if (arrayHabilidades[key] != false) {
                    arrayStatus.push(key)
                }
            }
        }
    })
}

function hpPlayers() {
    let porcentagemHPplayer1 = (hpPlayer1 / hpPlayer1Max) * 100
    let porcentagemHPplayer2 = (hpPlayer2 / hpPlayer2Max) * 100
    const hpTexto1 = document.querySelector(".hpTexto1")
    const hpTexto2 = document.querySelector(".hpTexto2")
    const green1 = document.querySelector("#barraHPgreenPlayer1")
    const green2 = document.querySelector("#barraHPgreenPlayer2")
    hpTexto1.innerText = hpPlayer1
    green1.classList.add("green1")
    green1.style = `background-color: green; width: ${porcentagemHPplayer1}%; height: 27px;`
    hpTexto2.innerText = hpPlayer2
    green2.classList.add("green2")
    green2.style = `background-color: green; width: ${porcentagemHPplayer2}%; height: 27px;`
}

//======== FUNÇÕES PLAYER 1 =======//
//======== FUNÇÕES PLAYER 1 =======//
//======== FUNÇÕES PLAYER 1 =======//

// FUNÇÃO CRIAR CARDS PLAYER 1
function player1() {
    cardPlayer1.innerHTML = ""
    if (cartaPlayer1.length == 0) {
        modoDeEsperaPlayer1()
    } else {
        let criatura = cartaPlayer1[0]
        cardPlayer1.classList.add("cards")
        cardPlayer1.id = criatura.id
        let nome = document.createElement("h3")
        nome.innerText = criatura.nome
        let estrela = document.createElement("p")
        estrela.classList.add("estrelasRaridade")
        let estrelaImg = document.createElement("img")
        estrelaImg.src = `./src/img/estrelas/difficulty_${criatura.estrela}.png`
        estrelaImg.title = "Estrelas"
        let raridadeImg = document.createElement("img")
        raridadeImg.src = `./src/img/raridade/rarity_${criatura.raridade}.png`
        raridadeImg.title = "Raridade"
        let ataqueDefesa = document.createElement("p")
        ataqueDefesa.innerHTML = `<img src="./src/img/efeitos/ataque.gif">&nbsp;${criatura.ataqueFisico}&nbsp;&nbsp;&nbsp;<img src="./src/img/efeitos/defesa.gif">&nbsp;${criatura.defesa}`
        ataqueDefesa.classList.add("ataqueDefesa")
        let divHPred = document.createElement("div")
        divHPred.classList.add("divHPred")
        let porcentagemHP = (criatura.hp/criatura.hpTotal)*100
        let divHPgreen = document.createElement("div")
        divHPgreen.id = `green${criatura.id}`
        divHPgreen.style = `background-color: green; width: ${porcentagemHP}%; height: 5px; border-radius: 2px;`
        hitPoint = document.createElement("p")
        hitPoint.classList.add("hitPoint")
        hitPoint.innerHTML = `<strong>HP:&nbsp;</strong>${criatura.hp}`
        let divImg = document.createElement("div")
        divImg.classList.add("imgCardMao")
        let img = document.createElement("img")
        img.src = criatura.img
        estrela.append(estrelaImg, raridadeImg)
        divHPred.appendChild(divHPgreen)
        divImg.appendChild(img)
        cardPlayer1.append(nome, estrela, ataqueDefesa, divHPred, hitPoint, divImg)
    }
}

// MODO DE ESPERA PLAYER 1
function modoDeEsperaPlayer1() {
        cardPlayer1.innerHTML = ""
        cardPlayer1.classList.add("cards")
        cardPlayer1.classList.add("espera")
        let espera = document.createElement("img")
        espera.src = "./src/img/espera.gif"
        cardPlayer1.appendChild(espera)
}

// BOTÃO ATACAR
const atacarCarta = document.getElementById("atacarCarta")
atacarCarta.addEventListener("click", () => {
    modoDeEsperaPlayer2()
    textoCardPlayer1.innerHTML = "..."
    textoCardPlayer2.innerHTML = "..."
    if (cartaPlayer1.length > 0) {
        botoes.classList.add("hidden")
        if (cartaPlayer1[0].stamina > 0) {
            atacar()
        } else if (cartaPlayer1[0].stamina <= 0 && cartasMaoPlayer1.length == 1 && quantidadeCartasComprar == 0) {
            atacar()
        } else {
            botoes.classList.remove("hidden")
            cardPlayer1.classList.add("derrota")
            divisorX.innerHTML = "ATENÇÃO"
            contadorRegressivo.innerHTML = `${cartaPlayer1[0].nome}`
            logFight2.innerHTML = `Está sem stamina...`
            logFight.innerHTML = "Use outra carta para continuar!"
            textoCardPlayer1.innerHTML = "Estou cansado!"
        }
    } else {
        divisorX.innerHTML = "ATENÇÃO"
        contadorRegressivo.innerHTML = ``
        logFight2.innerHTML = `Você precisa escolher uma carta!`
        logFight.innerHTML = ""
    }
})

function atacar() {
    let timerValor = 5
    let sonsTamanho1 = cartaPlayer1[0].sons.length
    let sonsTamanho2 = cartaPlayer2[0].sons.length
    setInterval(() => {
        let randomSons1 = randomNumber(sonsTamanho1)
        let randomSons2 = randomNumber(sonsTamanho2)

        if (timerValor > 0) {
            sonsTamanho1 > 0 ? textoCardPlayer1.innerText = cartaPlayer1[0].sons[randomSons1] : ""
            sonsTamanho2 > 0 ? textoCardPlayer2.innerText = cartaPlayer2[0].sons[randomSons2] : ""
            if (timerValor == 5) {
                divisorX.innerText = timerValor
                contadorRegressivo.innerHTML = ""
                logFight2.innerHTML = ""
                logFight.innerHTML = ""
            } else if (timerValor == 4) {
                divisorX.innerText = timerValor
            } else if (timerValor == 3) {
                divisorX.innerText = timerValor
            } else if (timerValor == 2) {
                divisorX.innerText = timerValor
            } else if (timerValor == 1) {
                divisorX.innerText = timerValor
            }
            timerValor--
    }
}, 1000)
setTimeout(() => {
    comprarCartasPlayer2()
    player2()
    divisorX.innerHTML = `Fight`
    contadorRegressivo.innerHTML = ""
    logFight.innerHTML = ""
    logFight2.innerHTML = `<strong>${cartaPlayer1[0].nome}</strong>&nbsp;x&nbsp;<strong>${cartaPlayer2[0].nome}</strong>`
}, 6000)
setTimeout(() => {
        combate()
}, 12000)
}

// BOTÃO COMPRAR CARTA
const comprarCartas = document.getElementById("comprarCarta")
comprarCartas.addEventListener("click", () => {
    if (cartasMaoPlayer1.length < 5 && quantidadeCartasComprar > 0) {
        let randomN = randomNumber(arrayCriaturas.length)
        let retorno = cartasComprasPlayer1.includes(randomN)
        if (retorno == false) {
            cartasComprasPlayer1.push(randomN)
            cartasMaoPlayer1.length < 5 ? (cartasMaoPlayer1.push(arrayCriaturas[randomN]), quantidadeCartasComprar--) : ""
            qntCartas.innerText = ""
                if (quantidadeCartasComprar == 1) {
                    qntCartas.innerHTML = `Você pode comprar ${quantidadeCartasComprar} carta!`
                } else if (quantidadeCartasComprar > 1) {
                    qntCartas.innerHTML = `Você pode comprar ${quantidadeCartasComprar} cartas!`
                } else {
                    qntCartas.innerHTML = `Você não pode comprar mais cartas!`
                }
        }
        habilidades()
        criarCardsMao()
    }
})

// BOTÃO DESCARTAR
const descartarCarta = document.getElementById("descartarCarta")
descartarCarta.addEventListener("click", () => {
    let descarte = cartaPlayer1[0]
    if (cartaPlayer1.length != 0) {
        cartaPlayer1.shift()
        cartasMaoPlayer1.forEach((elem, index) => {
            descarte.id == elem.id ? (textoCardPlayer1.innerText = `Descartei ${elem.nome}`, cartasMaoPlayer1.splice(index, 1)) : ""
        })
        player1()
        criarCardsMao()
    }
})

// BOTÃO USAR CARTA
cardsMaoHTML.addEventListener("click", (event) => {    
    cardPlayer1.classList.remove("derrota")
    textoCardPlayer2.innerHTML = "..."
    
    
    let target = event.target
    if (target.tagName == "BUTTON") {
        let idTarget = target.parentElement.id
        cartaPlayer1.shift()
        cartasMaoPlayer1.forEach(elem => elem.id == idTarget ? 
            (elem.stamina == 0 ? 
                (   cardPlayer1.classList.add("derrota"), 
                    logFight.innerHTML = "Esta carta esta sem stamina", 
                    textoCardPlayer1.innerText = `${elem.nome} estou cansado!`)
                    : textoCardPlayer1.innerText = `Vou usar ${elem.nome}`,
                      cartaPlayer1.push(elem),
                      divisorX.innerText = `${elem.nome}`,
                      contadorRegressivo.innerHTML = `<strong>HP:&nbsp;</strong>${elem.hp}`,
                      logFight2.innerHTML = `<img src="./src/img/efeitos/ataque.gif">&nbsp;${elem.ataqueFisico}&nbsp;&nbsp;&nbsp;<img src="./src/img/efeitos/defesa.gif">&nbsp;${elem.defesa}`,
                      logFight.innerHTML = `<img src="./src/img/estrelas/difficulty_${elem.estrela}.png">&nbsp;&nbsp;<img src="./src/img/raridade/rarity_${elem.raridade}.png">` ) : "")
        batalha()
    }
})

// BOTÃO MENU DUELAR
btnDuelar.addEventListener("click" , (event) => {
    let target = event.target
    if (target.tagName == "LI") {
        player1()
        modoDeEsperaPlayer2()
    }
})

// BOTÃO MENU DECK
btnDeck.addEventListener("click", (event) => {
    let target = event.target
    if (target.tagName == "LI") {
        player1()
        modoDeEsperaPlayer2()
    }
})

// FUNÇÃO CRIAR CARD NA MÃO
function criarCardsMao() {
    cardsMaoHTML.innerHTML = ""
    cartasMaoPlayer1.forEach((elem) => {
        let li = document.createElement("li")
        li.classList.add("miniCards")
        li.id = elem.id
        let nome = document.createElement("h3")
        nome.innerText = elem.nome
        let estrela = document.createElement("p")
        estrela.classList.add("estrelasRaridade")
        let estrelaImg = document.createElement("img")
        estrelaImg.src = `./src/img/estrelas/difficulty_${elem.estrela}.png`
        estrelaImg.title = "Estrelas"
        let raridadeImg = document.createElement("img")
        raridadeImg.src = `./src/img/raridade/rarity_${elem.raridade}.png`
        raridadeImg.title = "Raridade"
        let ataqueDefesa = document.createElement("p")
        ataqueDefesa.classList.add("ataqueDefesa")
        ataqueDefesa.innerHTML = `<img src="./src/img/efeitos/ataque.gif">&nbsp;${elem.ataqueFisico}&nbsp;&nbsp;&nbsp;<img src="./src/img/efeitos/defesa.gif">&nbsp;${elem.defesa}`
        let ataqueMagico = document.createElement("p")
        ataqueMagico.classList.add("ataqueMagico")
        ataqueMagico.innerHTML = "Ataque magico:<br>"
        let arrayAtaquesMagicos = []
        for (let key in elem.ataqueMagico[0]) {
            if (elem.ataqueMagico[0][key] != false) {
                arrayAtaquesMagicos.push(`<img src="./src/img/efeitos/${key}.gif" title="${key}">`)
            }
        }
        arrayAtaquesMagicos.length > 0 ? ataqueMagico.innerHTML = `Magias:${arrayAtaquesMagicos.join("")}` : ""
        let divStatus = document.createElement("div")
        divStatus.classList.add("statusBar")
        let divHPred = document.createElement("div")
        divHPred.classList.add("divHPred")
        let porcentagemHP = (elem.hp/elem.hpTotal)*100
        let divHPgreen = document.createElement("div")
        divHPgreen.id = `green${elem.id}`
        divHPgreen.style = `background-color: green; width: ${porcentagemHP}%; height: 5px; border-radius: 2px;`
        let hitPoint = document.createElement("p")
        hitPoint.classList.add("hitPoint")
        hitPoint.innerHTML = `<strong>HP:&nbsp;</strong>${elem.hp}`
        let imune = document.createElement("p")
        imune.classList.add("imune")
        let arrayHabilidades = []
        for (let key in elem.habilidades[0]) {
            elem.habilidades[0][key] != false ? arrayHabilidades.push(`<img src="./src/img/efeitos/${key}.gif" title="${key}">`) : ""
        }
        arrayHabilidades.length > 0 ? imune.innerHTML = `Skills:${arrayHabilidades.join("")}` : ""
        let velocidade = document.createElement("p")
        velocidade.classList.add("velocidade")
        velocidade.innerHTML = `Velocidade:&nbsp;${elem.velocidade}`
        let divImg = document.createElement("div")
        divImg.classList.add("imgCardMao")
        let img = document.createElement("img")
        img.src = elem.img
        let pStamina = document.createElement("p")
        pStamina.classList.add("pStamina")
        pStamina.innerHTML = `Stamina:&nbsp;${elem.stamina}`
        let btn = document.createElement("button")
        btn.classList.add("btnUsar")
        btn.innerText = "Usar carta"
        divHPred.appendChild(divHPgreen)
        estrela.append(estrelaImg, raridadeImg)
        divImg.appendChild(img)
        li.append(nome, estrela, divStatus, divHPred, hitPoint, ataqueDefesa, ataqueMagico, imune, velocidade, pStamina, divImg, btn)
        cardsMaoHTML.appendChild(li)
    })
}



//======== FUNÇÕES PLAYER 2 =======//
//======== FUNÇÕES PLAYER 2 =======//
//======== FUNÇÕES PLAYER 2 =======//

// MODO DE ESPERA PLAYER 2
function modoDeEsperaPlayer2() {
    cardPlayer2.classList.remove("derrota")
    cardPlayer2.innerHTML = ""
    cardPlayer2.classList.add("cards")
    cardPlayer2.classList.add("espera")
    let espera = document.createElement("img")
    espera.src = "./src/img/espera.gif"
    cardPlayer2.appendChild(espera)
}

// FUNÇÃO CRIAR CARDS PLAYER 2
function player2() {
    cardPlayer2.innerHTML = ""
    if (cartaPlayer2.length == 0) {
        modoDeEsperaPlayer2()
    } else {
        let criatura = cartaPlayer2[0]
        cardPlayer2.classList.add("cards")
        cardPlayer2.id = criatura.id
        let nome = document.createElement("h3")
        nome.innerText = criatura.nome
        let estrela = document.createElement("p")
        estrela.classList.add("estrelasRaridade")
        let estrelaImg = document.createElement("img")
        estrelaImg.src = `./src/img/estrelas/difficulty_${criatura.estrela}.png`
        estrelaImg.title = "Estrelas"
        let raridadeImg = document.createElement("img")
        raridadeImg.src = `./src/img/raridade/rarity_${criatura.raridade}.png`
        raridadeImg.title = "Raridade"
        let ataqueDefesa = document.createElement("p")
        ataqueDefesa.innerHTML = `<img src="./src/img/efeitos/ataque.gif">&nbsp;${criatura.ataqueFisico}&nbsp;&nbsp;&nbsp;<img src="./src/img/efeitos/defesa.gif">&nbsp;${criatura.defesa}`
        ataqueDefesa.classList.add("ataqueDefesa")
        let divHPred = document.createElement("div")
        divHPred.classList.add("divHPred")
        let porcentagemHP = (criatura.hp/criatura.hpTotal)*100
        let divHPgreen = document.createElement("div")
        divHPgreen.id = `green${criatura.id}`
        divHPgreen.style = `background-color: green; width: ${porcentagemHP}%; height: 5px; border-radius: 2px;`
        hitPoint = document.createElement("p")
        hitPoint.classList.add("hitPoint")
        hitPoint.innerHTML = `<strong>HP:&nbsp;</strong>${criatura.hp}`
        let divImg = document.createElement("div")
        divImg.classList.add("imgCardMao")
        let img = document.createElement("img")
        img.src = criatura.img
        estrela.append(estrelaImg, raridadeImg)
        divHPred.appendChild(divHPgreen)
        divImg.appendChild(img)
        cardPlayer2.append(nome, estrela, ataqueDefesa, divHPred, hitPoint, divImg)
    }
}

// FUNÇÃO COMPRAR CARTA PLAYER 2
function comprarCartasPlayer2() {
    gameOver()

    for (let i = 0; i < 5; i++) {
        if (cartasMaoPlayer2.length < 5 && quantidadeCartasComprar2 > 0) {
            let randomN = randomNumber(arrayCriaturasPlayer2.length)
            let retorno = cartasComprasPlayer2.includes(randomN)
            if (retorno == false) {
                cartasComprasPlayer2.push(randomN)
                cartasMaoPlayer2.push(arrayCriaturasPlayer2[randomN])
                quantidadeCartasComprar2--
            }
        }
    }

    cartaPlayer2.shift()
    cartaPlayer2.push(cartasMaoPlayer2[0])
    cartasMaoPlayer2.forEach(elem => {
        let speedElemento = elem.velocidade + elem.stamina
        let speedMao = cartaPlayer2[0].velocidade + cartaPlayer2[0].stamina
        if (elem.stamina > 0) {
            speedElemento > speedMao ? (cartaPlayer2.shift(), cartaPlayer2.push(elem)) : ""
        }
    }) 
}

// FUNÇÃO GAME OVER
function gameOver() {
    // FUTURA FUNÇÃO PARA GAME OVER
    if (cartasMaoPlayer2.length == 0 && quantidadeCartasComprar2 == 0) {
        setTimeout(() => {
            main.innerHTML = ""
            main.innerHTML = "Você venceu!"
            main.classList.add("main")
            footer.innerHTML = ""
            footer.innerHTML = `<a href="./index.html" class="btnContinuar">Continuar</a>`
            footer.classList.add("footer")
            body.classList.add("final")
        }, 5000)
    } else if (cartasMaoPlayer1.length == 0 && quantidadeCartasComprar == 0) {
        setTimeout(() => {
            main.innerHTML = ""
            main.innerHTML = "Você perdeu!"
            main.classList.add("main")
            footer.innerHTML = ""
            footer.innerHTML = `<a href="./index.html" class="btnContinuar">Continuar</a>`
            footer.classList.add("footer")
            body.classList.add("final")
        }, 5000)
    }
}


player1()
modoDeEsperaPlayer2()
comprarCartasPlayer2()
hpPlayers()