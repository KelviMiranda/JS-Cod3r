"use strict";

/* 
    Operadores
    1-Unário
    2-Binário(Artimética, Relacional, Lógico, Atribuição)
    3-Ternário
*/

//Ternário -> é feita para atribuição condicional 
const temSol = true;
const estouConDinheiro = false;
const vouSair = temSol && estouConDinheiro;
const resultado = vouSair ? console.log('Ebaaaaaa') : console.error('Iiiiii que chato');
resultado

//Estrutura de control
if(' '){
    console.log("com valor no bloco")
}else{
    console.error('Sem valor no bloco')
}

//Loops
for(let i = 0 ; i <= 100 ; i+=10){
    console.log(i);
}

//Array -> 0    0    1    2    3    4    5;
const notas = [6.5, 7.7, 3.2, 8.1, 9.7];
for(let cont = 1; cont <= notas.length; cont++){
    console.log(notas[cont - 1]);
}
//Funções (Rei)
console.log(typeof Number)