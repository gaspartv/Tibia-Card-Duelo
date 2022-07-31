let cartasMaoPlayer1 = []
let cartaPlayer1 = []
let hpPlayer1 = 5000
let cartasComprasPlayer1 = []
let cartasMaoPlayer2 = []
let cartaPlayer2 = []
let hpPlayer2 = 5000
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

if (quantidadeCartasComprar == 1) {
    qntCartas.innerText = `Você pode comprar ${quantidadeCartasComprar} carta!`
} else if (quantidadeCartasComprar > 1) {
    qntCartas.innerText = `Você pode comprar ${quantidadeCartasComprar} cartas!`
} else {
    qntCartas.innerText = `Você não pode comprar mais cartas!`
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
    player2()
    // DAMAGE
    let danoPlayer1 = 0
    let danoPlayer2 = 0
    let velocidadePlayer1 = cartaPlayer1[0].velocidade + cartaPlayer1[0].stamina
    let velocidadePlayer2 = cartaPlayer2[0].velocidade + cartaPlayer2[0].stamina

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

    cartaPlayer1[0].hp = cartaPlayer1[0].hp - danoPlayer1
    cartaPlayer2[0].hp = cartaPlayer2[0].hp - danoPlayer2

    // GASTO DE STAMINA
    cartaPlayer1[0].stamina = cartaPlayer1[0].stamina - 10
    cartaPlayer2[0].stamina = cartaPlayer2[0].stamina - 10

    // HABILIDADE DE CURAR
    if (cartaPlayer1[0].habilidades[0].heal != false) {
        cartaPlayer1[0].hp = cartaPlayer1[0].hp + cartaPlayer1[0].habilidades[0].heal
        textoCardPlayer1.innerHTML = `Consegui recuperar ${cartaPlayer1[0].habilidades[0].heal} HP`
    }
    if (cartaPlayer2[0].habilidades[0].heal != false) {
        cartaPlayer2[0].hp = cartaPlayer2[0].hp + cartaPlayer2[0].habilidades[0].heal
        textoCardPlayer2.innerHTML = `Consegui recuperar ${cartaPlayer2[0].habilidades[0].heal} HP`
    }

    // MENSAGENS NA TELA
    if (danoPlayer1 < danoPlayer2) {
        divisorX.innerText = ">"
        contadorRegressivo.innerHTML = `Na próxima eu te derrubo!`
    } else {
        divisorX.innerText = "<"
        contadorRegressivo.innerHTML = `Esta gostando de apanhar?`
    }
    logFight.innerHTML = `Você recebeu ${danoPlayer1} de dano e tirou ${danoPlayer2} de dano!`

    // PLAYER 1
    let idCartaPlayer1 = cartaPlayer1[0].id
    cartasMaoPlayer1.forEach((elem, index) => {
        if (idCartaPlayer1 != elem.id) {
            if (elem.stamina < 30) {
                elem.stamina += 10
            }
        }
        if (idCartaPlayer1 == elem.id) {
            if (elem.hp <= 0) {
                cartaPlayer1.shift()
                cartasMaoPlayer1.splice(index, 1)
                logFight2.innerHTML = `Você perdeu a carta ${elem.nome}`
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
            if (elem.stamina < 30) {
                elem.stamina += 10
            }
        }
        if (idCartaPlayer2 == elem.id) {
            if (elem.hp <= 0) {
                cartasMaoPlayer2.splice(index, 1)
                logFight2.innerHTML = `Você destruiu a carta ${elem.nome} do seu inimigo!`
                cardPlayer2.classList.add("derrota")
            } else if (elem.hp > 0) {
                cartasMaoPlayer2.splice(index, 1)
                cartasMaoPlayer2.push(cartaPlayer2[0])
            }
        }
        player2()
    })

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
    danoPlayer1 = 0
    danoPlayer2 = 0
}



//======== FUNÇÕES PLAYER 1 =======//
//======== FUNÇÕES PLAYER 1 =======//
//======== FUNÇÕES PLAYER 1 =======//

// FUNÇÃO CRIAR CARDS PLAYER 1
function player1() {
    const cardPlayer1 = document.querySelector(".cardPlayer1")
    cardPlayer1.innerHTML = ""
    if (cartaPlayer1.length == 0) {
        modoDeEsperaPlayer1()
    } else {
        let criatura = cartaPlayer1[0]
        cardPlayer1.classList.add("cards")
        cardPlayer1.id = criatura.id
        let nome = document.createElement("h3")
        nome.innerText = criatura.nome
        let ataqueDefesa = document.createElement("p")
        ataqueDefesa.innerText = `Ataque: ${criatura.ataqueFisico} / Defesa ${criatura.defesa}`
        let hitPoint = document.createElement("p")
        hitPoint.innerHTML = `HP: ${criatura.hp}`
        let img = document.createElement("img")
        img.src = criatura.img
        cardPlayer1.append(nome, ataqueDefesa, hitPoint, img)
    }
}

// MODO DE ESPERA PLAYER 1
function modoDeEsperaPlayer1() {
    const cardPlayer1 = document.querySelector(".cardPlayer1")
    cardPlayer1.innerHTML = ""
        cardPlayer1.classList.add("cards")
        let nome = document.createElement("h3")
        nome.innerText = "???"
        let ataqueDefesa = document.createElement("p")
        ataqueDefesa.innerText = "???"
        let hitPoint = document.createElement("p")
        hitPoint.innerHTML = "???"
        let imune = document.createElement("p")
        imune.innerHTML = "???"
        let forte = document.createElement("p")
        forte.innerHTML = "???"
        let fraco = document.createElement("p")
        fraco.innerHTML = "???"
        let velocidade = document.createElement("p")
        velocidade.innerHTML = "???"
        cardPlayer1.append(nome, ataqueDefesa, hitPoint, imune, forte, fraco, velocidade)
}

// BOTÃO ATACAR
const atacarCarta = document.getElementById("atacarCarta")
atacarCarta.addEventListener("click", () => {
    modoDeEsperaPlayer2()
    textoCardPlayer1.innerHTML = "..."
    textoCardPlayer2.innerHTML = "..."
    if (cartaPlayer1.length > 0) {
        let timerValor = 5
        let sonsTamanho1 = cartaPlayer1[0].sons.length
        let sonsTamanho2 = cartaPlayer2[0].sons.length
        if (cartaPlayer1[0].stamina > 0) {
            if (cartaPlayer1.length > 0) {
                setInterval(() => {
                    if (timerValor > 0) {
                        if (sonsTamanho1 > 0) {
                            let randomSons1 = randomNumber(sonsTamanho1)
                            textoCardPlayer1.innerText = cartaPlayer1[0].sons[randomSons1]
                        }
                        if (sonsTamanho2 > 0) {
                            let randomSons2 = randomNumber(sonsTamanho2)
                            textoCardPlayer2.innerText = cartaPlayer2[0].sons[randomSons2]
                        }
                    
                    divisorX.innerText = timerValor
                    contadorRegressivo.innerHTML = `A batalha já vai começar!!!`
                    logFight.innerHTML = "Aguardando outro jogador..."
                    logFight2.innerHTML = `...`
                    timerValor--
                }
            }, 1000)
            setTimeout(() => {
                comprarCartasPlayer2()
                divisorX.innerHTML = "Fight"
                contadorRegressivo.innerHTML = `A batalha começou!!!`
                logFight2.innerHTML = `Seu inimigo escolheu ${cartaPlayer2[0].nome}`
            }, 6000)
            setTimeout(() => {
                    combate()
            }, 10000)
            }
        } else {
            contadorRegressivo.innerHTML = `ATENÇÃO`
            logFight.innerHTML = "ESTÁ CARTA ESTA SEM STAMINA"
            logFight2.innerHTML = `USE OUTRA PARA CONTINUAR`
            cartaPlayer1.shift()
            player1()
        }
    }
})

// BOTÃO COMPRAR CARTA
const comprarCartas = document.getElementById("comprarCarta")
comprarCartas.addEventListener("click", () => {
    if (cartasMaoPlayer1.length < 5 && quantidadeCartasComprar > 0) {
        let randomN = randomNumber(arrayCriaturas.length)
        console.log(randomN)
        let retorno = cartasComprasPlayer1.includes(randomN)
        if (retorno == false) {
            cartasComprasPlayer1.push(randomN)
            cartasMaoPlayer1.length < 5 ? cartasMaoPlayer1.push(arrayCriaturas[randomN]) : ""
            quantidadeCartasComprar--
            qntCartas.innerText = ""
                if (quantidadeCartasComprar == 1) {
                    qntCartas.innerHTML = `Você pode comprar ${quantidadeCartasComprar} carta!`
                } else if (quantidadeCartasComprar > 1) {
                    qntCartas.innerHTML = `Você pode comprar ${quantidadeCartasComprar} cartas!`
                } else {
                    qntCartas.innerHTML = `Você não pode comprar mais cartas!`
                }
            
        }
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
            descarte.id == elem.id ? cartasMaoPlayer1.splice(index, 1) : ""
        })
        player1()
        criarCardsMao()
    }
})

