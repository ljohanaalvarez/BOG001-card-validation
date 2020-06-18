const validator = {

    isValid: num => {

        num.reverse();

        let arrayNCard = [];

        for (let i = 0; i < num.length; i++) {

            const entero = parseInt(num[i]);
            arrayNCard.push(entero);

            if (validator.espar(i) == true) {

                let multiplicar = arrayNCard[i] * 2;

                if (multiplicar > 9) {

                    let cifra = multiplicar - 9;

                    arrayNCard.pop(i);
                    arrayNCard.push(cifra);

                } else {
                    arrayNCard.pop(i);
                    arrayNCard.push(multiplicar);
                }

            } else {
                let multiplicar = arrayNCard[i] * 1;
            }

        }

        let suma = arrayNCard.reduce(validator.sum);

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

        let lastDigit = num.slice(-4);
        let mask_simbol = "*";
        let masked_str = mask_simbol.repeat(num.length-4) + lastDigit;

        return num = masked_str;
    }
}

export default validator;


