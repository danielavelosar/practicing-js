//square code
console.group('square');


function squarePerimeter() {
    const input= document.getElementById("InputSquare");
    var Side = input.value;
    let perimeter = Side*4;
    alert('Square´s perimeter is ' + perimeter + 'cm');
} 

function squareArea (){
    const input= document.getElementById("InputSquare");
    var Side = input.value;
    let area = Side**2;
    alert('Square´s Area is ' + area + 'cm2');
}


console.groupEnd();

//triangle
console.group('triangle')


function trianglePerimeter() {
    const input = document.getElementById("InputTriangle");
    const input1 = document.getElementById("InputTriangle1");
    const input2 = document.getElementById("InputTriangle2");
    let a = input.value;
    let b = input1.value;
    let c = input2.value;
    let perimeter = a + b + c;
    alert('triangle´s perimeter is ' + perimeter + 'cm');
}



function triangleArea() {
    const input = document.getElementById("InputTriangle");
    const input1 = document.getElementById("InputTriangle1");
    const input2 = document.getElementById("InputTriangle2");
    let triangleSide = input.value;
    let triangleSide1 = input1.value;
    let triangleSide2 = input2.value;
    let semiperimeter =  (triangleSide + triangleSide1 + triangleSide2)/2;
    let triangleHeight_base_a =(2/triangleSide)*((semiperimeter*(semiperimeter-triangleSide)*(semiperimeter-triangleSide1)*(semiperimeter-triangleSide2))**(1/2));
    let area = (triangleHeight_base_a*triangleSide)/2
    alert('triangle´s Area is ' + area + 'cm2');
}

console.groupEnd();

//circle
console.group('circle')

const PI = Math.PI;

//circumference 
function circlePerimeter(){
    const input = document.getElementById("InputCircle");
    let radius = input.value;
    let Diameter = radius*2;
    let perimeter = Diameter*PI
    alert('circle´s perimeter is ' + perimeter + 'cm')
} 


//area
function circleArea() {
    const input = document.getElementById("InputCircle");
    let radius = input.value;
    let area = (radius**2)*PI
    alert('Circle´s Area is ' + area + 'cm2');
}

console.groupEnd()