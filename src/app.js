export function saludar(nombre) {
  return "Hola " + nombre + ", bienvenido a aplicacion de Martinez";
}

export function estadoSistema() {
  return {
    estado: "activo",
    version: "1.0.0",
    mensaje: "Sistema Martinez funcionando correctamente",
  };
}

export function sumar(a, b) {
  const resultado = a + b;
  return "la suma de los numeros " + a + " + " + b + " es igual a " + resultado;
}

export function healtCheack () {
  return null;
}

// status:'ok',
//  timestape: new Date().toISOString(),
//  servicio: 'Streamflow API',
//  version: '1.0.0'