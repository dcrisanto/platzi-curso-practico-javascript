const squareSide = document.getElementById('side');

const buttonPerimeter = document.getElementById('perimeter');

const buttonArea = document.getElementById('area');

const result = document.getElementById('result');

buttonPerimeter.addEventListener('click', resultPerimeter = () =>{
    const calculatingPerimeter = squareSide.value*4;
    result.innerHTML = "El perímetro del cuadrado es: " + calculatingPerimeter;
});

buttonArea.addEventListener('click', resultArea = () => {
    const calculatingArea = squareSide.value*squareSide.value;
    result.innerHTML = "El área del cuadrado es: " + calculatingArea; 
})



