"use strict";

function somar (a = 1, b = 1){
    console.log(a + b)
}

somar();

function subtrair(a, b){
    return a - b
}

function executar(funcao){
    if(typeof funcao === "function"){
        return funcao(20, 10)
    }
   
}

const y = executar(somar);
console.log(y);