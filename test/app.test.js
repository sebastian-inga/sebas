import {saludar, estadoSistema, sumar, healtCheack} from "../src/app.js"

function ejecutarPruebas(){
    let pasadas = 0;
    let fallidas = 0;

    const r1 = saludar("Martinez")
    if (r1.includes("Martinez")){
        console.log ("Test 1 pasado: funcion saludar en Martinez es correcta")
        pasadas++;
    } else {
        console.log("Test 1 fallido: ", r1);
        fallidas++;
    }

    const actualEstado = estadoSistema();
    if (actualEstado.estado == "activo"){
        console.log ("Test 2: pasado: estadoSistema() funciona en Martinez")
        pasadas++
    } else {
        console.log("Test 2: fallido", estado, "en Martinez");
        fallidas++
    }

     const r3 = sumar(5, 10);
    if (r3.includes("15")) {
    console.log("Test 3 pasado: funcion sumar correcta en Martinez");
    pasadas++;
    } else {
    console.log("Test 3 fallido: ", r3);
    fallidas++;
    }

    const health = healtCheack();
    if (health.status==='ok'){
        console.log('Test healtCheck pasado');
        pasadas++;
    } else {
        console.log('Test healtCheck fallido', health);
        fallidas++;
    }
  
    console.log("\nResultados: " + pasadas + "pasadas, ", + fallidas + "fallidas");
    if (fallidas>0) process.exit(1);
}
    ejecutarPruebas()
