
// esta es la funcion que carga el header y el footer para no tener que repetir el mismo codigo en cada pagina


async function loadHeaderFooter(id, archivo) { // async para decirle al navegador que la funcion tomará tiempo
    try {                                       // uso try para capturar posibles errores
        const buscarArchivo = await fetch(archivo);
        // se busca el archivo  proporcionado con (fetch(archivo)) mientras detiene el codigo y   despues lo guardo en la constante
        if (!buscarArchivo.ok) { // si la variable no es verdadera
            throw new error(`no se pudo cargar el ${archivo}, error ${buscarArchivo.statusText}`) // mostramos el error en la consola
        } const miHtml = await buscarArchivo.text(); // de lo contrario convertimo el archivo en texto y lo guardamos en la constante
        document.getElementById(id).innerHTML = miHtml; // en el id seleccionado se pone el archivo html
    } catch (error) {
        console.error(`error al cargar el archivo ${error}`);
    }
}

 loadHeaderFooter("header", "header.html");
 loadHeaderFooter("footer", "footer.html");


