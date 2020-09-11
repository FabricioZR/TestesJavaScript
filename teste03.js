//testando um programa que pega a hora do seu sistema e faz ações dependendo de qual for
//linha 3 e 4 do codigo mostram como pegar a hora atual do sistema 

var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()

console.log(`O horário atual é: ${hora}:${minutos}:${segundos}! `)
if (hora >= 5 && hora <= 12) {
    console.log("Bom dia!")
} else if (hora >= 13 && hora < 18) {
    console.log("Boa tarde!")
} else if (hora > 18 && hora < 24) {
    console.log("Boa noite!")
} else {
    console.log("Boa madrugada!")
}