//import validator from './validator.js';

//console.log(validator);

let numberCard = document.getElementById("card");
let btnValidate = document.getElementById ("vCard");

btnValidate.onclick = function(){

    let nCard= numberCard.value;

    let num = Array.from(nCard);
    let revers = num.reverse();
    console.log(nCard);
    console.log(num);
    
    for (let i=0; i <= num.length(); i++) {

        const entero[i]= parseInt(num(i));
        let arrayNCard = arrayNCard.push(entero);
        console.log(arrayNCard);
        break
  
    }

    
    
}
