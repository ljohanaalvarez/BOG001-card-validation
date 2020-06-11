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
        arrayNCard.push(entero);
        
        if(espar(i) == true){
            
            let multiplicar = arrayNCard[i]*2;

            if (multiplicar > 9){

                let cifra = multiplicar -9;
                
                arrayNCard.pop(i);
                arrayNCard.push(cifra);
                
            }else{
                arrayNCard.pop(i);
                arrayNCard.push(multiplicar);
            }
           
        }else {
            let multiplicar = arrayNCard[i]*1;
        }

       }
      console.log(arrayNCard);

      let suma = arrayNCard.reduce(sum);
      console.log(suma);
    
    if (suma % 10 == 0){
        prompt ("Tu tarjeta es Valida")
    }else{
        prompt ("Tarjeta Invalida, intente nuevamente")
    }
}

function espar(i){
    if (i % 2 != 0){
        return true;
    }else{
        return false;
    }
    
}

function sum(total,num){
    return total + num;
    console.log(nCardNumber);
}
  