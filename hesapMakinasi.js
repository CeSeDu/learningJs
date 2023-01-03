var num1 = document.querySelector('#numberOne');
var num2 = document.querySelector('#numberTwo');
var sum =  document.querySelector('#sum');

num1.addEventListener('input',topla);
num2.addEventListener('input',topla);

function topla() {
    var one = parseInt(num1.value) || 0;
    var two = parseInt(num2.value) || 0;

    sum.innerHTML = (one + two);

}

var num12 = document.querySelector('#numberOne2');
var num22 = document.querySelector('#numberTwo2');
var sum2 =  document.querySelector('#sum2');

num12.addEventListener('input',topla2);
num22.addEventListener('input',topla2);

function topla2() {
    var one = parseInt(num12.value) || 0;
    var two = parseInt(num22.value) || 0;

    sum2.innerHTML = (one - two);

}


var num13 = document.querySelector('#numberOne3');
var num23 = document.querySelector('#numberTwo3');
var sum3 =  document.querySelector('#sum3');

num13.addEventListener('input',topla3);
num23.addEventListener('input',topla3);

function topla3() {
    var one = parseInt(num13.value) || 0;
    var two = parseInt(num23.value) || 0;

    sum3.innerHTML = (one * two);

}
var num14 = document.querySelector('#numberOne4');
var num24 = document.querySelector('#numberTwo4');
var sum4 =  document.querySelector('#sum4');

num14.addEventListener('input',topla4);
num24.addEventListener('input',topla4);

function topla4() {
    var one = parseInt(num14.value) || 0;
    var two = parseInt(num24.value) || 0;

    sum4.innerHTML = (one / two);

}
