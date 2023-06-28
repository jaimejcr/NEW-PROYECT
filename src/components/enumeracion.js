import react from 'react';



// type: Un string que debe ser "Visa" o "Master Card"
const logoTarjeta = "masterCard";



// number: Un string con los 16 números de la tarjeta. Por seguridad, sólo mostrarás los 4 últimos (pero el número debe venir completo por props)
function numeraciónTarjeta(numero) {
    numero = numero.toString()
    acumulador="";
    for ( i === 0; i < numero.length; i++ ) {
        if (i < 4){
            acumulador = acumulador + numero[i]
        }else {
            acumulador = acumulador + "#"
        }
        
    }
return acumulador
}
numeraciónTarjeta();
console.log(numeraciónTarjeta(1234567891010101));