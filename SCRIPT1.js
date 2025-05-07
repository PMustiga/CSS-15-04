let VarGlobal1="texto de variable global";
function FCambioColor(){
    let vTexto1 = document.getElementById("ejmDOM1");
    vTexto1.textContent= "Texto cambiado por Función FCambioColor";
    vTexto1.style.color="blue";
    vTexto1.insertAdjacentHTML("beforeEnd",
                             "<br>Este texto es adicional </br>");
    vTexto1.style.color="green";
    vTexto1.style.backgroundColor="red";

    vTexto1.insertAdjacentHTML("beforeEnd", VarGlobal1);
    //la variable global se puede utilizar dentro de cualquier función

}
vTexto1= "Texto fuera de función"; //vTexto1 no es la variable de la función
console.log(vTexto1);
console.log(varTemporal); // varTemporal no está definido afuera de función

function FCambioClase1(){
    let vTexto2=document.getElementsByClassName("classDOM1");
    vTexto2[0].innerText="Elemento [0] del arreglo \n de clase classDOM1";
    vTexto2[0].style.color="white";
    console.log("tamaño del array=",vTexto2.length);
    console.log("Tipo de variabe vTexto2", typeof vTexto2[1]);
    //se coloca el índice 0 por ser el primer elemento de la clase classDOM1 de la página web
}

function FCambioTag1(){
    let vTexto3=document.getElementsByTagName("h2");
    vTexto3[1].innerHTML="Elemento h2 cambiado por TagDOM1";
        //se coloca el índice 1 por ser el segundo elemento h2  de la web index.html
         console.log("Tamaño del array",vTexto3.length);
    vTexto3[19].insertAdjacentHTML("beforeend", "<br>Tamaño de h2 =" + vTexto3.length);
    console.log("Valor de totalh2=",totalh2);
    console.log("tipo de variable totalh2=", typeof totalh2);
    }
    
    window.vTexto1="";

function FAgregarTextoPermanente()
{
    let textoAdicional ="Texto adicional para concatenar";
    vTexto1=vTexto1 + textoAdicional;
    console.log("tipo de variable de vTexto1=", typeof vTexto1);
    console.log(vTexto1);

}

function FCrearH1()
{
    var elemento =document.getElementById("idCrearH1");
    var nuevoH1=document.createElement("H1");
    var texto =document.createTextNode("Texto colocado en línea");
    nuevoH1.appendChild(texto);
    elemento.appendChild(nuevoH1);
}
function FCapturarNombre(){

    const vTexto1 = document.getElementById("nombre");
    const vTexto2 = document.querySelectorAll("input.datosPersonales");
    const vTexto3 = document.getElementById("clave"); //controla el password
   // usar input para clases relacioandas a cajas de texto, etc
    vTexto1.style.color="red";
    
    var valor1 =vTexto1.value; // value obtiene el contenido de la caja de texto nombre
    var valor2 ="";
    vTexto3.value=valor1; //agigna el nombre a l clve

   //foreach recorre todo el contenido del array de la clase datosPersonales
    vTexto2.forEach(input => {
        valor2 = valor2 + `${input.name}: ${input.value}: ${input.id}\n`;
        input.style.border="2px solid orange"
      });

        vTexto2[1].style.border="2px solid green"
    document.getElementById('observacion').value = valor2;
    console.log('El valor del nombre es:', valor1);
}

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
  
}  // fin de function