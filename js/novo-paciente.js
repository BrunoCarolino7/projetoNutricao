var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(evento){
    evento.preventDefault();
    
    var formulario = document.querySelector("#form-adiciona");

    //pegando valores / formulario / td´s
    var valorNome = formulario.nome.value
    var peso = formulario.peso.value
    var altura = formulario.altura.value
    var valorGordura = formulario.gordura.value


    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    nomeTd.textContent = valorNome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = valorGordura;   
    imcTd.textContent = calculaImc(peso,altura);    


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

   

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);


});

