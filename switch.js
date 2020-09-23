// teste de condições multiplas em js
// util em situacoes especificas, para nao ter que botar uma caralhada de if e else

var agora = new Date()
var dia = agora.getDay()

/*
 --- Lembrando que o calendário começa no domingo. ---
 Pro JS os dias da semana vem representados em números, ou seja: 

0 - Domingo;
1 - Segunda;
2 - Terça;
3 - quarta;
...
*/

switch (dia) {

    case 0:
        console.log("Domingo")
        break

    case 1:
        console.log("Segunda")
        break

    case 2:
        console.log("Terça")
        break

    case 3:
        console.log("Quarta")
        break

    case 4:
        console.log("Quinta")
        break

    case 5:
        console.log("Sexta")
        break

    case 6:
        console.log("Sabado")
        break
}