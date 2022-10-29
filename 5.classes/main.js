/* Задача № 1 */
const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

/* Задача № 2 */
const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

/* Задача № 3 */
const student = new Student("Олег Никифоров", 'man', 25);
console.log(student)
student.addMark(5, "algebra");
student.addMark(2, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(3, "history");
student.addMark(4, "history");
student.addMark(2, "geography");
student.addMark(7, "geography"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("algebra");
student.getAverageBySubject("history");
student.getAverageBySubject("geography");
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 


const student2 = new Student("Иван Иванов", 'man', 24);
console.log(student2)
student2.addMark(5, "algebra");
student2.addMark(5, "algebra");
student2.addMark(5, "geometry");
student2.addMark(4, "geometry");
student2.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student2.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student2.getAverageBySubject("biology"); // Несуществующий предмет
student2.getAverage(); // Средний балл по всем предметам 4.75
student2.exclude("Исключен за попытку подделать оценки");
