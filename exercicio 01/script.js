function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos!`;

    if (hora >= 5 && hora <= 12) {
        //Bom dia 
        img.src = "manha.jpg"
        document.body.style.background = "#e2cd9f"

    } else if (hora >= 13 && hora < 18) {
        //Boa tarde
        img.src = "tarde.jpg"
        document.body.style.background = "#c87d0f"

    } else {
        //Boa noite
        img.src = "noite.jpg"
        document.body.style.background = "#232a74"

    }
}