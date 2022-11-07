// тут вы можете вызывать функции из task.js


const alClock = new AlarmClock();
alClock.addClock("00:48", () => console.log("Пора вставать"), 1);
alClock.addClock("00:49", () => { console.log("Давай вставай уже"); alClock.removeClock(2) }, 2);
alClock.addClock("00:49", () => console.log("Иди умываться")); // id не передан
alClock.addClock("00:50", () => {
	console.log("Вставай, а то проспишь");
	alClock.stop();
	alClock.clearAlarms();
	alClock.printAlarms();
}, 3);
alClock.addClock("00:26", () => console.log("Пора вставать"), 1); // такой будильник уже есть
alClock.printAlarms();
alClock.start();










