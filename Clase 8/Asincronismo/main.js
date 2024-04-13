// function saludar(){
//     console.log("Hola")
// }

// const Contador = document.getElementById("contador")

// let contadorNum = 0
// console.log(contador)

// let contadorIntervalo = setInterval(() => {
//     Contador.innerHTML = contadorNum
    
//     contadorNum++

//     if(contadorNum == 100){
//         clearInterval(contadorIntervalo)
//     }
// }, 1000)


// console.log("Aguante JS")


// function calcularUnaSuma(a, b){
//     console.log(a + b)
// }


// calcularUnaSuma(4,6)

// saludar()


const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
        }, 2000)
    })
}


eventoFuturo(true)
.then(data => {
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Hola")
})

