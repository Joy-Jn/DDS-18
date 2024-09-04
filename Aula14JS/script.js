/*

function mostrarTexto(){
    console.log("O texto apareceu");
}

var contagem = 0

function mostrarContagem(){
    contagem++
    console.log(contagem);
    if(contagem > 10){
        para()
    }
}

setTimeout(mostrarTexto, 5000)

minhaContagem = setInterval(mostrarContagem, 1000)

console.log(minhaContagem + "aaaaaaaaaaaa");

function para(){
    clearInter(minhaContagem)
}

*/

var horas = document.getElementById("horas")
var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")
var titleSaudacao = document.getElementById("saudacaoTexto")
var mesAno = document.getElementById('mesAno')

var diasSemana = ['DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA', 'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SÁBADO']
var listaMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

var atualizaRelogio = setInterval(function (){

    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()
    var minutoAtual = dataAtual.getMinutes()
    var segundoAtual = dataAtual.getSeconds()
    var diaAtual = dataAtual.getDay()
    var mesAtual = dataAtual.getMonth()
    var anoAtual = dataAtual.getFullYear()

    if(horaAtual < 10)
        horaAtual = "0" + horaAtual

    if(minutoAtual < 10)
        minutoAtual = "0" + minutoAtual

    if(segundoAtual < 10)
        segundoAtual = "0" + segundoAtual
       
    horas.textContent = horaAtual
    minutos.textContent = minutoAtual
    segundos.textContent = segundoAtual
    mesAno.textContent = `${diasSemana[diaAtual]} - ${listaMeses[mesAtual]} - ${anoAtual}`
})

function trocaSaudacao(hora){
    if(hora < 6)
        return 'Boa Madrugada'
    else if(hora < 12)
        return 'Bom Dia'
    else if(hora < 18)
        return 'Boa Tarde'
    else
        return 'Boa Noite'
}

