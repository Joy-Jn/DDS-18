
var alunos = ["Pedro", "Tiago", "João"]
var notas = [7,8,9]

console.log(alunos[2], "=", notas[2])

/*

//Declarando um objeto
var aluno = {
    nome: "Pedro", nota: 8
}

console.log(aluno.nome)
console.log(aluno.nota)
console.log(aluno.nota, "-", aluno.nota)

*/

/*

//Selecionando uma propriedade
var pessoa = {
    nome:"Maria",
    idade: 20
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa["idade"])

//Adicionando novas propriedades
pessoa.rg = "12345678910"
console.log(pessoa);

pessoa["profissão"] = "Diretora"
console.log(pessoa);

//Adicionando propreiedade com uma variável
var novaProp = "sobrenome"
pessoa[novaProp] = "Do Bairro"
console.log(pessoa.sobrenome);

*/

/*

//Criando métodos
var animal = {
    nome:"Mel",
    raca:"Poodle",
    latir: function(){
        console.log("Au Au")
    },
    andar: function(){
        console.log("Andei")
    }
}

console.log(animal.nome)
console.log(animal["raca"])
animal.latir()
animal.andar()

*/

var aluno = {
    nome: "Cris",
    notas: [7, 7],
    media: function(n1,n2){
        return((n1+n2) / 2)
    }
}

console.log("O nome do aluno é:", aluno.nome)
console.log("Sua média foi:", aluno.media(aluno.notas[0], aluno.notas[1]))