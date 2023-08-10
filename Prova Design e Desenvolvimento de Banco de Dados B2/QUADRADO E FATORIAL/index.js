//FATORIAL

const form = document.querySelector("form")
const resultados = document.querySelector("#resultado")
const input = document.querySelector("input")

function Create(cont, fatorial){
    let P = document.createElement("p")
    P.innerText = `!${cont} = ${fatorial}`
    resultados.append(P)
}

function Calc(){
    let num = input.value
    if(num > 0, num <= 10){
        num = parseInt(num)
        let fatorial = 1
        let cont = 0
        for(let i = 1; i <= num +1; i++){
            Create(cont, fatorial)
            fatorial = fatorial * i
            cont++
        }
    }
    else{
        alert("Oops! Número inválido!")
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    resultados.innerHTML = ""
    Calc()
    input.value = ""
})
    


//QUADRADO

function isQuadradoPerfeito(numero) {
    var raizQuadrada = Math.sqrt(numero);
    return raizQuadrada === Math.floor(raizQuadrada);
  }
  
  function verificarQuadradoPerfeito() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById("resultadoq");
  
    if (isQuadradoPerfeito(numero)) {
      resultado.textContent = numero + " é um quadrado perfeito.";
    } else {
      resultado.textContent = numero + " não é um quadrado perfeito.";
    }
  }
  