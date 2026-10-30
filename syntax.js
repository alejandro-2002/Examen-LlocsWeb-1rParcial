
async function mostrarPersonaje () {
const response = await fetch("http://localhost:3000/api/onepiece")
const datosPersonaje = response.json 
console.log(datosPersonaje)

const contenedor = document.getElementById("personajesContainer")

    for(const personaje of datosPersonaje.id){
        const personajeDiv = createElement("div")
        const nombre = document.createElement("h3")
        nombre.textContent = personaje.name;

        personajeDiv.appendchild(nombre)
        contenedor.appendChild(personajeDiv)
    }

}

mostrarPersonaje()
