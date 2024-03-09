// Empezamos con un array vacío para planificar nuestro viaje
let planDeViaje = [];

// length - muestra la longitud del array
console.log(planDeViaje.length)

// push - añade un elemento al final del array
planDeViaje.push("Elegir destino")
//console.log(planDeViaje)
// Ahora el array tiene 1 elemento: ['Elegir destino']


// unshift - añade un elemento al inicio del array
planDeViaje.unshift("Abrir mapa")
//console.log(planDeViaje)
// Ahora el array tiene 2 elementos: ['Abrir mapa', 'Elegir destino']


// shift - elimina el primer elemento del array y lo retorna
const historialDeTareas = []
let tareaTerminada = planDeViaje.shift()
historialDeTareas.push(tareaTerminada)
//console.log(planDeViaje)
// primerPaso tiene 'Abrir mapa' y el array queda así: ['Elegir destino']


// pop - elimina el último elemento del array y lo retorna
let tareaTerminada2 = planDeViaje.pop()
historialDeTareas.push(tareaTerminada)
//console.log(planDeViaje)
// ultimoPaso tiene 'Elegir destino' y el array queda vacío de nuevo: []


// splice - cambia el contenido de un array eliminando, reemplazando o añadiendo elementos
planDeViaje.push('Comprar boletos', 'Reservar hotel', 'Hacer maleta');
planDeViaje.splice(1, 0, "Alquilar un Coche")
//console.log(planDeViaje)
// Usamos splice para eliminar 'Reservar hotel' y añadir 'Alquilar coche' en su lugar
// El array queda: ['Comprar boletos', 'Alquilar coche', 'Hacer maleta']


// join - une todos los elementos de un array en un string
//console.log(planDeViaje.join(", "))
// pasosParaViajar es ahora 'Comprar boletos, Alquilar coche, Hacer maleta'


// concat (withgato) - une dos o más arrays
let masPasos = ['Comprar guía de viaje', 'Aprender frases básicas del idioma local'];
const planCompleto = planDeViaje.concat(masPasos)
//console.log(planCompleto)
// planCompleto es ahora ['Comprar boletos', 'Alquilar coche', 'Hacer maleta', 'Comprar guía de viaje', 'Aprender frases básicas del idioma local']

// slice - devuelve una copia de una parte del array
let preparativos = planCompleto.slice(0, 4);
//console.log(preparativos)
// preparativos es ['Comprar boletos', 'Alquilar coche', 'Hacer maleta']

// indexOf - retorna el primer índice en el que se puede encontrar un elemento dado en el array
let indiceMaleta = planCompleto.indexOf("Hacer maleta");
//console.log(indiceMaleta)
// indiceMaleta es 2

// includes - determina si un array incluye un cierto elemento
let incluyeGuia = planCompleto.includes("Comprar guía de viaje");
//console.log(incluyeGuia)
// incluyeGuia es true

// reverse - invierte el orden de los elementos de un array
let planInvertido = planCompleto.reverse();
// planInvertido es ahora ['Aprender frases básicas del idioma local', 'Comprar guía de viaje', 'Hacer maleta', 'Alquilar coche', 'Comprar boletos']


// Array con objetos literales
let viajeros = [
    { nombre: 'Sofía', destino: 'París' },
    { nombre: 'Carlos', destino: 'Tokio' }
];
  
// Función constructora para un objeto Viajero
function Viajero(nombre, destino) {
    this.nombre = nombre;
    this.destino = destino;
}
  
// Creando objetos con la función constructora y añadiéndolos a un array
let viajerosConConstructor = [
    new Viajero('Lucía', 'Roma'),
    new Viajero('Miguel', 'Londres')
];
  
// Clase para un objeto Viajero
class ViajeroClase {
    constructor(nombre, destino) {
      this.nombre = nombre;
      this.destino = destino;
    }
}
  
// Creando objetos con la clase y añadiéndolos a un array
let viajerosConClase = [
    new ViajeroClase('Ana', 'Nueva York'),
    new ViajeroClase('Jorge', 'Sidney')
];
  
console.log(viajeros); // Muestra el array de objetos literales
console.log(viajerosConConstructor); // Muestra el array de objetos creados con la función constructora
console.log(viajerosConClase); // Muestra el array de objetos creados con la clase

