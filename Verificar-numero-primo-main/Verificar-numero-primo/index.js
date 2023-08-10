function verificarPrimo(numero) {
    if (numero < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function verificarNumeroPrimo() {
    let numero = parseInt(document.getElementById("numero").value);

    if (verificarPrimo(numero)) {
        document.getElementById("resultado").innerText = numero + " é primo";
    } else {
        document.getElementById("resultado").innerText = numero + " não é primo";
    }
} 
