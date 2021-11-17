//CÓDIGO CUADRADO
console.group("Cuadrados");

// const ladoCuadrado = 5; 
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//CÓDIGO TRIÁNGULO
console.group("Triángulos");

// const ladoTriangulo1 =  6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triángulo miden: " 
//     + "lado 1: " + ladoTriangulo1 + "cm, " 
//     + "lado 2: " + ladoTriangulo2 + "cm, " 
//     + "Base triángulo: " + baseTriangulo + "cm"
//     );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//CÓDIGO CÍRCULO
console.group("Círculos");

// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

function diametroCirculo(radio){
    return radio * 2;
}

// console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

const PI = Math.PI;
console.log("PI es igual a: " + PI);


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
} 

console.groupEnd();


//Aquí interactuamos con el HTML

//Funciones CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perímetro de tu cuadrado es: " + perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área de tu cuadrado es: " + area);
}

//Funciones TRIÁNGULO
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputLado1");
    const valueLado1 = inputLado1.value;
    const inputLado2 = document.getElementById("InputLado2");
    const valueLado2 = inputLado2.value;
    const inputBase = document.getElementById("InputBase");
    const valueBase = inputBase.value;

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert("El perímetro de tu triángulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    const inputLado1 = document.getElementById("InputLado1");
    const valueLado1 = inputLado1.value;
    const inputLado2 = document.getElementById("InputLado2");
    const valueLado2 = inputLado2.value;
    const inputBase = document.getElementById("InputBase");
    const valueBase = inputBase.value;
    const inputAltura = document.getElementById("InputAltura");
    const valueAltura = inputAltura.value;
}
