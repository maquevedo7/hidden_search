const button = document.querySelector('.btn')
const input = document.querySelector('.input')
const search = document.querySelector('.search')

button.addEventListener('click', ()=> {
    search.classList.toggle('active') /* Toogle activa la clase al click y la vuelve a desactivar */
})