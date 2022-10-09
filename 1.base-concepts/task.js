'use strict';
function solveEquation(a, b, c) {
	let arr = [];
	// код для задачи №1 писать здесь
	let d = b ** 2 - 4 * a * c
	if (d === 0) {
		arr[0] = -b / (2 * a);
	}
	else if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);
	}
	return arr
}


function calculateTotalMortgage(percent, contribution, amount, date) {

	/* объявление перменных */
	let totalAmount;
	let S = amount - contribution; // тело кредита
	let P = percent / 12 / 100; //  1/12 процентной ставки
	let now = new Date(); // сегоднящняя дата 

	/* Проверка на число */
	if (!isFinite(percent)) {
		return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
	}
	if (!isFinite(contribution)) {
		totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
		return totalAmount;
	}
	if (!isFinite(amount)) {
		totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
		return totalAmount;
	}

	/* проверка на дату */
	if (date.getFullYear() <= now.getFullYear()) {
		totalAmount = 'Параметр "Срок ипотеки" не может меньше чем 1 месяц';
		return totalAmount;
	}

	/* Расчет количества месяцев */
	let n = ((date.getFullYear() - now.getFullYear()) * 12)
		- ((12 - date.getMonth()) - (12 - now.getMonth()));

	/* Расчет ежемесячного платежа */
	let payment = S * (P + (P / (((1 + P) ** n) - 1)));

	/* Вывод общей стоимости ипотеки */
	totalAmount = +(payment * n).toFixed(2);
	return totalAmount;
}