// BOTÃO USAR CARTA
cardsMaoHTML.addEventListener("click", (event) => {
    let target = event.target
    if (target.tagName == "BUTTON") {
        let idTarget = target.parentElement.id
        cartaPlayer1.shift()
        cartasMaoPlayer1.forEach(elem => elem.id == idTarget ? cartaPlayer1.push(elem) : "")
        batalha()
    }
    cardPlayer1.classList.remove("derrota")
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
        ataqueDefesa.innerText = `Ataque: ${elem.ataqueFisico} / Defesa ${elem.defesa}`
        let ataqueMagico = document.createElement("p")
        ataqueMagico.innerHTML = "Ataque magico:<br>"
        let contadorAtaqueMagico = 0
        for (let key in elem.ataqueMagico[0]) {
            if (elem.ataqueMagico[0][key] != false) {
                contadorAtaqueMagico++
                ataqueMagico.innerHTML += `${key}: ${elem.ataqueMagico[0][key]}<br>`
            }
        }
        contadorAtaqueMagico == 0 ? ataqueMagico.innerHTML = "" : ""
        let divStatus = document.createElement("div")
        divStatus.id = `status${elem.id}`
        let divHPred = document.createElement("div")
        divHPred.classList.add("divHPred")
        let porcentagemHP = (elem.hp/elem.hpTotal)*100
        let divHPgreen = document.createElement("div")
        divHPgreen.id = `green${elem.id}`
        divHPgreen.style = `background-color: green; width: ${porcentagemHP}%; height: 5px; border-radius: 2px;`
        let hitPoint = document.createElement("p")
        hitPoint.classList.add("hitPoint")
        hitPoint.innerHTML = `HP: ${elem.hp}`
        let imune = document.createElement("p")
        imune.innerHTML = "Habilidades:<br>"
        let contadorHabilidades = 0
        for (let key in elem.habilidades[0]) {
            elem.habilidades[0][key] != false ? (imune.innerHTML += `${key}: ${elem.habilidades[0][key]}<br>`, contadorHabilidades++) : ""
        }
        contadorHabilidades == 0 ? imune.innerHTML = "" : ""
        let velocidade = document.createElement("p")
        velocidade.innerHTML = `Velocidade: ${elem.velocidade}`
        let img = document.createElement("img")
        img.src = elem.img
        let pStamina = document.createElement("p")
        pStamina.innerText = `Stamina: ${elem.stamina}`
        let btn = document.createElement("button")
        btn.classList.add("btnUsar")
        btn.innerText = "Usar carta"
        divHPred.appendChild(divHPgreen)
        estrela.append(estrelaImg, raridadeImg)
        li.append(nome, estrela, divStatus, divHPred, hitPoint, ataqueDefesa, ataqueMagico, imune, velocidade, img, pStamina, btn)
        cardsMaoHTML.appendChild(li)
    })
}



