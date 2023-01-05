var square = document.querySelector('#square');
var rectangle = document.querySelector('#rectangle');

square.addEventListener('click',clickSquare);
rectangle.addEventListener('click',clickRectangle);

function clickSquare(event){
    event.stopPropagation();//yalnızca kendinden istenen fonksiyonu kullanır
    console.log('Squera Clicked')
}

function clickRectangle(event){
    console.log('Rectangle Clicked')
}
