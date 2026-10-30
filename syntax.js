const personajes = []

const response = await fetch("http://localhost:3000/api/onepiece/characters")
const datosPersonaje = response.json 
console.log(datos)

const contenedor = document.getElementById("personajesContainer") 
for (const personaje of datosPersonaje.name){

    const personajeDiv = createElement("div")
    const nombre = document.createElement("h3")
    nombre.textContent = personaje;

    personajeDiv.appendchild(nombre)
    contenedor.appendChild(personajeDiv)

}






