let global1 = 5; 
let global2 = 5;

console.log(test('qwerty')); // после вывода перезапишится переменная на 7
console.log(det('first', global2)); // перезаписи не будет.

console.log(test('ytrewq')); // после вывода перезапишится переменная на 9
console.log(det('second', global2)); // перезаписи не будет.


function test(msg) {
    const res = global1 += 2;
    return res + msg;
}

function det(msg, local) {
    const res = local += 2;
    return res + msg;
}