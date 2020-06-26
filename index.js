import validator from './validator.js';

let btnBuy = document.getElementsByClassName("btnBuy");
let numberCard = document.getElementById("card");
let btnValidate = document.getElementById ("vCard");
const card = document.querySelector('#tarjeta');
const formulario = document.querySelector("#formulario-tarjeta");
const yearActual = new Date().getFullYear();
let numeroTarjeta = document.querySelector('#tarjeta .numero');
let nombre = document.querySelector('#tarjeta .nombre');
let mesExpiración = document.querySelector("#tarjeta .mes");
let añoExpiración = document.querySelector("#tarjeta .year");
let ccv = document.querySelector('#tarjeta .ccv');
let firma = document.querySelector('#tarjeta .firma p');


document.getElementById("shop").style.display="block";
document.getElementById("pre-order").style.display="none";
document.getElementById("nameCard").style.display ="none";
document.getElementById("dateCard").style.display ="none";
document.getElementById("invalid").style.display ="none";


//TOMA TODAS LAS CLASES DE LOS BOTONE COMPRA Y EJECUTA UNA FUNCION
for ( let i=0; i < btnBuy.length; i++){
       
    btnBuy[i].addEventListener("click", flip);
}

function flip() {
    document.getElementById("shop").style.display="none";
    document.getElementById("pre-order").style.display="block";
}

//SE REALIZAN FUNCIONALIDADES DE LA TARJETA(DIBUJO)
 
//rotar la tarjeta
card.addEventListener('click', () => {
    card.classList.toggle('active');
});

// * Select del mes generado dinamicamente.
for (let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

// INPUT NÚMERO DE TARJETA DELANTERA

formulario.card.addEventListener("keyup", (e) =>{
    let inputValue = e.target.value;
    formulario.card.value = inputValue;
    

   /*numeroTarjeta.textContent = inputValue;*/
    
    if (inputValue == ""){
        numeroTarjeta.textContent = "#### #### #### ####";

    }
});

formulario.inputNombre.addEventListener("keyup", (e) => {
    let inputValue = e.target.value;
    formulario.inputNombre.value = inputValue;
    nombre.textContent = inputValue;
    firma.textContent = inputValue;

    if (inputValue == ""){
        nombre.textContent = "JHON DOE";

    }
});

formulario.selectMes.addEventListener("change", (e) => {
    mesExpiración.textContent = e.target.value;
    });

formulario.selectYear.addEventListener("change", (e) => {
        añoExpiración.textContent = e.target.value;
        });

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!card.classList.contains('active')){
		card.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});


        
//FUNCION QUE REALIZA TODO LO RELACIONADO CON LA VALIDACIÓN Y MASKIFY DE LA TARJETA (llama a validator.js)
btnValidate.onclick = function(){

    let nCard= numberCard.value;

    let num = Array.from(nCard);
    num.reverse();
    
    let result=validator.isValid(num);
    
    let mask=validator.maskify(nCard);
    
    if (result == true){
        document.querySelector(".numero").textContent= mask;
        document.getElementById("nameCard").style.display ="block";
        document.getElementById("dateCard").style.display ="block";
        document.getElementById("invalid").style.display ="none";
    }else{
        document.getElementById("maskify").innerHTML = mask;
        document.getElementById("invalid").style.display ="block";
        document.getElementById("nameCard").style.display ="none";
        document.getElementById("dateCard").style.display ="none";
    }
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