//======== FUNÇÕES PLAYER 2 =======//
//======== FUNÇÕES PLAYER 2 =======//
//======== FUNÇÕES PLAYER 2 =======//

// MODO DE ESPERA PLAYER 2
function modoDeEsperaPlayer2() {
    const cardPlayer2 = document.querySelector(".cardPlayer2")
    cardPlayer2.classList.remove("derrota")
    cardPlayer2.innerHTML = ""
        cardPlayer2.classList.add("cards")
        let nome = document.createElement("h3")
        nome.innerText = "???"
        let ataqueDefesa = document.createElement("p")
        ataqueDefesa.innerText = "???"
        let hitPoint = document.createElement("p")
        hitPoint.innerHTML = "???"
        let imune = document.createElement("p")
        imune.innerHTML = "???"
        let forte = document.createElement("p")
        forte.innerHTML = "???"
        let fraco = document.createElement("p")
        fraco.innerHTML = "???"
        let velocidade = document.createElement("p")
        velocidade.innerHTML = "???"
        cardPlayer2.append(nome, ataqueDefesa, hitPoint, imune, forte, fraco, velocidade)
}

// FUNÇÃO CRIAR CARDS PLAYER 2
function player2() {
    const cardPlayer2 = document.querySelector(".cardPlayer2")
    cardPlayer2.innerHTML = ""
    if (cartaPlayer2.length == 0) {
        modoDeEsperaPlayer1()
    } else {
        let criatura = cartaPlayer2[0]
        cardPlayer2.classList.add("cards")
        cardPlayer2.id = criatura.id
        let nome = document.createElement("h3")
        nome.innerText = criatura.nome
        let ataqueDefesa = document.createElement("p")
        ataqueDefesa.innerText = `Ataque: ${criatura.ataqueFisico} / Defesa ${criatura.defesa}`
        let hitPoint = document.createElement("p")
        hitPoint.innerHTML = `HP: ${criatura.hp}`
        let img = document.createElement("img")
        img.src = criatura.img
        cardPlayer2.append(nome, ataqueDefesa, hitPoint, img)
    }
}

// FUNÇÃO COMPRAR CARTA PLAYER 2
function comprarCartasPlayer2() {
    if (cartasMaoPlayer2.length == 0 && quantidadeCartasComprar2 == 0) {
        main.innerHTML = ""
        main.innerText = "Você venceu!"
        main.classList.add("main")
        footer.innerHTML = ""
        footer.innerHTML = `<a href="./index.html" class="btnContinuar">Continuar</a>`
        footer.classList.add("footer")
        body.classList.add("body")
    }
    for (let i = 0; i < 5; i++) {
        if (cartasMaoPlayer2.length < 5 && quantidadeCartasComprar2 > 0) {
            let randomN = randomNumber(arrayCriaturasPlayer2.length-1)
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


player1()
modoDeEsperaPlayer2()
comprarCartasPlayer2()