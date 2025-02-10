// функция высшего порядка
const applyFunction = (fn, array) => array.map(fn);

// только четные числа
const filterEvenNumbers = (numbers) => numbers.filter(num => num % 2 === 0);

const square = num => num ** 2;
// квадраты чисел
const squareNumbers = (numbers) => applyFunction(square, numbers);

// объекты с определенным свойством
const filterByProperty = (objects, property) => 
  objects.filter(obj => Object.prototype.hasOwnProperty.call(obj, property));

// сумма массива
const sumNumbers = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

// средн арифм
const averageNumbers = (numbers) => 
  numbers.length ? numbers.reduce((acc, num) => acc + num, 0) / numbers.length : 0;


// Найти сумму квадратов всех чётных чисел в заданном массиве

const numbersArray = [1, 2, 3, 4, 5];
const evenNumbers = filterEvenNumbers(numbersArray);
const squaredEvenNumbers = squareNumbers(evenNumbers);
const sumOfSquaredEvens = sumNumbers(squaredEvenNumbers);
console.log("Сумма квадратов чётных чисел:", sumOfSquaredEvens);


// Найти среднее арифметическое всех чисел, больших заданного значения, в заданном массиве объектов

const objectsArray = [
  { id: 1, value: 5 },
  { id: 2, value: 15 },
  { id: 3, value: 25 },
  { id: 4, value: 8 },
  { id: 5, value: 30 },
];
const objectsWithValue = filterByProperty(objectsArray, 'value');
const threshold = 15;
const valuesAboveThreshold = objectsWithValue
  .map(obj => obj.value)
  .filter(value => value > threshold);
const averageAboveThreshold = averageNumbers(valuesAboveThreshold);
console.log(`Среднее арифметическое чисел, больших ${threshold}:`, averageAboveThreshold);
