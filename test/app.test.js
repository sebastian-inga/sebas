import { describe, test, expect } from "vitest";
import { saludar, estadoSistema, sumar, healtCheack } from "../src/app.js";

describe("Pruebas de FlowSebastian", () => {
  
  test("Funcion saludar()", () => {
    const resultado = saludar("Martinez");
    expect(resultado).toContain("Martinez");
  });

  test("Funcion estadoSistema()", () => {
    const estado = estadoSistema();
    expect(estado.estado).toBe("activo");
  });

  test("Funcion sumar()", () => {
    const resultado = sumar(5, 10);
    expect(resultado).toContain("15");
  });

  test("Funcion healtCheack()", () => {
    const health = healtCheack();
    expect(health.status).toBe("ok");
  });

});