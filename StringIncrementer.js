// String incrementer

// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.

// EXPECTED: abcdefg2
console.log(test('abcdefg1')); 
// EXPECTED: frog25
console.log(test('frog24'));  
// EXPECTED: aa1000  
console.log(test('aa0999'));    
// EXPECTED: Tested value1
console.log(test('Tested value'));
// EXPECTED: 010
console.log(test('009'));
// EXPECTED: 0002
console.log(test('0001'));
// EXPECTED: a100
console.log(test('a99'));

function test(strng){
    if (isNaN(strng.slice(-1))) {
        return strng + '1';
    }

    let number = '';
    let digitIndex = 0;

    for (let i = strng.length - 1; i >= 0; i--) {
        if (isNaN(strng[i])) {
            digitIndex = i + 1;
            break;
        }
        
        number += strng[i];
    }

    let initNum = strng.substring(digitIndex);

    number = Number(number.split('').reverse().join('')) + 1;
    
    if (initNum.length > number.toString().length) {
        number = initNum.substring(0, initNum.length - number.toString().length) + number;
    }

    return strng.substring(0, digitIndex) + number;
} 