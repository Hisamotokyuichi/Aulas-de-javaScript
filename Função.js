
/*variavel 
let resultado = soma(2 , 6 )
//output
console.log("O resultado da função é " + resultado);



//função 
function soma(numA,numB){

    let somatorio = numA+numB 
    return somatorio 
}*/

let userName = getFirstName("isaque-kyuichi-hisamoto-aguiar" , "-");
console.log("Bem vindo " + userName)

 userName = getFirstName("isaque kyuichi hisamoto aguiar" , " ");
console.log("Bem vindo " + userName)



//.splitChar para poder tirar um "caracter expecifico"
//.split ele quebra os espaços e guarda em um vetor.[]= vetor .
 function getFirstName(name , splitChar = " "){
    let firstName = name.split(splitChar)[0]
    return firstName


 }


