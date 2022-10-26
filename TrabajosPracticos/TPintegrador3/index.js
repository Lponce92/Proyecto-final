let botonRes = document.getElementById("botonResumen");
let botonBor = document.getElementById("botonBorrar");
let inputCant = document.getElementById("FormControlInput4");
let inputCateg = document.getElementById("FormControlInput5");
let textPago = document.getElementById("totalpago");
let valorTicket = 200; //valor del Ticket
let descEst = 80; //descuento Estudiante
let descTrai = 50; //descueto Trainee
let descJun = 15; //descuento Junior
let totValor = 0; //valor calculado del Ticket con el descuento
let totDesc = 0; //descuento calculado

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
            alert("no ha seleccionado ninguna categoria");
    }

    textPago.innerHTML = "Total a Pagar: $ " + totValor;
});

botonBor.addEventListener("click", () => {
    document.getElementById("FormControlInput1").value = null;
    document.getElementById("FormControlInput2").value = null;
    document.getElementById("FormControlInput3").value = null;
    document.getElementById("FormControlInput4").value = null;
    document.getElementById("FormControlInput5").value = null;
    textPago.innerHTML = "Total a Pagar: $ ";
});