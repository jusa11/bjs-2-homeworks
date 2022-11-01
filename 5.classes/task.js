/* Задача № 1 */
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		return this.state *= 1.5
	}

	set state(newState) {
		if (newState === 0) {
			this._state = 0;
		}
		else if (newState > 100) {
			this._state = 100;
		}
		else {
			this._state = newState;
		}
	}
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

/* Задача № 2 */
class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let book = this.books.find((book) => book[type] === value);
		return book || null;
	}

	giveBookByName(bookName) {
		let book = this.books.find((book) => book.name === bookName);
		if (book) {
			let i = this.books.indexOf(book)
			this.books.splice(i, 1);
		}
		return book || null;
	}

};


/* 3 задача */
class Subjects {
	constructor(name) {
		this.name = name;
		this.mark = [];
		this.averageMark = null;
	}
}

class Student {
	constructor(name, gender, age) {
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.Subjects = [];
		this.totalAverageMarks = 0;
	}

	// добавление предметов
	addSubjects(subject) {
		this.Subjects.push(subject);
	}

	// добавление оценок
	addMark(mark, subjectName) {
		let Subject = this.Subjects.find((Subject) => Subject.name === subjectName);
		if (Subject) {
			if (mark < 1 || mark > 5) {
				console.log('Ошибка: Неверное значение выставляемой оценки. Оценка должна быть от 1 до 5');
			}
			else {
				Subject.mark.push(mark);
			}
		}
		// Если такого предмета нет в журнале, то добавить его и выставить оценку
		else {
			this.addSubjects(new Subjects(subjectName));
			let Subject = this.Subjects.find((Subject) => Subject.name === subjectName);
			Subject.mark.push(mark);
		}
		return Subject;
	}

	// расчет среднего арифметического оценок студента
	getAverageBySubject(subjectName) {
		let Average;
		let Subject = this.Subjects.find((Subject) => Subject.name === subjectName);
		if (Subject) {
			Subject.mark.reduce((acc, item, index, arr) => {
				acc += item;
				if (index === arr.length - 1) {
					Average = acc / arr.length;
					Subject.averageMark = Average;
				}
				return acc;
			}, 0)
		}
		else {
			console.log('Несуществующий предмет');
		}
		return Average;
	}

	// подсчёт общей средней оценки
	getAverage() {
		let result;
		let acc = 0;
		for (let i = 0; i < this.Subjects.length; i++) {
			this.getAverageBySubject(this.Subjects[i].name);
			acc = this.Subjects[i].averageMark + acc;
		}
		result = acc / this.Subjects.length;
		this.totalAverageMarks = +result.toFixed(2);
		return this.totalAverageMarks
	}

	// отчисление студента
	exclude(reason) {
		delete this.Subjects;
		this.excluded = reason;
	}
}

