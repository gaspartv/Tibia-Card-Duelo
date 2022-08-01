const lootTexto = document.getElementById("loot")
const lootResposta = document.getElementById("respostaLoot")
const lootBTN = document.getElementById("btnLoot")

lootBTN.addEventListener("click", () => {
    let texto = lootTexto.value
    let removerNumeros = texto.replace(/Durante Invasões:/g, '').replace(/Durante Eventos:/g, '').replace(/Incomum:/g, '').replace(/Semi-Raro:/g, '').replace(/Muito Raro:/g, '').replace(/Raro:/g, '').replace(/[0-9]/g, '').replace(/[-]/g, '').replace(/[.]/g, ',')
    let resultado = removerNumeros.split(",")
    let arrayResultado = []
    resultado.forEach(elem => {
        arrayResultado.push(elem.trim())
    })
    lootResposta.value = `"${arrayResultado.join('", "')}`
})
