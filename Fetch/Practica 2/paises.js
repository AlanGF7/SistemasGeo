var paises = document.getElementById("paises")

fetch("https://sistemasgeo.com/2022/fetch/paises.json").then(function(response){
    console.log(response)
    response.json().then(function(datos){
        datos.forEach(registro => {
            let nombre = document.createElement("p");
            nombre.textContent = "País: " + registro.country + ", casos: " + registro.cases
            paises.appendChild(nombre);

        });
    });
});