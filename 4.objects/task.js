// функция-конструктор
function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
}

// создание нескольких объектов функции-коструктора Student
new Student('Артем', 'male', 26);
new Student('Соня', 'female', 25);

// создание поле предмета
Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

// добаление оценок студенту 
Student.prototype.addMark = function (mark) {
	if (this.marks === undefined) {
		// добавить первую оценку
		this.marks = [mark];
	} else {
		// добавить вторую и последующие оценки в массив
		this.marks.push(mark)
	}
}

// добавление сразу нескольких оценок
Student.prototype.addMarks = function (...args) {
	if (this.marks === null) {
		this.marks = args;
	} else {
		this.marks.push(args)
	}
}

// расчет среднего арифметического оценок студента
Student.prototype.getAverage = function () {
	return this.marks.reduce((acc, item, index, arr) => {
		acc += item;
		if (index === arr.length - 1) {
			return acc / arr.length;
		}
		return acc;
	}, 0)
}

// отчисление студента
Student.prototype.exclude = function (reason) {
	delete this.marks && delete this.subject;
	this.excluded = reason;
}
