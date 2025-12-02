// Entra - Variaveis
// Media aritmetica de 3 notas, e menor 3 horrive
// menor que 7 de pra miora, maior 7 genio 
const notas1 = prompt ("Digite a 1 nota")
const notas2 = prompt ("Digite a 2 nota")
const notas3= prompt ("Digite a 3 nota")


const some = Number(notas1) + Number(notas2) + notas3
const media = some / 3 

// media menor que 3
// media menor que 7
// media meior que 7
if (media  <  3) {
    alert("Media e insuficiente: " + media + "horrivi")
 } else if (media < 7) {
    alert("Media e insuficiente: " + media + "da para passa")
} else{
    alert("Media e insuficiente: " + media + "genio")
} 
    