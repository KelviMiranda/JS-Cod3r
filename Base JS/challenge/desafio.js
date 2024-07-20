"use strict";

const carrinho = [
    { nome:'Caneta', qtde:10, preco:7.99 },
    { nome:'Impressora', qtde:0, preco:649.50 },
    { nome:'Caderno', qtde:4, preco:27.10 },
    { nome:'Lapis', qtde:3, preco:5.82 },
    { nome:'Tesoura', qtde:1, preco:19.20 }
];

Array.prototype.meuFilter = function(fn){
    let filter = [];
    for(let element of carrinho){
        if(fn(element)){
            filter.push(element);
        }
    }

    return filter;
}

Array.prototype.meuMap = function(fn){
    let meuMap = [];
    for(let element of this){
        meuMap.push(fn(element));
    }

    return meuMap;
}

Array.prototype.meuReduce = function(){

}

const qtdMaiorQueZero = item => item.qtde > 0;
const totalItem = item => item.qtde * item.preco;
const resultFilter = carrinho.meuFilter(qtdMaiorQueZero).
meuMap(totalItem);
console.log(resultFilter)
