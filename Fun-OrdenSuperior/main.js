// Array de objetos con destinos y distancias desde el punto de partida
let destinos = [
    { ciudad: 'Buenos Aires', distancia: 800 },
    { ciudad: 'Córdoba', distancia: 500 },
    { ciudad: 'Bariloche', distancia: 100 },
    { ciudad: 'Mendoza', distancia: 1000 },
    { ciudad: 'Charata', distancia: 7000 }
];
  
// forEach - ejecuta una función para cada elemento del array

destinos.forEach((el)=>{
    //console.log(el)
})

// find - encuentra el primer elemento que cumple con la condición dada, por ejemplo destino => destino.distancia < 600
// { ciudad: 'Córdoba', distancia: 500 }
  
const destinosMasCortos = destinos.find((destino) => {
    return destino.distancia < 600
})


console.log(destinosMasCortos)

// filter - crea un nuevo array con todos los elementos que cumplan la condición, por ejemplo 
// [{ ciudad: 'Bariloche', distancia: 1500 }]


const destinosLejanos = destinos.filter((destino)=>{
    return destino.distancia >= 1000
})

console.log(destinosLejanos)
  
// some - verifica si al menos un elemento cumple con la condición, por ejemplo destino => destino.distancia < 600

  
const estaEseDestino = destinos.some((el)=>{
    return el.distancia < 50
})

console.log(estaEseDestino)

// map - crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos
// ['Buenos Aires', 'Córdoba', 'Bariloche', 'Mendoza']
  
const lista = destinos.map((el)=>{
    return el.ciudad
})

console.log(lista)

// reduce - aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor

const valorTotal = destinos.reduce((acc , elementos)=>{
    return acc + elementos.distancia
}, 0)


console.log(valorTotal)

  
// sort - ordena los elementos de un array y devuelve el array

destinos.sort((a, b) => a.distancia - b.distancia);

console.log(destinos)
// [
//   { ciudad: 'Córdoba', distancia: 500 },
//   { ciudad: 'Buenos Aires', distancia: 800 },
//   { ciudad: 'Mendoza', distancia: 1000 },
//   { ciudad: 'Bariloche', distancia: 1500 }
// ]

