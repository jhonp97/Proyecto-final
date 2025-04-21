/* aqui vamos a manejar el pago y la confirmacion de la compra, he usado el localStorage para guardar el carrito y luego mostrarlo en la pagina de pago
1. declaro todas mis variables pero primero traigo los productos almacenados en localStorage(una de las partes mas dificiles de entender)
2. muestro el resumen del carrito en la pagina de pago, y y calculo el total a pagar
3. pongo si la persona va a pagar co tarjeta para que introduzca sus datos
4. se envia el formulario y se muestra la confirmacion de la compra
*/

//1. declaro variables y traigo el carrito del localStorage
const carrito = JSON.parse(localStorage.getItem("carrito")) || []; // traigo el carrito del localStorage o si esta vacio pues nada
const resumen = document.getElementById("pagoList");
const pagoTotal = document.getElementById("pagoTotal");
const metodoPago = document.getElementById("metodoPago")
const campoTarjeta = document.getElementById("campoTarjeta");
const form = document.getElementById("pagoForm");
const btnConfirmacion = document.getElementById("confirmacion");
const inputTarjeta = document.getElementById("numeroTarjeta");
const pagoSubtitle = document.getElementById("pagoSubtitle");


let total = 0;

//2. resumen y total
carrito.forEach(producto => {
    const list = document.createElement("li");
    list.innerHTML = `${producto.nombre} - ${producto.precio}€`;
    // console.log(list);
    resumen.appendChild(list); // muestro el resumen del carrito
    total += producto.precio; // calculo el total

});
pagoTotal.textContent = `Total a pagar: ${total}€`; // muestro el total




//3. mostrar o no si se va a pagar con tarjeta
metodoPago.addEventListener("click", () => {
    campoTarjeta.hidden = metodoPago.value !== "tarjeta"; // muestro el campo de tarjeta si el metodo de pago es tarjeta, codigo casi reutlizado de tienda.js

    inputTarjeta.required = metodoPago.value === "tarjeta"; // hago que el campo de tarjeta sea requerido si el metodo de pago es tarjeta (me costó saber porque no me dejaba enviar el formulario cuando le daba click en contra rembolso o paypal, y era porque el required del input de la tarjeta siempre estaba activo así no se mostrara, esta parte me tocó pedirle ayuda a la ia porque no entendía porque no funcionaba y tampoco entendia el mensaje de error que me salia en la consola)

})



//4. envio el formulario y muestro la confirmacion de la compra
form.addEventListener("submit", (e) => {
    e.preventDefault(); // evto que la pagina se recargue

    localStorage.removeItem("carrito"); // borro el carrito del localStorage
    form.reset(); // reseteo el formulario
    form.style.display = "none"; // oculto el formulario
    resumen.style.display = "none"; // oculto el resumen del carrito
    pagoSubtitle.style.display = "none"; // oculto el subtitulo de datos del comprador
    pagoTotal.style.display = "none"; // oculto el total a pagar
    btnConfirmacion.style.display = "flex"; // muestro el div de la confirmacion para acabar

});




