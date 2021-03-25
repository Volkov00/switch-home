let day = +prompt('Напишите число');
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        alert('Первая декада');
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
        alert('Вторая декада');
        break;
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
        alert('Третья  декада');
        break;
    default:
    alert('Такого числа нету')
}




// let a = prompt('Yor number?')
// function mounth(a) {
//     if (isNaN(a)) return alert('WHAT??');
//     if (a >= 0 && a <= 10) return alert('first dekada');
//     if (a >= 10 && a <= 20) return alert('second dekada');
//     if (a >= 20 && a <= 31) return alert('Third dekada');
//     return alert ('Nothing');
// }
// alert (mounth(a));







// let q = +prompt('Number1');
// let qq = +prompt('Number2');
// let qqq = +prompt('Введите действия \n 1.деление \n 2.умножение \n 3.сложение \n 4.вычетание');

// switch (qqq) {
//     case 1:
//         let sum = (q / qq);
//         alert(sum);
//         break;
// }
// switch (qqq) {
//     case 2: 
//         alert(q * qq +' '+'Результат Вашего умножения');
//         break;
// }
// switch (qqq) {
//     case 3: 
//         alert(q + qq +' '+'Результат Вашего сложения');
//         break;
// }
// switch (qqq) {
//     case 4: 
//         alert(q - qq +' '+'Результат Вашего вычитания');
//         break;
//     default: alert('Error');
//         break;
// }



// let q = +prompt('Number1');
// let qq = +prompt('Number2');
// let qqq = +prompt('Введите действия \n 1.деление \n 2.умножение \n 3.сложение \n 4.вычетание');
// if (isNaN(q - qq - qqq)) alert('please only number');
// if (qqq === 1) {
//     alert(q / qq);
// }
// if  (qqq === 2){
//     alert(q * qq);
// }
// if (qqq === 3) {
//     alert(q + qq);
// }
// if (qqq === 4) {
//     alert(q - qq);
// }
// else (
//     alert('Error')
// )




// let v1 = +prompt('Number1');
// let v2 = +prompt('Number2');
// let actions = +prompt('Введите действия \n 1.+ \n 2.- \n 3.* \n 4./');

// function t(v1, v2, action) {
//     if (isNaN(v1 - v2 - actions)) {
//         return alert ('Only Numbers Pls');
//     }
//     if (action === 1) {
//         sum = v1 + v2;
//         return alert(sum);
//     } if  (actions === 2) {
//         min = v1 - v2;
//         return alert(min);
//     } if (actions === 3) {
//         multiplication = v1 * v2;
//         return alert(multiplication);
//     } if (actions === 4) {
//         division = v1 / v2;
//         return alert(division);
//     } if (actions > 4) {
//         return alert('Nothing');
//     } else {
//         return alert('ERROR');
//     }
// }
// alert(t(v1, v2));