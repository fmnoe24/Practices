function generarTiempo(){

    //Captura de la Hora actual con el objeto Date
    let tiempo = new Date();

    //Mostramos la hora con 2 dígitos.
    //Creo un ternario para saber si el numero de digito es menor a 2.
    //con el método ".toString" convertimos los valores en una cadena de texto, y en los casos que haya menos de 2 dígitos, agregaremos un número 0 por delante
    let horas = tiempo.getHours().toString().length < 2 ? "0" + tiempo.getHours() : tiempo.getHours();
    let minutos = tiempo.getMinutes().toString().length < 2 ? "0" + tiempo.getMinutes() : tiempo.getMinutes();
    let segundos = tiempo.getSeconds().toString().length < 2 ? "0" + tiempo.getSeconds() : tiempo.getSeconds();

    //concatenar las variables con "template strings"
    let mainTime = `${horas}:${minutos}:${segundos}`;
    //Se aplica la Hora en el elemento con el ID "time"
    document.getElementById("time").innerHTML = mainTime;
}

//Con el método SetInterval establezco que el reloj avanze de a 1 segudo = 1000 milisegundos.
setInterval(() =>{
    generarTiempo();
}, 1000);