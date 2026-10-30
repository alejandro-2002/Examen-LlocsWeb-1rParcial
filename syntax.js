const response = await fetch("http://localhost:3000/api/onepiece/characters")
const datosPersonaje = response.json 
console.log(datos)

const personajes = [{

    id: 1,
    nom: 'onepiece'
}];

window.onload = () => {

const contenedor = document.getElementById("personajesContainer")

    for (const personaje of personajes.id){
        const personajeDiv = createElement("div")
        const nombre = document.createElement("h3")
        nombre.textContent = personajes.nom;

        personajeDiv.appendchild(nombre)
        contenedor.appendChild(personajeDiv)
    }
}




