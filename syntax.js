const personajes = []

async function mostrarPersonajes () {

    const response = await fetch("http://localhost:3000/api/onepiece/characters")
    const datos = response.json 
    console.log(datos)

    const contenedor = document.getElementById("personajesContainer") 

    for (const personaje of datos){

        const personajeDiv = createElement("div")
        const nombre = document.createElement("h3")
        nombre.textContent = personaje.name;

        personajeDiv.appendchild(nombre)
        contenedor.appendChild(personajeDiv)

    }
}



