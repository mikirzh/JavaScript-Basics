"use strict"

/*
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/


unction getSum (a, b) {
	return a + b;
}

function getSub (a, b) {
	return a - b;
}

function getDiv (a, b) {
	return a / b;
}

function getMul (a, b) {
	return a * b;
}

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case "+":
		return getSum(arg1, arg2);
		case "-":
		return getSub(arg1, arg2);
		case "/":
		return getDiv(arg1, arg2);
		case "*":
		return getMul(arg1, arg2);
	}
}