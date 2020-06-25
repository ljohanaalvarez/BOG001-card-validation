const validator = {
<<<<<<< HEAD

    isValid: num => {

        let arrayNCard = [];
        let multiplicar = 0;

        for (let i = 0; i < num.length; i++) {

            const entero = parseInt(num[i]);
            arrayNCard.push(entero);
            
            if (validator.espar(i) == true) {

                multiplicar = arrayNCard[i] * 2;

                if (multiplicar > 9) {

                    let cifra = multiplicar - 9;

                    arrayNCard.pop(i);
                    arrayNCard.push(cifra);

                } else {
                    arrayNCard.pop(i);
                    arrayNCard.push(multiplicar);
                }

            } else {
                multiplicar = arrayNCard[i];
            }

        }

        let suma = arrayNCard.reduce(validator.sum,0);
       
        if (suma % 10 == 0) {
            return num = true;
        } else {
            return num = false;
        }

    },
    espar: i => {
        if (i % 2 != 0) {
            return true;
        } else {
            return false;
        }
    },
    sum: (total, num) => {
        return total + num;
    },
    maskify: num => {

        let mask_simbol = "*";
        if (num.length >= 4){
            let lastDigit = num.slice(-4);
            let masked_str = mask_simbol.repeat(num.length-4) + lastDigit;
            return num = masked_str;
        }else{
            return num;
        }        
    }
}

export default validator;
=======
<<<<<<< HEAD
    
  };
  
  export default validator;
=======
  // ...np
};

export default validator;

>>>>>>> 2b7fcc7... js
>>>>>>> e47f876... js
