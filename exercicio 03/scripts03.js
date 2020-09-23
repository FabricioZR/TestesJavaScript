function contar() {

    let inicio = document.getElementById("txtinicio")
    let fim = document.getElementById("txtfim")
    let passo = document.getElementById("txtpasso")
    let res = document.getElementById("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossivel contar!"
    } else {

        res.innerHTML = "Contando: <br> "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert("Passo invalido. Considerando (1).")
            p = 1
        }
        if (i < f) {
            //CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `| ${c} `
            }
        } else {
            //CONTAGEM DECRESCENTE
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `| ${c} `
            }
        }
        res.innerHTML += `| FIM! |`

    }
}