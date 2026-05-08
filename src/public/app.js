import { calcularFactorial } from "./public/ejercicio5.js";
import { procesarNumero } from "./public/ejercicio6.js";
import { cargarSuma, mostrarSuma } from "./public/ejercicio7.js";
import { procesarLimite } from "./public/ejercicio8.js";

document.addEventListener("DOMContentLoaded", () => {
    const selectEjercicio = document.getElementById("selectEjercicio");
    const botonEjecutar = document.getElementById("botonEjecutar");
    const inputsContainer = document.getElementById("inputsContainer");
    const resultado = document.getElementById("resultado");

    function limpiarInputs() {
        inputsContainer.innerHTML = "";
        resultado.innerHTML = "Aquí aparecerán los resultados...";
    }

    selectEjercicio.addEventListener("change", () => {
        limpiarInputs();

        const opcion = selectEjercicio.value;

        if (opcion === "6") {
            const input = document.createElement("input");
            input.id = "numeroInput";
            input.type = "number";
            input.placeholder = "Ingresa un número";
            inputsContainer.appendChild(input);
        }

        if (opcion === "7") {
            cargarSuma();
        }

        if (opcion === "8") {
            const input = document.createElement("input");
            input.id = "limiteInput";
            input.type = "number";
            input.placeholder = "Ingresa un límite";
            inputsContainer.appendChild(input);
        }
    });

    botonEjecutar.addEventListener("click", () => {
        const opcion = selectEjercicio.value;

        if (!opcion) {
            resultado.innerHTML = "Por favor selecciona un ejercicio.";
            return;
        }

        if (opcion === "5") {
            calcularFactorial();
        }

        if (opcion === "6") {
            procesarNumero();
        }

        if (opcion === "7") {
            mostrarSuma();
        }

        if (opcion === "8") {
            procesarLimite();
        }
    });

    window.verificarSistema = function () {
        const statusDiv = document.getElementById("status");

        statusDiv.textContent =
            "Sistema funcionando correctamente - Deploy verificado";

        statusDiv.style.color = "green";
    };
});