const btn = document.querySelector('#myBtn')
// btn.addEventListener('click', () => {

//     Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Hola Eloy",
//         showConfirmButton: false,
//         timer: 1500
//     });
// })


btn.addEventListener('click', () => {
   
     Toastify({
         text: "Super tostadita",
         duration: 1000,
         gravity: 'bottom',
         position: 'right'
     }).showToast();
 })
