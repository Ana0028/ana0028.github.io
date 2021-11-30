let RegistrosHTML = document.getElementById('RegistrosHTML');
let arrayRegistros = [];

async function leeRegistros(){
    //var nombre= document.getElementById('nombre').value;
    //var apellido = document.getElementById('apellido').value;
    const respuesta = await fetch("data/registros.json");
    const registros = await respuesta.json();
    

    return registros;
}

async function muestraRegistros(){
    try{
        arrayRegistros = await leeRegistros();
        
    }
    catch(e){
        console.log("Error generado:" +e);
    }
    console.log(arrayRegistros);
    //RegistrosHTML.innerHTML = RegistrosHTML.innerHTML + arrayRegistros.nombre + " " + arrayRegistros.apellido;
    arrayRegistros.forEach(function (item, index) {
        RegistrosHTML.innerHTML = RegistrosHTML.innerHTML + item.nombre + " " + item.apellido + "<br>";

    });


    
}

muestraRegistros(); 