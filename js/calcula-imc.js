
var paciente = document.querySelectorAll(".paciente");

for(let x = 0; x < paciente.length; x++){    

    var pesoTd = paciente[x].querySelector(".info-peso");
    var peso = pesoTd.textContent; 

    var alturaTd = paciente[x].querySelector(".info-altura");
    var altura = alturaTd.textContent;

    var imcTd = paciente[x].querySelector(".info-imc");

    var alturaValida = true;
    var pesoValido = true;

    var imc = peso / (altura * altura);

    if(altura < 1 || altura >= 3){
        alturaTd.textContent = "Altura inválida";
        alturaValida = false;
        paciente[x].classList.add("pax-altura");
    }

    if(peso >= 800 || peso < 1){
        pesoTd.textContent = "Peso inválido";
        paciente[x].classList.add("pax-peso");
        pesoValido = false;    
    }

    if(pesoValido && alturaValida){
        
        imcTd.textContent = imc.toFixed(2);    
    }
}

function calculaImc(peso,altura){
    var imc = peso / (altura * altura)
    return imc.toFixed(2);
}

