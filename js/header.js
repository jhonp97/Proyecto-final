//**como no sabia por que no me cargaba el script para el menu me puse a buscar en varias paginas y en 
// stackOverflow encontré  una situacion similar de un usuario, el problema era que no se terminaba de 
// cargar el header cuando el header.js queria hacer la accion, asi que habia que esperar a que la 
// funcion asincrona se terminara de cargar y luego poder ejecutar el codigo del menu, eso con la 
// funcion then() que ejecuta el bloque de codigo despues de que la funcion asincrona se cargue  */

loadHeaderFooter("header", "header.html").then(()=>{


// Declaro mis variables
const btn = document.querySelector(".Header-navBtn");
const abrir = document.getElementById("open");
const cerrar = document.getElementById("close");
const menu = document.querySelector(".Header-navMenu");
const btnDark = document.getElementById("darkModeBtn");
const icono = btnDark.querySelector("i");


// Asigno el evento al boton
btn.addEventListener("click", abrirCerrarMenu);


// declaro mi funcion 
function abrirCerrarMenu() {
    let isActive = cerrar.classList.toggle("isActive");
    if (isActive) {
        abrir.style.display = "none";
        menu.style.display = "flex";
    } else {
        abrir.style.display = "flex";
        menu.style.display = "none";
    }
}


// evento para el modo oscuro

if(localStorage.getItem("darkMode") === "true"){
    document.body.classList.add("DarkMode");
    icono.classList.remove("fa-moon");
    icono.classList.add("fa-sun");
}
btnDark.addEventListener("click", () => {
    const dark = document.body.classList.toggle("DarkMode");

if (dark) {
    icono.classList.remove("fa-moon");
    icono.classList.add("fa-sun");
    localStorage.setItem("darkMode", "true");
} else {
    icono.classList.remove("fa-sun");
    icono.classList.add("fa-moon");
    localStorage.setItem("darkMode", "false");
}
});
})


    
;

/*
     éste fue el codigo que hice antes de pensar como lo podía mejorar de acuerdo
     a lo que pude aprender en clases


 btn.addEventListener("click",()=>{
     abrir.style.display="none";
     menu.style.display= "Flex";
     cerrar.classList.add("isActive");
     abrir.classList.remove("isActive")
 })
 btn.addEventListener("click",()=>{
     abrir.classList.add("isActive");
     cerrar.classList.remove("isActive")
     abrir.style.display="Flex";
     menu.style.display= "none"
 })
*/
