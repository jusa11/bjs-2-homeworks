class AlarmClock {
	constructor() {
		this.alarmCollection = [];   // коллекция звонков 
		this.timerId = null;
	}

	// добавляет новый звонок в коллекцию существующих
	addClock(time, callback, id) {
		try {
			if (!id) {
				throw new Error("Не передан идентификатор");
			}
		} catch (error) {
			return error;
		}
		if (this.alarmCollection.some(clock => clock.id === id)) {
			console.error('Такой будильник уже есть');
			return
		}
		this.alarmCollection.push({ id, time, callback });
	}

	//  удаляет определённый звонок.
	removeClock(id) {
		const currentAlarmCollectionLenght = this.alarmCollection.length;
		this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
		return currentAlarmCollectionLenght !== this.alarmCollection.length;
	}

	// возвращает текущее время в строковом формате HH:MM
	getCurrentFormattedTime() {
		let currentTime = new Date();
		const hours = currentTime.getHours() < 10 ? `0${currentTime.getHours()}` : `${currentTime.getHours()}`;
    	const minutes = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : `${currentTime.getMinutes()}`;

		return `${hours}:${minutes}`;
	}

	// запускает звонки
	start() {
		if (this.timerId) {
			return
		}
		
		this.timerId = setInterval(() => {
			this.alarmCollection.forEach(alarm => {
				if (this.getCurrentFormattedTime() === alarm.time) {
					return alarm.callback();
				}
			});
		}, 1000);
		
	}

	// останавливает выполнение всех звонков
	stop() {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

	// печатает все звонки
	printAlarms() {
		this.alarmCollection.forEach(item => console.log("Id будильника: " + item.id, "Время звонка: " + item.time));
	}

	//  удаляет все звонки
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}