// mi index1.js esta dividido en dos partes, la primera parte es el carrusel y la segunda parte es el formulario.
//  El carrusel tiene un efecto de deslizar con el dedo y las flechas, ademas de 3 botones en la parte de abajo para navegar entreb las secciones
//  el formulario tiene una validacion de contraseñas y un boton para verlas.



//----------------------------------------------------- //
// ------------- Codigo para el carrusel  --------------//
//----------------------------------------------------- //

const items = document.querySelectorAll(".Carrusel-item"); // se seleccionan todos los elementos con la clase item
const circulos = document.querySelectorAll(".Circulo"); // se seleccionan todos los elementos con la clase Circulo
const btnAtras = document.querySelector(".Carrusel-btn-atras"); // se selecciona el elemento con la clase btn-atras
const btnSiguiente = document.querySelector(".Carrusel-btn-siguiente"); // se selecciona el elemento con la clase btn-siguiente
const carrusel = document.querySelector(".Section2-carrusel");

let actual = 0; // se pone la variable actual en 0

// funcion para cambiar la noticia
function cambiarNoticiaHandler(nuevo){
   if (nuevo < 0) nuevo = items.length - 1; // si el nuevo es menor que 0, se pone de ultimo
   if (nuevo >= items.length) nuevo = 0; // si el nuevo es mayor, se pone en 0

   items[actual].classList.remove("Carrusel-item--active");
   circulos[actual].classList.remove("Circulo--active"); 

   items[nuevo].classList.add("Carrusel-item--active");
   circulos[nuevo].classList.add("Circulo--active"); 
   // console.log(nuevo);
   // console.log(actual);
   actual= nuevo; // se pone el nuevo en actual
}

// funcion para usar el dedo y deslizar el carrusel
let inicioDeslizar = 0; 

carrusel.addEventListener("touchstart", (e)=>{ 
inicioDeslizar= e.touches[0].clientX; // esta seria laposicion inicial del dedo
// console.log(inicioDeslizar); 
});
carrusel.addEventListener("touchend", (e)=>{
   const finDselizar = e.changedTouches[0].clientX; // esta seria la posicion final del dedo
   // console.log(inicioDeslizar, finDselizar);
   const distancia = inicioDeslizar - finDselizar; // la distancia entre el inicio y el final del dedo
   if (distancia >50){
      cambiarNoticiaHandler(actual+1); // si la distancia es mayor, se cambia la noticia
   } else if (distancia < -50){
      cambiarNoticiaHandler(actual-1); // lo mismo pero para el otro lado 
   }
});

// evento de flechitas
btnAtras.addEventListener("click",()=>{
   cambiarNoticiaHandler(actual-1); //le ponemos de parametro a la funcion el actual - 1 para que vaya hacia atras
});

btnSiguiente.addEventListener("click",()=>{
   cambiarNoticiaHandler(actual+1); // lo mismo pero para adelante
});

// evento para los circulos
circulos.forEach((circulo, i)=>{
   circulo.addEventListener("click",()=>{
      cambiarNoticiaHandler(i); // le pasamos el indice del circulo al que le dimos click
   });
});


// // efecto de que cambie cada 4 segundos
// setInterval(()=>{
//    cambiarNoticia(actual+1); 
// }, 4000) lo dejo comentado porqyue al final agregué videos en lugar de imagenes y no quiero que se mueva solo




//----------------------------------------------------- //
// ------------- Codigo para el formulario -------------//
//----------------------------------------------------- //


const form = document.querySelector(".Form");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeatPassword");
const btnPassword = document.getElementById("btn-password");
const btnSubmit = document.getElementById("Btn-submit");
const nombre = document.getElementById("nombre");


form.addEventListener("submit", (e)=>{
   e.preventDefault(); //evitar que evento por defecto al enviar el formulario

   // codigo para la validacion de las contraseñas
  if(password.value !== repeatPassword.value){
     alert("Las contraseñas no son iguales");
     password.focus()
     
  }else{
     alert(`Felicidades ${nombre.value}!!! registro exitoso`);
     form.reset() }// reseteamos el formulario despues de que esté todo enviado
})

// codigo para mirar la contraseña
 btnPassword.addEventListener("click",()=>{
    if(password.type==="password" && repeatPassword.type ==="password"){
    password.type="text";
    repeatPassword.type="text";
    btnPassword.textContent="👁️";
 }else{
    password.type="password";
    repeatPassword.type="password";
    btnPassword.textContent="🙈";
 }})

 