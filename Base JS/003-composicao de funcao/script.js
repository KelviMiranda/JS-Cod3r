"use strict";

function composicao(fn1, fn2,fn3, value){
    return fn3(fn2(fn1(value)));
}

function gritar(texto){
    return texto.toUpperCase();
}

function enfatizar(texto){
    return `${texto}!!!!!!!`;
}

function tornarLento(texto){
    return texto.split('').join(' ');
}

const resultado = composicao(
    gritar,
    enfatizar,
    tornarLento,
    'Cuidado com o buracco'
);

    console.log(resultado)