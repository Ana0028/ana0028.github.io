let arrayRegistros = [];
async function leeRegistros(){
    const respuesta = await fetch("https://backendakcp.azurewebsites.net/");
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
}

muestraRegistros(); 