var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(remove){
    remove.preventDefault();    

    var elementoTr = document.createElement("tr");    
    
    var form = document.querySelector("#form-adiciona"); 

    var inputNome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var inputGordura = form.gordura.value;

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = inputNome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = inputGordura;
    imcTd.textContent = calculaImc(peso,altura)
    
    elementoTr.appendChild(nomeTd);
    elementoTr.appendChild(pesoTd);
    elementoTr.appendChild(alturaTd);
    elementoTr.appendChild(gorduraTd);
    elementoTr.appendChild(imcTd);
        

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(elementoTr);

})
