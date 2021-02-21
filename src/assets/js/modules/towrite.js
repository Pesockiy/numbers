//writing text on labels
export const writingText = item => {
	return function () {

		let itemVal = item.getAttribute('data-name'),
			counter = 0;

		if (item.classList.contains('active')) return;

		if (oldItem.classList.contains('active')) {
			oldItem.classList.remove('active');
		};

		item.classList.add('active');
		item.textContent = '';

		if (timer) {
			clearTimeout(timer);
			oldItem.textContent = oldItem.getAttribute('data-name');
		}

		(function () {

			if (counter < itemVal.length) {

				item.textContent += itemVal[counter];
				counter++;
				timer = setTimeout(arguments.callee, 50);

			};
		})();

		oldItem = item;

	};
};
