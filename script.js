function validaForm() {
    var algumChecado = false;
    var inputs = document.compraStickers.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (
        inputs[i].type === "checkbox" &&
        inputs[i].checked === true &&
        numero > 0
      ) {
        algumChecado = true;
        return;
      }
      if (numero <= 0) {
        alert("Escolha a quantidade de stickers desejada!");
        return false;
      } else if (!algumChecado) {
        alert("Selecione um ou mais stickers!");
        return false;
      } else if (numero <= 0 && !algumChecado) {
        alert("Selecione um ou mais stickers e escolha a quantidade desejada!");
        return false;
      }
    }
    return true;
  }
  
  var botaoEnviar = document.getElementById("enviar");
  botaoEnviar.onclick = function() {
    return validaForm();
  };