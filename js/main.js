const elStartBtn = document.querySelector('.start-btn');
const elHedding = document.querySelector('.hedding');
const elSelLevel = document.querySelector('.select-level');
const elSelTime = document.querySelector('.select-time');
const elTitle = document.querySelector('.title');
const elList = document.querySelector('.js-list');
const elCount = document.querySelector('.count');
const elTime = document.querySelector('.time');
const elAudioCorrect = document.querySelector('.answer');
const elAudioIncorrect = document.querySelector('.error');
const elAudioGameOver = document.querySelector('.game-over');
const elContent = document.querySelector('.content');
const elGameContent = document.querySelector('.game-content');
const elWinner = document.querySelector('.winner');

let newArray = [];
let count = 0;
let time = 0;

function render(arr, node) {
	elContent.style.display = 'none';
	node.innerHTML = '';
	elCount.textContent = `Count: ${count}`;
	arr.forEach((item) => {
		node.innerHTML += `
    <li class="item" data-id="${item.id}">
      <img class="item-img" src="${item.arrayImg}" alt="Belgi" width="80" height="120">
    </li>
    `;
	});
}

function renderTitle(arr, node) {
	arr.forEach((item) => {
		let data = arr[Math.floor(Math.random() * arr.length)];
		node.setAttribute('data-id', data.id);
		node.textContent = data.name;
	});
}

