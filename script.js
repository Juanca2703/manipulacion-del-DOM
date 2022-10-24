 
 const h1 = document.querySelector("h1");
 const numero1 = document.querySelector("#numero1");
 const numero2 = document.querySelector("#numero2");
 const p = document.querySelector("#result");


function calcular() {
    let a = parseInt(numero1.value)  + parseInt(numero2.value);
    p.innerText = a ;
    
}



