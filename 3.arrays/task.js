function compareArrays(arr1, arr2) {
	let result;
	if (arr1.length === arr2.length) {
		result = arr1.every((item, index) => item === arr2[index])
	}
	else {
		return false
	}
	return result; // boolean
}

function advancedFilter(arr) {
	return resultArr = arr.filter(number => number > 0).filter(number => number % 3 === 0).map(number =>
		number * 10); // array
}
