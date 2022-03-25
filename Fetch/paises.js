var paises = document.getElementById("paises")

fetch("datos.json").then(function(response){
    console.log("Response")
    response.json().then(function(datos){
        datos.forEach(registro => {
            console.log("Registro")
        })
    })
})