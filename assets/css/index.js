const big =document.querySelector('.big')
const dot =document.querySelectorAll('.dot')
//cuando click en cada punto
    //saber la posicion de ese dot
    //aplicar transform translatex all grande
    //quitar la clase active a todos los dot
    //añadir la clase active al punto que hacemos click
dot.forEach( (eachdot , i ) => {
    dot[i].addEventListener('click',()=>{
        let posicion = i
        let operacion =posicion *-25
        big.style.transform = `translatex(${ operacion}%)`

        dot.forEach((eachdot ,i )=>{
            dot[i].classList.remove('active')
        })
        dot[i].classList.add('active')
    })
});