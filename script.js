/* Задание 1 */

var name = prompt('Введите своё имя');
console.log('Меня зовут ' + name);
var year = +prompt('Введите свой возрост');
console.log('Мне ' + year);
var pr1 = +prompt('Решите пример 6 + 3 = ?');
console.log('Пример 1: 6 + 3 = ' + (6 + 3) + ' Ваш ответ ' + pr1);
var pr2 = +prompt('Решите пример 20 - 5 = ?');
console.log('Пример 2: 20 - 5 = ' + (20 - 5) + ' Ваш ответ ' + pr2);
var pr3 = +prompt('Решите пример 15 * 2 = ?');
console.log('Пример 2: 15 * 2 = ' + (15 * 2) + ' Ваш ответ ' + pr3);
var pr4 = +prompt('Решите пример 8 / 4 = ?');
console.log('Пример 2: 8 / 4 = ' + (8 / 4) + ' Ваш ответ ' + pr4);
var pr5 = +prompt('Решите пример 10 % 3 = ?');
console.log('Пример 2: 10 % 3 = ' + (10 % 3) + ' Ваш ответ ' + pr5);
alert('Откройте консоль для просмотра')

/* Задание 2 */

var X, Y, Z, res;

X = prompt('Введите первое число');
Y = prompt('Введите второе число');
Z = prompt('Введите третье число');

res = (X + Y + Z) / 3;

alert('Среднее арифметическое: ' + res);