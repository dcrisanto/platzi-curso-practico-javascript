// Cuadrado

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

// Triángulo

const triangleSide1 = document.getElementById('triangleSide1');
const triangleSide2 = document.getElementById('triangleSide2');
const triangleBase = document.getElementById('triangleBase');
const triangleHeight = document.getElementById('triangleHeight');

const buttontrianglePerimeter = document.getElementById('trianglePerimeter');

const buttontriangleArea = document.getElementById('triangleArea');

const triangleResult = document.getElementById('triangleResult');

buttontrianglePerimeter.addEventListener('click', trianglePerimeter = () => {
    const calculatingPerimeter = parseInt(triangleSide1.value) + parseInt(triangleSide2.value) + parseInt(triangleBase.value);
    triangleResult.innerHTML = "El perímetro del triángulo es: " + calculatingPerimeter;
})

buttontriangleArea.addEventListener('click', triangleArea = () => {
    const calculatingArea = parseInt(triangleBase.value)*parseInt(triangleHeight.value)/2;
    triangleResult.innerHTML = "El área del triángulo es: " + calculatingArea;
})

// Círculo

const radio = document.getElementById('radio');

const PI = Math.PI;

const buttonCircleDiameter = document.getElementById('circleDiameter');

const buttonCircleCircunference = document.getElementById('circleCircunference');

const buttonCircleArea = document.getElementById('circleArea');

const circleResult = document.getElementById('circleResult');

buttonCircleDiameter.addEventListener('click', circleDiameter = () => {
    const calculatingDiamter = parseInt(radio.value)*2;
    circleResult.innerHTML = "El diámetro del círculo es: " + calculatingDiamter;
})

buttonCircleCircunference.addEventListener('click', circleCircunference = () => {
    const calculatingCircunference = parseInt(radio.value)*2*PI;
    circleResult.innerHTML = "La circunferencia del círculo es: " + calculatingCircunference;
})

buttonCircleArea.addEventListener('click', circleArea = () => {
    const calculatingArea = parseInt(radio.value*radio.value)*PI;
    circleResult.innerHTML = "El área del círculo es: " + calculatingArea;
})

