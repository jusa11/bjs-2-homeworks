function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = args.join(',');
		const objCache = cache.find((item) => item.hash === hash);

		if (objCache) {
			console.log("Из кэша: " + objCache.result);
			return "Из кэша: " + objCache.result;
		}

		const result = func(...args);
		cache.push({ hash, result });
		if (cache.length > 5) {
			cache.shift();
		}
		console.log("Вычисляем:  " + result);
		return "Вычисляем: " + result;
	}
	return wrapper;
}



function debounceDecoratorNew(func, delay) {
	let timeoutId = null;
	wrapper.count = 0;
	wrapper.allCount = 0;

	function wrapper(...args) {
		wrapper.allCount++; 
		if (!timeoutId) {
			func(...args);
			wrapper.count++;
		}
		clearTimeout(timeoutId);
	
		timeoutId = setTimeout(() => {
			wrapper.count++;
			func(...args);
		}, delay);
	}
	return wrapper;
}