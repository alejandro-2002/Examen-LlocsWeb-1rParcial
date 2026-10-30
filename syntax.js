const personajes = []

async function mostrarPersonajes () {

    const response = await fetch("http://localhost:3000/api/onepiece/characters")
    
    const datos = response.json 

    console.log(datos)

}



