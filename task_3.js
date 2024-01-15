// Задание 3

// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let text = 'Hello';
let textReversed = text.split('').reverse().join('');

console.log(textReversed);