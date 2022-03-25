var paises = document.getElementById("paises")

//https://sistemasgeo.com/2022/fetch/paises.json
fetch("https://sistemasgeo.com/2022/fetch/paises.json").then(response => {
    response.json().then(datos => {
        let contador = 1;
        datos.forEach(registro => {
            let renglon = document.createElement("div")
            renglon.className = "row border bg-light m-2"
            paises.appendChild(renglon);

            let columna = document.createElement("div")
            columna.className = "col-12"
            paises.appendChild(columna);

            let nombre = document.createElement("p")
            nombre.textContent = contador + "(" + registro.CountryName + ")"
            columna.appendChild(nombre);

            contador++;
        });
    });
});