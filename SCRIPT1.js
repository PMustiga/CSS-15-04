function FCambioColor(){
    let vTexto1 = document.getElementById("ejmDOM1");
    vTexto1.textContent= "Texto cambiado por Función FCambioColor";
    vTexto1.style.color="blue";
    vTexto1.insertAdjacentHTML("beforeEnd",
        "<br>Este texto es adicional </br>");
    vTexto1.style.color="green";
}