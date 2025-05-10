let VarGlobal1 = "texto de variable global";

function FCambioColor() {
    let varTemporal = "texto temporal";
    let vTexto1 = document.getElementById("ejmDOM1");

    vTexto1.textContent = "Texto cambiado por funcion FCambioColor()";
    vTexto1.style.color = "red";
    vTexto1.style.backgroundColor = "green";

    vTexto1.insertAdjacentHTML("beforeEnd", "<br>Este texto es adicional <br>");
    vTexto1.insertAdjacentHTML("beforeEnd", VarGlobal1);
    vTexto1.insertAdjacentHTML("afterend", "texto adicional <br><br>");

    console.log("Texto por consola");
}

// Prueba fuera de la función
let vTexto1 = "Texto fuera de funcion"; // vTexto1 no es la variable de la función
console.log(vTexto1);
console.log(typeof varTemporal === "undefined" ? "varTemporal no está definido afuera de la función" : varTemporal);

function FCambioClase1() {
    let vTexto2 = document.getElementsByClassName("classDOM1");
    vTexto2[0].innerHTML = "Elemento [1] del arreglo de clase classDOM1";
    console.log("Tamaño del array=", vTexto2.length);
    // se coloca el índice 1 por ser el 2do elemento de la clase classDOM1 de la pag web
}

function FCambioTag1() {
    let vTexto3 = document.getElementsByTagName('h2');
    vTexto3[10].innerHTML = "Elemento h2 cambiado por TagDOM1";
    // se coloca el índice 6 por ser el 7mo elemento h2 de la pag web index.html
}

window.vTexto1 = "";
console.log("Texto fuera de funcion");

function FAgregarTextoPermanente() {
    let textoAdicional = "\nTexto adicional para concatenar";
    vTexto1 = vTexto1 + textoAdicional;
    console.log("tipo de variable de vTexto1 =", typeof vTexto1);
    console.log(vTexto1);
}
FAgregarTextoPermanente();

function fcrearH1() {
    var elemento = document.getElementById("idCrearH1");
    var nuevoH1 = document.createElement("h1");
    var texto = document.createTextNode("Texto colocado en linea");
    nuevoH1.appendChild(texto);
    elemento.appendChild(nuevoH1);
}
function FCapturarNombre(){

    const vTexto1 = document.getElementById("nombre");
    const vTexto2 = document.querySelectorAll("input.datosPersonales");
   // usar input para clases relacioandas a cajas de texto, etc
    vTexto1.style.color="red";
    
    var valor1 =vTexto1.value; // value obtiene el contenido de la caja de texto nombre
    var valor2 ="";

    document.getElementById("observacion").value = valor1;//textarea ya captura el nombre
   //foreach recorre todo el contenido del array de la clase datosPersonales
    vTexto2.forEach(input => {
        valor2 =valor2 + `${input.name}: ${input.value}\n`;
      });

    document.getElementById('observacion').value = valor2;
    console.log('El valor del nombre es:', valor1);
}
//for1 class
function FUsoFor1()
{
  const vTextoClass = document.getElementsByClassName("classFOR1");
  var vTextoTotal="";
  // como length=4 --> ira desde 0 hasta 3
  for(let i=0 ; i< vTextoClass.length ; i++ )
  {
    vTextoClass[i].style.border ="2px solid red" ;
    vTextoTotal=vTextoTotal + vTextoClass[i].innerText+'-';

  } // fin de for
  var nuevoH1 =document.createElement("h1");
  var texto = document.createTextNode(vTextoTotal);
  nuevoH1.appendChild(texto);
  vTextoClass[3].appendChild(nuevoH1);
  
} 
//funcion feliminar concat
function FEliminarConcat() {
    const VTextClass = document.getElementsByClassName('classFOR1');
    let rpta = prompt('Estas seguro de eliminar el texto concatenado?(S/N):');
    if (rpta=="S" || rpta=="s") { // doble || significa o
        let rpta2 = prompt('Ingrese el numero de fila a eliminar:');
        VTextClass[rpta2].remove(); // eliminar la class de posicion [rpta2]
        alert('CONCATENACION ELIMINADA');
    } else {
        if (rpta=="N" || rpta=="n") {
            alert('NO SE eliminara');
        } else {
            alert('OPCION INCORRECTA-Ingresa nuevamente');
        }
    }
}

//validar ciclo 
function FValidarCiclo() {
    const varciclo = document.getElementsByName("ciclo");
    let seleccionado = false;

    varciclo.forEach(radio => {
        if (radio.checked) {
            document.getElementById('observacion').value = radio.value;
            seleccionado = true;
            return;
        }
    });

    if (!seleccionado) {
        alert("Por favor, selecciona un ciclo antes de continuar.");
    }
}

/*function FCrearDatosCiclo() // como funciona con funcion y se activa con boton
{
    const radios = document.querySelectorAll('input[name="ciclo"]');

    radios.forEach(function(radio) {
        radio.addEventListener('change', function(event) {
            console.log("Ciclo seleccionado:", event.target.value);
            const cantidad = event.target.value;
            //este es el evento; target es el ultimo radio, value es su valor del radio
            //radio es el elemento del radio
            document.getElementById('observacion').value = cantidad;
        });
    });
}*/

document.addEventListener("DOMContentLoaded", () => {
    const radios = document.querySelectorAll('input[name="ciclo"]');
//esto es sin boton
    radios.forEach(function(radio) {
        radio.addEventListener('change', function(event) {
            console.log("cielo seleccionado:", event.target.value);
            const cantidad = event.target.value;

            document.getElementById('observacion').value = cantidad;
        });
    });
});
//crear no se
document.addEventListener("DOMContentLoaded", () => {
    const numCole = document.getElementById("numColegios");
    document.getElementById("numColegios").addEventListener("input",(event)=> {
      let content ="";
      const cantR=event.target.value;
      const vTexto1 = document.getElementById("ejmDOM1");
      vTexto1.innerText= cantR;   
      document.getElementById('observacion').value = cantR;
      for(let i=0; i<cantR ;i++)
      {
        content=content + `<div> <label> Colegio ${i+1} </label>
                            <input type="text" id="cole[${i}" > </div>`;
      }
    document.getElementById("DetalleColegios").innerHTML=content;
    
    });
    });