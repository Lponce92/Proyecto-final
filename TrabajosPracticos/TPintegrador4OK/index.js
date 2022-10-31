let botonRes = document.getElementById("botonResumen");
let botonBor = document.getElementById("botonBorrar");
let inputCant = document.getElementById("FormInput4");
let inputCateg = document.getElementById("FormInput5");
let textPago = document.getElementById("totalpago");
let valorTicket= 200;
let descEst = 80;
let descTrai = 50;
let descJun = 15;
let totValor = 0;
let totDesc = 0;

botonRes.addEventListener("click", () => {
    let cantidad = parseInt(inputCant.value);
    let categoria = parseInt(inputCateg.value);

    switch (categoria) {
        case 1:
            totDesc = valorTicket * descEst / 100;
            totValor = (valorTicket - totDesc) * cantidad;
            break;
        case 2:
            totDesc = valorTicket * descTrai / 100;
            totValor = (valorTicket - totDesc) * cantidad;   
            break;
        case 3:
            totDesc = valorTicket * descJun / 100;
            totValor = (valorTicket - totDesc) * cantidad;
            break;
        default:
            alert("No ha seleccionado ninguna categoria");
    }

    textPago.innerHTML = "Total a Pagar: $" + totValor;
});

botonBor.addEventListener("click", () => {
    document.getElementById("FormInput1").value = null;
    document.getElementById("FormInput2").value = null;
    document.getElementById("FormInput3").value = null;
    document.getElementById("FormInput4").value = null;
    document.getElementById("FormInput5").value = null;
    textPago.innerHTML = "Total a Pagar: $";
})