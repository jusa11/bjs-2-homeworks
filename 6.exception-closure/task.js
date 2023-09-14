/* Задача № 1 */
function parseCount(parseValue) {
	let parse = parseInt(parseValue)
	if (isNaN(parse)) {
		throw new Error("Невалидное значение");
	}
	return parse;
}

function validateCount(parseValue) {
	try {
		return parseCount(parseValue);
	} catch (error) {
		return error;
	}
}


/* Задача № 2 */
class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.P = null;
		this.S = null;
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	// периметр
	getPerimeter() {
		return this.P = this.a + this.b + this.c;
	}
	// Площадь
	getArea() {
		const p = this.getPerimeter() * 0.5;
		return this.S = +(Math.sqrt(p  * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
	}
	
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	}catch(error) {
		return {
			getPerimeter() { 
				return "Ошибка! Треугольник не существует"
			},
			getArea() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
}

getTriangle(1,3,100);