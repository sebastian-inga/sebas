export function calcularFactorial() {
    let numero = 5;
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById("resultado").innerHTML =
        "El factorial de " + numero + " es: " + factorial;
}