function removerDuplicados(matriz) {
  let matrizSemDuplicados = [];
  
  for (let i = 0; i < matriz.length; i++) {
    let elemento = matriz[i];
    
    if (!matrizSemDuplicados.includes(elemento)) {
      matrizSemDuplicados.push(elemento);
    }
  }
  
  return matrizSemDuplicados;
}

function removerDuplicadosMatriz() {
  let matrizTexto = document.getElementById("matriz").value;
  let matriz = matrizTexto.split(",").map(Number);
  
  let resultado = removerDuplicados(matriz);
  
  document.getElementById("resultado").innerHTML = resultado.join(", ");
}
