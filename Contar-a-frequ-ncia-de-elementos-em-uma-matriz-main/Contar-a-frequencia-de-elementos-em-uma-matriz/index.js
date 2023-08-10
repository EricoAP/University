function contarFrequencia() {
    let vetor = document.getElementById("vetor").value;
    vetor = vetor.split(",").map(Number);
    
    let frequencia = {};
    
    for (let i = 0; i < vetor.length; i++) {
      let elemento = vetor[i];
      
      if (frequencia[elemento]) {
        frequencia[elemento]++;
      } else {
        frequencia[elemento] = 1;
      }
    }
    
    let frequenciaTexto = "";
    
    for (let elemento in frequencia) {
      frequenciaTexto += elemento + ": " + frequencia[elemento] + "<br>";
    }
    
    document.getElementById("frequencia").innerHTML = frequenciaTexto;
  }
