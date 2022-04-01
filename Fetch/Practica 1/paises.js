var mexico = document.getElementById("Mexico")
var panama = document.getElementById("Panama")
var colombia = document.getElementById("Colombia")

var textMexico = document.getElementById("textMexico")
var textPanama = document.getElementById("textPanama")
var textColombia = document.getElementById("textColombia")


var contador = 0;
fetch("datos.json").then(function(response){
    response.json().then(function(datos){
        datos.forEach(registro => {
            let pais = document.createElement("h2");
            pais.textContent = "País: " + registro.country + ", Casos: " + registro.cases
            if(contador == 0) 
            {
                textMexico.textContent = "País: " + registro.country + ", Casos: " + registro.cases
                mexico.appendChild(textMexico);
            }
            if(contador == 1) 
            {
                textPanama.textContent = "País: " + registro.country + ", Casos: " + registro.cases
                panama.appendChild(textPanama);
            }
            if(contador == 2) {
                textColombia.textContent = "País: " + registro.country + ", Casos: " + registro.cases
                colombia.appendChild(textColombia);
            }
            contador++;

        });
    });
});