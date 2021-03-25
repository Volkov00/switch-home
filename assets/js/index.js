let a = +prompt('num1');
let b = +prompt('num2');

function sum(a, b) {
    return a + b;
}
function zero(a, b, hightFunc) { // функия с агрументоми а и б и hightFunc
    const results = hightFunc(a, b); //  создаем переменную где higth содержит два парамента а и б
    return results; // выводит результат переменной
}
console.log(zero(a, b, sum));

// аналогия с щупальцами sum переходит в hightFunc > zero вызывает в консольлоге hightFunc как функцитю sum (как параметр или нет я хз)