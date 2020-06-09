import validator from './validator.js';
let numberCard = document.getElementById("card");
// Obteniendo Id para agregar evento que llame funcion
let btnValidate = document.getElementById("button");
btnValidate.addEventListener("click",getNumberCard);
// función capturar el dato del input en reversa
function getNumberCard(){
    let nCard = numberCard.value;
    let nCardNumber = Array.from(nCard);
    nCardNumber.reverse();

    console.log(nCardNumber);
    