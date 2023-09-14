'use strict'
function solveEquation(a, b, c) {
	let d = Math.pow(b, 2) - 4 * a * c
	if (d < 0) {
		return []
	}
	if (d === 0) {
		let x = -b / 2 * a
		return [x]
	}
	if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a)
		let x2 = (-b - Math.sqrt(d)) / (2 * a)
		return [x1, x2]
	}
}

function calculateTotalMortgage(percent, contribution, amount, date) {


	if (typeof percent === 'string' || typeof contribution === 'string' || typeof amount === 'string') {
		return console.log(`Параметр ${'percent'} содержит неправильное значение ${percent}`) 
	}

	//  тело кредита
	const S = amount - contribution

	// срок кредита
	const currentDate = new Date()
	const n = ((date.getFullYear() - currentDate.getFullYear()) * 12) - (date.getMonth() - currentDate.getMonth())

	// ежемесячный платеж
	const P = percent / 100 / 12
	const monthlyPayment = S * (P + (P / (((1 + P) ** n) - 1)))

	// общая сумма кредита
	const totalPayment = monthlyPayment * n
	console.log(totalPayment.toFixed(2))
}


