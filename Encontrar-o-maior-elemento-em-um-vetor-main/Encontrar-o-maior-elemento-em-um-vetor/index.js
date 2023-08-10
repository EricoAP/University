let matriz = [];
    
    function encontrarMaiorElemento(matriz) {
      let maior = matriz[0][0];
      
      for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
          if (matriz[i][j] > maior) {
            maior = matriz[i][j];
          }
        }
      }
      
      return maior;
    }
    
    function gerarMatriz() {
      let tamanho = parseInt(document.getElementById("tamanho").value);
      matriz = [];
      
      for (let i = 0; i < tamanho; i++) {
        let linha = [];
        
        for (let j = 0; j < tamanho; j++) {
          linha.push(Math.floor(Math.random() * 100) + 1);
        }
        
        matriz.push(linha);
      }
      
      let matrizTexto = matriz.map(function(linha) {
        return linha.join(", ");
      }).join("<br>");
      
      document.getElementById("matriz").innerHTML = matrizTexto;
    }
    
    function encontrarMaiorElementoNaMatriz() {
      let maiorElemento = encontrarMaiorElemento(matriz);
      
      document.getElementById("resultado").innerText = "O maior elemento é: " + maiorElemento;
    }
