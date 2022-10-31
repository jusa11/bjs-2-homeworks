/* Задача № 1 */
function parseCount(parseValue) {
	let parse = parseInt(parseValue)
	if (isNaN(parse)) {
		const error = new Error("Невалидное значение");
		throw error;
	}
	return parse;
}

function validateCount(parseValue) {
	try {
		let parse = parseCount(parseValue);
		if (parse) {
			return parse;
		}
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
		if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	// периметр
	getPerimeter() {
		let P = this.a + this.b + this.c;
		this.P = P;
		return this.P;
	}
	// Площадь
	getArea() {
		let p = this.P * 0.5;
		let S = +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
		this.S = S;
		return this.S;
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
