"use strict";
/**********AULA 02 - TYPESCRIPT: FUNÇÕES**********/
/***********************INT***********************\
/*
function sum(a:number, b:number): number {
    return a + b;
}

console.log(sum(10,20));
*/
/*********************BIGINT**********************/
function sum(a, b) {
    return a + b;
}
console.log(sum(10n, 20n));
/*****************SEM DECLARAR TIPO*****************/
/*
function sum(a, b) {
    return a + b;
}
/*

/***************COMPILAR -> TERMINAL****************

-> tsc aula01.ts
-> node aula01.ts
*/
/*****************FUNÇÃO FATORIAL********************/
/************************FOR*************************/
function fat(n) {
    let f = 1n;
    for (let i = 2n; i <= n; ++i)
        f *= i; //vezes igual
    return f;
}
console.log(fat(50n));
/********************RECURSIVA*********************/
function rfat(n) {
    return n == 0n
        ? 1n //operador terminário (java)-> se o n for = 0 então resultado da expressão = 1; 
        : n * rfat(n - 1n); //se for diferente de zero = fatorial;
}
