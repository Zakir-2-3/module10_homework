// Задание 8

// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

// Используйте шаблонные строки.

let studentGrades = new Map();

studentGrades.set("John", "A");
studentGrades.set("Ben", "B");
studentGrades.set("Alex", "C");

for (let user of studentGrades.keys()){
    console.log(user + " grade: " + studentGrades.get(user));
}