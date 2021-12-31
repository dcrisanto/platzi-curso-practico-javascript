const squareSide = document.getElementById('side');

const buttonPerimeter = document.getElementById('perimeter');

const result = document.getElementById('result');

buttonPerimeter.addEventListener('click', resultPerimeter = () =>{
    const calculatingPerimeter = squareSide.value*4;
    result.innerHTML = "El perímetro del cuadrado es: " + calculatingPerimeter;
});



