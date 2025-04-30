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
}