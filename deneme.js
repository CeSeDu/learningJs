window.onload = function(){
    var myButton = document.querySelector('#myButton');
    myButton.addEventListener('click',function(){
        var neWNode = document.createElement("div");
        neWNode.innerHTML = "<bold> Aleykum  Selam Kral<bold/>";
        neWNode.setAttribute('id','myNode');

        var myArray = document.getElementsByClassName("bir");
        myArray[0].insertBefore(neWNode,myArray[0].firstElementChild);


    });
}
