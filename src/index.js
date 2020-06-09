import validator from './validator.js';

console.log(validator);

let numberCard = document.getElementById("card");
let btnValidate = document.getElementById ("vCard");


btnValidate.onclick = function(){

    let nCard= numberCard.value;

    let num = Array.from(nCard);
    num.reverse();
   
    console.log(num);
    
    /* otra forma de hacer entero un numero dentro de de un array
    let multipleNumbers = num;
    let multipleNumbers2 = multipleNumbers.map(multiple);
    
    console.log(multipleNumbers2);

    function multiple (value, index, array){
        for (let index=0; index > array.lenght; index ++){
            return parseInt(value);
        }
        
    } */
    let arrayNCard = [];
    for (let i=0; i < num.length; i++) {

        const entero= parseInt(num[i]);
        arrayNCard.push(entero*2);
        
        if(espar(i)){
            
        }

       }
    
       console.log(arrayNCard);

}

function espar(i){
    if (i);
    return true;
}

