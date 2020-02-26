let CRMMedico = document.getElementById("CRMMedico");
let nomeMedico = document.getElementById("nomeMedico");
let dataReceita = document.getElementById("dataReceita");
let quantidadeCaixas = document.getElementById("quantidadeCaixas");
let nomePaciente = document.getElementById("nomePaciente");
let CPFPaciente = document.getElementById("CPFPaciente");
let dataNascimento = document.getElementById("dataNascimento");
let tipoEnvio = document.getElementById("tipoEnvio");
let botao = document.getElementById("botao");

quantidadeCaixas.addEventListener("keyup", e => {
    if(isNaN(quantidadeCaixas.value)) {
        quantidadeCaixas.value = quantidadeCaixas.value.substring(0, (quantidadeCaixas.value.length - 1));
    } else {
        if(quantidadeCaixas.value.substring(0,1) == 0) {
            quantidadeCaixas.value = quantidadeCaixas.value.substring(0, (quantidadeCaixas.value.length - 1));
        } else {
            if(quantidadeCaixas.value <= 0) {
                quantidadeCaixas.value = quantidadeCaixas.value.substring(0, (quantidadeCaixas.value.length - 1));
            }
        }
    }
})

quantidadeCaixas.addEventListener("blur", e => {
    if(quantidadeCaixas.value <= 0) {
        quantidadeCaixas.setAttribute("class", "form-control is-invalid");
    } else {
        quantidadeCaixas.setAttribute("class", "form-control is-valid");
    }
})




botao.addEventListener("click", e => {
    if(CRMMedico.value.length > 0 && nomeMedico.value.length > 0 && dataReceita.value.length > 0 && quantidadeCaixas.value.length > 0 && quantidadeCaixas.className == "form-control is-valid" && nomePaciente.value.length > 0 && CPFPaciente.value.length > 0 && dataNascimento.value.length > 0 && tipoEnvio.value.length > 0) {
        $("#compra").modal();
    } else {
        alert("Preencha corretamente todos os campos para enviar esta solicitação.");
    }
})

// verificação do CPF
// verificação do CRM
// tipo de envio precisa estar preenchido para enviar
// opções de envio precisam de alguma ação