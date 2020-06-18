import validator from './validator.js';

console.log(validator)

let buttonBuy = document.querySelector(".buttonBuy");
let numberCard = document.getElementById("card");
let btnValidate = document.getElementById ("vCard");
document.getElementById("shop").style.display="block";
document.getElementById("pre-order").style.display="none";

buttonBuy.onclick= mostrar => {
    document.getElementById("shop").style.display="none";
    document.getElementById("pre-order").style.display="block";
}

btnValidate.onclick= getNumber => {

    let nCard= numberCard.value;

    let num = Array.from(nCard);
    
    let result=validator.isValid(num);
    console.log(result);

    let mask=validator.maskify(nCard);
    console.log(mask);
}


   
    /* otra forma de hacer entero un numero dentro de de un array
    let multipleNumbers = num;
    let multipleNumbers2 = multipleNumbers.map(multiple);
    
    console.log(multipleNumbers2);

    function multiple (value, index, array){
        for (let index=0; index > array.lenght; index ++){
            return parseInt(value);
        }
        
    } */

