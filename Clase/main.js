// const numeros = [1, 2, 3, 4, 5, 6, 77, 23, 8];
// for (let index = 0; index < numeros.length; index++) {
//     alert(numeros[index]);
// }


// const alumnos = ["Lucas", "Bruno", "Luis", "Ana", "Julia"]


// alumnos.unshift("Eloy")


// let alumno = alumnos.pop()



// let alumno2 = alumnos.shift()


// const alumnosQueNoEstan = [alumno, alumno2]




// alumnosQueNoEstan.splice(1,0,"Nacho")




// alumnos.splice(1, 2, "Julian", "Nacho")




// const nombre = ["N", "a", "c", "h", "o"]
// const nombreString = nombre.join("")




// const todoLosAlumnos = alumnos.concat(alumnosQueNoEstan)

// console.log(todoLosAlumnos)

// const nuevaListaDeAlumnos = todoLosAlumnos.slice(2, 4)

// console.log(nuevaListaDeAlumnos)
// console.log(todoLosAlumnos)

// todoLosAlumnos.pop()

// todoLosAlumnos.reverse()

// console.log(todoLosAlumnos)

// //Declaraciòn de array vacío y variable para determinar cantidad
// const listaNombres = [];
// let cantidad = 5;
// //Empleo de do...while para cargar nombres en el array por prompt()
// do{
//    let entrada = prompt("Ingresar nombre");
//    listaNombres.push(entrada.toUpperCase());
//    console.log(listaNombres.length);
// }while(listaNombres.length != cantidad)
// //Concatenamos un nuevo array de dos elementos
// const nuevaLista = listaNombres.concat(["ANA","EMA"]);
// //Salida con salto de línea usando join
// alert(nuevaLista.join("\n"));


// const productos = [{ id: 1, producto: "Arroz" },
//                   { id: 2,  producto: "Fideo" },
//                   { id: 3,  producto: "Pan" }];

// for (const producto of productos) {
//     console.log(producto.id);
//     console.log(producto.producto);
// }


// class Producto {
//     constructor(nombre, precio) {
//         this.nombre  = nombre.toUpperCase();
//         this.precio  = parseFloat(precio);
//         this.vendido = false;
//     }

//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
// }

// //Declaramos un array de productos para almacenar objetos
// const productos = [];
// productos.push(new Producto("arroz", "125"));
// productos.push(new Producto("fideo", "70"));
// productos.push(new Producto("pan", "50"));



// //Iteramos el array con for...of para modificarlos a todos
// for (const producto of productos){
//     producto.sumaIva();
// }

// console.log(productos)


// function mayorQue(n) {
//     return (m) => m > n
// }

// let mayorQueCinco = (m) => m > 5


// mayorQueCinco(45)

// 45 > 5


// const saludar = (saludo)=>{
    
// }


// function porCadaUno(arr, fn) {
//     for (const el of arr) {
//         fn(el)
//     }
// }


// const frutas = ["Pera", "Banana", "Tomate"]


// const saludar = (saludo) => {
//     console.log("Hola ", saludo)
// }

// porCadaUno(frutas, acumular)

// console.log(total)


// let total =0


// const acumular = function (num) {
//     total += num
// }




// const numeros = [1, 2, 3, 4, 5, 6]



// numeros.forEach((n)=>{
//     console.log(n)
// })


// console.log(total)

// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
// ]

// const resultado = cursos.find((el) => el.nombre === "ReactJS")
// const resultado2 = cursos.find((el) => el.nombre === "DW")

// console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
// console.log(resultado2) // undefined

 const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
 ]

// const resultado = cursos.filter((el) => {
//     return el.nombre.includes('a')
// })
// const resultado2 = cursos.filter((el) => el.precio < 20000)

// console.log(resultado)
// /* [
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'Angular', precio: 22000}
// ] */

// console.log(resultado2)

// console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// // true
// console.log( cursos.some((el) => el.nombre == "VueJS")) 
// // false

// const actualizado = cursos.map((el) => {
    
//     return {
//         nombre: el.nombre,
//         precio: el.precio
//     }

// })

// console.log(actualizado)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]



// const total = cursos.reduce((acumulador, elemento) => {
//     return acumulador + elemento.precio
// }, 0)

// console.log(total) 



// const numeros = [1 ,2, 3, 33, 22, 123, 87]

// const palabras = ["Lucas", "Bruno", "Luis", "Ana", "Julia"]
// console.log(numeros)

// numeros.sort()

// console.log(numeros)


// const pokemon = [
//     { name: 'Pikachu', price: 21 },
//     { name: 'Charmander', price: 37 },
//     { name: 'Pidgey', price: 45 },
//     { name: 'Squirtle', price: 60 },
//     { name: 'Squirtle', price: 64 }
// ]

// const nombresPokemon = pokemon.map((el)=>el.name)


// pokemon.sort((a, b) => {
//     if (a.price > b.price) {
//         return -1;
//     }
//     if (a.price < b.price) {
//         return 1;
//     }
//     // a es igual a b
//     return 0;
// })


// console.log(pokemon)

const productos = [
    {  id: 1,  producto: "Arroz", precio: 125},
    {  id: 2,  producto: "Fideo", precio: 70},
    {  id: 3,  producto: "Pan"  , precio: 50},
    {  id: 4,  producto: "Flan" , precio: 100}
]

const buscado = productos.find(producto => producto.id === 3)
//console.log(buscado) 

const existe = productos.some(producto => producto.producto === "Pan")
//console.log(existe ) 

const baratos = productos.filter(producto => producto.precio < 100)
//console.log(baratos)


const listaNombres = productos.map(producto => producto.producto)
//console.log(listaNombres);
