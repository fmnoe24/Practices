let hora = 7;
let minuto = 0;
let segundo = 0;
cargarSegundos();

//Defino y ejecuto los segundos
function cargarSegundos(){
    let txtSegundos;

    if(segundo < 0){
        segundo = 59;
    }

    //Mostrar los segundos en pantalla
    if(segundo < 10){
        txtSegundos = `0 ${segundo}`;
    }else {
        txtSegundos = segundo;
    }
    document.getElementById("segundo").innerHTML = txtSegundos;
    segundo --;

    cargarMinutos(segundo);
}

//Defino y ejecuto los minutos
function cargarMinutos(segundo){
    let txtMinutos;

    if(segundo == -1 && minuto !== 0){
        setTimeout(() => {
            minuto --;
        }, 500);
    }else if(segundo == -1 && minuto == 0){
        setTimeout(() => {
            minuto= 59;
        }, 500);
    }

     //Mostrar los minutos en pantalla
     if(minuto < 10){
        txtMinutos = `0 ${minuto}`;
     }else {
        txtMinutos = minuto;
    }
    document.getElementById("minuto").innerHTML = txtMinutos;

    cargarHoras(segundo, minuto);
}

//Defino y ejecuto las Horas
function cargarHoras(segundo, minuto){
    let txtHoras;
    if(segundo == -1 && minuto == 0 && hora !== 0){
        setTimeout(() => {
            hora --;
        }, 500);
    }else if(segundo == -1 && minuto == 0 && hora == 0){
        setTimeout(() => {
            hora = 2;
        }, 500);
    }

    //Mostrar las horas en pantalla
    if(hora < 10){
        txtHoras = `0 ${hora}`;
     }else {
        txtHoras = hora;
    }
    document.getElementById("hora").innerHTML = txtHoras;
}


//Ejecutar la funcion de segundos
setInterval(cargarSegundos, 1000)