//++

// let contador = 1


// contador = contador + 1

// console.log(contador)

// contador += 1

// console.log(contador)

// contador++

// console.log(contador)

//Ternario

// if(false){
//     console.log("verdadero")
// }else{
//     console.log("Falso")
// }

// false ? console.log("verdadero") : console.log("falso")

//&&


// let YLogico = true && "La promesa llego"

// console.log(YLogico)


//O logico

// const carrito = JSON.parse(localStorage.getItem("carrito")) || []



// const boton = document.getElementById("boton")
// const main = document.getElementById("main")


// boton.addEventListener("click", ()=>{
//     carrito.push("Producto aleatorio")
//     localStorage.setItem("carrito", JSON.stringify(carrito))
//     actualizarCarrito()
// })

// function actualizarCarrito (){
//     main.innerHTML =""
//     carrito.forEach(e => {
//         main.innerHTML += e
//     })
// }

// document.addEventListener("DOMContentLoaded", ()=>{
//     actualizarCarrito()
// })



// const usuario = null



// console.log(usuario?.nombre)

// console.log("Hola")



// function saludo({saludo, nombre, edad}){
//     console.log(saludo)
//     console.log(nombre)
//     console.log(edad)
// }


// function saludo2(persona){
//     console.log(persona.saludo)
//     console.log(persona.nombre)
//     console.log(persona.edad)
// }

// const persona = {
//     nombre: "Eloy",
//     edad: 25,
//     saludo: "Hola, aguante el front",
//     curso: "JS"
// }

// let {edad, curso} = persona


// edad=59
// console.log(edad)

// console.log(curso)


// saludo(persona)

// console.log(persona)

// const Personas = ["nacho", "juan", "lucas", "rubi"]

// let [,,, cuarto] = Personas

// console.log(cuarto)


// function suma([a, b]){
//     console.log(a)
//     console.log(b)
//     console.log(a + b)
// }

// suma([2,5])


// function useState(valor){
//     let valorRetornar = valor
//     function actualizadora(valor2){
//         valor = valor2
//         console.log("Ahora el valor es " + valor2 )
//     }

//     return [valorRetornar, actualizadora]

// }

// const [valor, newValor] = useState(1)

// console.log(valor)

// newValor(2)

// console.log(valor)


// const Personas = ["nacho", "juan", "lucas", "rubi"]

// console.log(...Personas)


// function cuenta(a, b, c, d){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }

// cuenta(Personas[0], Personas[1], Personas[2], Personas[3])
// cuenta(...Personas)


// const numeros = [4, 77, 92, 10, 3, -32, 54, 11]

// console.log( Math.max(...numeros) ) 


// const copiaNumeros = [...numeros]

// copiaNumeros.pop()

// console.log(numeros)
// console.log(copiaNumeros)

// const usuario1 = {
//     nombre: "Juan",
//     edad: 24,
//     cursos: ["Javascript", "React"],
    
// }

// // lista todas las propiedades y valores de usuario1 dentro de otro objeto
// const usuario2 = {
//     ...usuario1,
//     cursos: [...usuario1.cursos]
// }

// usuario1.cursos.pop()

// console.log(usuario1) // { nombre: 'Juan', edad: 24, curso: 'Javascript' }

// console.log(usuario2) // { nombre: 'Juan', edad: 24, curso: 'Javascript' }

// const usuario3 = {
//     ...usuario1,
//     curso: "ReactJS",
//     email: "juan@doe.com"
// }

// console.log(usuario3)


function saludar(...saludos){
    const main = document.getElementById("main")
    saludos.forEach(saludo=>{
        main.innerHTML += saludo
    })
}

saludar("Hola", "Chau", "Adios", "¿Como esta?", "Como estas perro?")