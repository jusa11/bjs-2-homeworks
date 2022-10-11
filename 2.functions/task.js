// Задание 1
function getArrayParams(arr) {
	let min, max, sum, avg;
	min = Infinity;
	max = -Infinity;
	sum = 0;

	// поиск минимального и максимального элемента в массиве
	for (let i = 0; i < arr.length; i++) {
		sum = arr[i] + sum;
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}

	// расчет среднего арифметического значения
	avg = +(sum / arr.length).toFixed(2);

	return { min: min, max: max, avg: avg };
}


// Задание 2

/* насадка */
function worker(arr) {
	let sum = 0;

	// расчет суммы всех элементов в массиве
	for (let i = 0; i < arr.length; i++) {
		sum = arr[i] + sum;
	}
	return sum;
}

/* мясорубка */
function makeWork(arrOfArr, func) {
	let max = 0;

	// поиск "самого жирного" куска мяса 
	for (let i = 0; i < arrOfArr.length; i++) {
		if (func(arrOfArr[i]) > max) {
			max = func(arrOfArr[i])
		}
	}
	return max;
}


// Задание 3
function worker2(arr) {
	let sumMax = 0;
	let sumMin = 0;
	let difference;

	// поиск максимального значения
	for (let i = 0; i < arr.length; i++) {
		sumMax = arr[0];
		if (arr[i] > sumMax) {
			sumMax = arr[i];
		}
	}

	// поиск минимального значения
	for (let j = 0; j < arr.length; j++) {
		sumMin = arr[0];
		if (arr[j] < sumMin) {
			sumMin = arr[j];
		}
	}

	// разница значений
	difference = Math.abs(sumMax - sumMin);
	return difference;
}
