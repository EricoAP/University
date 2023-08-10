function encontrarMaiorNumero(matriz) {
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
  
  function encontrarMenorNumero(matriz) {
    let menor = matriz[0][0];
    
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] < menor) {
          menor = matriz[i][j];
        }
      }
    }
    
    return menor;
  }
  
  function calcularMediaAritmetica(matriz) {
    let soma = 0;
    let totalElementos = 0;
    
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j];
        totalElementos++;
      }
    }
    
    return soma / totalElementos;
  }
  
  function gerarMatriz() {
    let tamanho = parseInt(document.getElementById("tamanho").value);
    let matriz = [];
    
    for (let i = 0; i < tamanho; i++) {
      let linha = [];
      
      for (let j = 0; j < tamanho; j++) {
        linha.push(Math.floor(Math.random() * 100) + 1);
      }
      
      matriz.push(linha);
    }
    
    let matrizTexto = "";
    for (let i = 0; i < matriz.length; i++) {
      matrizTexto += matriz[i].join(", ") + "<br>";
    }
    
    document.getElementById("matriz").innerHTML = matrizTexto;
    document.getElementById("resultado").innerText = "";
  }
  
  function encontrarMaiorMenorEMediaAritmetica() {
    let matriz = document.getElementById("matriz").innerHTML;
    
    if (matriz.trim() === "") {
      alert("Por favor, gere uma matriz antes de calcular os resultados.");
      return;
    }
    
    matriz = matriz.split("<br>");
    matriz.pop();
    for (let i = 0; i < matriz.length; i++) {
      matriz[i] = matriz[i].split(", ");
      for (let j = 0; j < matriz[i].length; j++) {
        matriz[i][j] = parseInt(matriz[i][j]);
      }
    }
    
    let maiorNumero = encontrarMaiorNumero(matriz);
    let menorNumero = encontrarMenorNumero(matriz);
    let mediaAritmetica = calcularMediaAritmetica(matriz);
    
    document.getElementById("resultado").innerText = "Maior Número: " + maiorNumero + ", Menor Número: " + menorNumero + ", Média Aritmética: " + mediaAritmetica.toFixed(2);
  }