elStartBtn.addEventListener('click', function () {
	if (elSelLevel.value == 'Easy') {
		for (i = 0; i < 20; i++) {
			let includItem = array[Math.floor(Math.random() * array.length)];
			if (newArray.includes(includItem)) {
				i--;
			} else {
				newArray.push(includItem);
			}
		}
		render(newArray, elList);
		renderTitle(newArray, elTitle);
	}

	if (elSelLevel.value == 'Medium') {
		for (i = 0; i < 30; i++) {
			let includItem = array[Math.floor(Math.random() * array.length)];
			if (newArray.includes(includItem)) {
				i--;
			} else {
				newArray.push(includItem);
			}
		}
		render(newArray, elList);
		renderTitle(newArray, elTitle);
	}

	if (elSelLevel.value == 'Hard') {
		for (i = 0; i < 40; i++) {
			let includItem = array[Math.floor(Math.random() * array.length)];
			if (newArray.includes(includItem)) {
				i--;
			} else {
				newArray.push(includItem);
			}
		}
		render(newArray, elList);
		renderTitle(newArray, elTitle);
	}

	if (elSelTime.value == '1min') {
		elTime.textContent = '01:00';
		time = 59;
		let gameTime = setInterval(() => {
			elTime.textContent = `00:${time--}`;
		}, 1000);

		setTimeout(() => {
			clearInterval(gameTime);
			time = 9;
			let timeTen = setInterval(() => {
				elTime.textContent = `00:0${time--}`;
			}, 1000);

			setTimeout(() => {
				clearInterval(timeTen);
			}, 10 * 1000);
		}, 50 * 1000);

		if (newArray.length) {
			setTimeout(() => {
				elGameContent.style.display = 'none';
				elHedding.style.display = 'block';
				elHedding.textContent = `Your score ${count}`;
				document.body.style.backgroundImage = `url('../images/Game-over.webp')`;
				elAudioGameOver.play();
				setTimeout(() => {
					window.location.reload();
				}, 5000);
			}, 62 * 1000);
		}
	}

	if (elSelTime.value == '3min') {
		elTime.textContent = '03:00';
		time = 59;
		let timeOne = setInterval(() => {
			elTime.textContent = `02:${time--}`;
		}, 1000);

		setTimeout(() => {
			clearInterval(timeOne);
			time = 9;
			let timeTen = setInterval(() => {
				elTime.textContent = `02:0${time--}`;
			}, 1000);

			setTimeout(() => {
				clearInterval(timeTen);
			}, 10 * 1000);
		}, 50 * 1000);

		setTimeout(() => {
			time = 59;
			elTime.textContent = `01:${time}`;
			let timeTwo = setInterval(() => {
				elTime.textContent = `01:${time--}`;
			}, 1000);

			setTimeout(() => {
				clearInterval(timeTwo);
				time = 9;
				let timeTen = setInterval(() => {
					elTime.textContent = `01:0${time--}`;
				}, 1000);

				setTimeout(() => {
					clearInterval(timeTen);
				}, 10 * 1000);
			}, 50 * 1000);
		}, 61 * 1000);

		setTimeout(() => {
			time = 59;
			elTime.textContent = `00:${time}`;
			let timeThree = setInterval(() => {
				elTime.textContent = `00:${time--}`;
			}, 1000);
			setTimeout(() => {
				clearInterval(timeThree);
				time = 9;
				let timeTen = setInterval(() => {
					elTime.textContent = `00:0${time--}`;
				}, 1000);

				setTimeout(() => {
					clearInterval(timeTen);
				}, 10 * 1000);
			}, 50 * 1000);
		}, 122 * 1000);

		if (newArray.length) {
			setTimeout(() => {
				elGameContent.style.display = 'none';
				elHedding.style.display = 'block';
				elHedding.textContent = `Your score ${count}`;
				document.body.style.backgroundImage = `url('../images/Game-over.webp')`;
				elAudioGameOver.play();
				setTimeout(() => {
					window.location.reload();
				}, 5000);
			}, 184 * 1000);
		}
	}
	if (elSelTime.value == '5min') {
		elTime.textContent = '05:00';
		time = 59;
		let timeOne = setInterval(() => {
			elTime.textContent = `04:${time--}`;
		}, 1000);

		setTimeout(() => {
			clearInterval(timeOne);
			time = 9;
			let timeTen = setInterval(() => {
				elTime.textContent = `04:0${time--}`;
			}, 1000);

			setTimeout(() => {
				clearInterval(timeTen);
			}, 10 * 1000);
		}, 50 * 1000);

		setTimeout(() => {
			time = 59;
			elTime.textContent = `03:${time}`;
			let timeTwo = setInterval(() => {
				elTime.textContent = `03:${time--}`;
			}, 1000);

			setTimeout(() => {
				clearInterval(timeTwo);
				time = 9;
				let timeTen = setInterval(() => {
					elTime.textContent = `03:0${time--}`;
				}, 1000);

				setTimeout(() => {
					clearInterval(timeTen);
				}, 10 * 1000);
			}, 50 * 1000);
		}, 61 * 1000);

		setTimeout(() => {
			time = 59;
			elTime.textContent = `02:${time}`;
			let timeThree = setInterval(() => {
				elTime.textContent = `02:${time--}`;
			}, 1000);
			setTimeout(() => {
				clearInterval(timeThree);
				time = 9;
				let timeTen = setInterval(() => {
					elTime.textContent = `02:0${time--}`;
				}, 1000);

				setTimeout(() => {
					clearInterval(timeTen);
				}, 10 * 1000);
			}, 50 * 1000);
		}, 122 * 1000);

		setTimeout(() => {
			time = 59;
			elTime.textContent = `01:${time}`;
			let timeFour = setInterval(() => {
				elTime.textContent = `01:${time--}`;
			}, 1000);
			setTimeout(() => {
				clearInterval(timeFour);
				time = 9;
				let timeTen = setInterval(() => {
					elTime.textContent = `01:0${time--}`;
				}, 1000);

				setTimeout(() => {
					clearInterval(timeTen);
				}, 10 * 1000);
			}, 50 * 1000);
		}, 183 * 1000);

		setTimeout(() => {
			time = 59;
			elTime.textContent = `00:${time}`;
			let timeFive = setInterval(() => {
				elTime.textContent = `00:${time--}`;
			}, 1000);
			setTimeout(() => {
				clearInterval(timeFive);
				time = 9;
				let timeTen = setInterval(() => {
					elTime.textContent = `00:0${time--}`;
				}, 1000);

				setTimeout(() => {
					clearInterval(timeTen);
				}, 10 * 1000);
			}, 50 * 1000);
		}, 244 * 1000);

		if (newArray.length) {
			setTimeout(() => {
				elGameContent.style.display = 'none';
				elHedding.style.display = 'block';
				elHedding.textContent = `Your score ${count}`;
				document.body.style.backgroundImage = `url('../images/Game-over.webp')`;
				elAudioGameOver.play();
				setTimeout(() => {
					window.location.reload();
				}, 5000);
			}, 306 * 1000);
		}
	}
});

elList.addEventListener('click', (evt) => {
	if (evt.target.matches('.item')) {
		if (evt.target.dataset.id == elTitle.dataset.id) {
			elAudioCorrect.play();
			evt.target.style.backgroundColor = 'green';
			elCount.textContent = `Count: ${(count += 3)}`;
			setTimeout(() => {
				evt.target.style.visibility = 'hidden';
			}, 1000);
			newArray.forEach((el) => {
				if (el.id == evt.target.dataset.id) {
					let finded = newArray.findIndex((item) => item == el);
					newArray.splice(finded, 1);
					renderTitle(newArray, elTitle);
				}
			});
			if (!newArray.length) {
				setTimeout(() => {
					elGameContent.style.display = 'none';
					elHedding.style.display = 'block';
					elHedding.textContent = `Your score ${count}`;
					document.body.style.backgroundImage = `url('../images/win.jpg')`;
					elWinner.play();
					setTimeout(() => {
						window.location.reload();
					}, 5 * 1000);
				}, 1000);
			}
		} else {
			evt.target.style.backgroundColor = 'red';
			elCount.textContent = `Count: ${(count -= 1)}`;
			elAudioIncorrect.play();
		}
	}
});
