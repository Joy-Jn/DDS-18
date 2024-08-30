/*

//Objeto Window = janela do navegador
window.console.log("Testei")
window.alert("Alertei")
window.prompt("Diz pra mim o que eu já sei:")


//objeto document = código html
console.log(document.head)

*/

//Acessando elementos por tag, class e id

var titulo = document.getElementsByTagName("h1")
var paragrafos = document.getElementsByClassName("para")
console.log(paragrafos)
var para3 = document.getElementById("p3")

paragrafos[0].innerText = "Tauba"
para3.innerHTML = "<h3> Novo texto aqui </h3>"
