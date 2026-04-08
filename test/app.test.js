import {saludar, despedir,estadoSistema}from "../src/app.js

function ejecutarPruebas(){
let pasadas = 0;
let fallidas = 0;

const r1 = saludar("sebas")
if (r1.includes("sebas")){
console.log ("test 1 pasado:funcion saludar en sebas es correcta")pasadas++;
}else{
console.log ("test 1 fallido: ", r1 );	fallidas++;
}


const actualEstado = estadoSistema();
if (actualEstado.estado === "activo" ){
console.log("Test 2: Pasado: estadoSistema() funciona en sebas");
pasadas++;
}else{ 
console.log ("Test 2 fallido: ",estado, "en sebas");
fallidas++;
}
console.log("\nResultados: " + pasadas + "pasadas, ", + fallidas + "fallias");
if (fallidas>0) process.exit(1);
}
ejecutarPruebas();
