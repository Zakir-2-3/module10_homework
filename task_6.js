// Задание 6

// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let arr = [1, 1, 1];
let check = arr[0];
let equal = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== check) {
    equal = false;
  }
}
console.log(equal);
