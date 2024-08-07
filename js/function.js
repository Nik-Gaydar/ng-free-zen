// функциональная дклорация
function calcSum(num1, num2) {
  return num1 + num2;
};

console.log(calcSum(1, 2));

// функциональное выражение анонимной функции
const calcMinus = function (num1, num2) {
  return num1 - num2;
};

console.log(calcMinus(3, 2));

// функциональное выражение именованной функции
const calcMultiplication = function multiplication(num1, num2) {
  return num1 * num2;
};

console.log(calcMultiplication(4, 2));

// стрелочная функция
const calcDivision = (num1, num2) => {
  return num1 / num2;
};

console.log(calcDivision(6, 3));
