// este es mi codigo para la tienda, que es el carrito de compras
// primero declaro las variables que voy a usar
// luego recorro el array de los botones y le agrego un evento de click a cada uno
// cuando se hace click en un boton, se busca la clase contenedora  mas cercana y lo guardo en una variable card y se le agrega el producto al carrito
// luego muestro el carrito actualizado y le agrego un evento de click al icono del carrito para mostrarlo u ocultarlo
// hago la funcion mostrarCarrito para mostrar el carrito actualizado y le agrego un evento de click al boton de eliminar para eliminar el producto del quiera
// al hacer click en el boton de finalizar compra, guardo el carrito en el localStorage y redirijo a la pagina de pago
// este fue el archivo js que mas tiempo me llevó, entre querer saber cmo hacer alguna cosa, como el localStorage, que me tocó ver videos, leer en paginas diferentes y preguntar a la ia si lo que habia entendido era asi o no, luego  tener que organiza el codigo para que sea entendible porque al principio cuando lo dejaba y volvia a retomar no entendia nada, mas o menos una semana entera me tomó hacer esta parte dedicandole de 3 a 6 horas a veces


// ----------------------- VARIABLES ----------------------------- //
const iconoCarrito = document.getElementById("iconoCarrito");
const contadorCarrito = document.getElementById("contadorCarrito");
const btnCard = document.querySelectorAll(".ProductCard-btn");
const carritoCompra = document.getElementById("carritoCompra");
const listaCarrito = document.getElementById("listaCarrito");
const btnFinzalizar = document.getElementById("btnFinalizarCompra");

let carrito = [];


// aqui agrego los productos al carrito con el boton de agregar al carrito
btnCard.forEach((btn) => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".ProductCard");
        const producto = {
            
            nombre: card.dataset.nombre,
            precio: parseFloat(card.dataset.precio),
            // console.log(producto);
        };
        carrito.push(producto); // agrego el producto al carrito
        mostrarCarrito(); // muestro el carrito actuaslizado
    });
});

iconoCarrito.addEventListener("click", ()=>{
    carritoCompra.hidden = !carritoCompra.hidden; 
    // muestro u oculto el carrito, me parece mas practico hacerlo así que tenerlo que con display none en css
})

function mostrarCarrito() {
    listaCarrito.innerHTML = ""; // vacio el carrito antes de mostrarlo
    carrito.forEach((producto, i) => {
        const li = document.createElement("li");
        li.innerHTML = `${producto.nombre} - ${producto.precio}€<button data-i="${i}">X</button>`;
        listaCarrito.appendChild(li);
        // console.log(carrito.length)
    });
    contadorCarrito.textContent = carrito.length;
     
}

// aqui elimino el producto del carrito al hacer click en el boton de eliminar
listaCarrito.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const i = e.target.dataset.i;
        carrito.splice(i, 1); // elimino el producto del carrito
        mostrarCarrito(); // muestro el carrito actualizado
    }
});

// aqui voy a guardarlo en el localStorage para que me mande a la pagina de pago
btnFinzalizar.addEventListener("click",()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito)); // guardo el carrito en el localStorage
    window.location.href = "pago.html"; // redirijo a la pagina de pago
})


