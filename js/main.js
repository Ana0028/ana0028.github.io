
let arrayRegistros = [];
async function leeRegistros(){
    var nombre= document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    const respuesta = await fetch("https://backendakcp.azurewebsites.net/?nombre=" + nombre + "&apellido=" + apellido);
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
    console.table(arrayRegistros);
}

muestraRegistros(); 