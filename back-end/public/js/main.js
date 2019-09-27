// модальные окна регистрация, обертка 

document.querySelectorAll('.login__reg').forEach(function (element) {
	element.onclick = showRegWindow;
})

document.querySelectorAll('.close').forEach(function (element) {
	element.onclick = closeRegWindow;
})

document.querySelectorAll('.wrap-registr').forEach(function (element) {
	element.onclick = closeRegWindow;
})

function showRegWindow() {
	let windowId = this.dataset.reg;
	document.querySelector(windowId).classList.remove('hide');
	document.onkeydown = function (event) {
		if (event.keyCode == 27) {
			closeRegWindow();
		}
		console.log(event);
		document.onkeydown = null;
	}
}

function closeRegWindow() {
	document.querySelectorAll('.wrap-registr').forEach(function (element) {
		element.classList.add('hide');
		document.onkeydown = null;
	})
}

// модальное окно обертка вход

document.querySelectorAll('.login__enter').forEach(function (element) {
	element.onclick = showLoginWindow;
})

function showLoginWindow() {
	console.log(111);
	let modalId = this.dataset.login;
	document.querySelector(modalId).classList.remove('hide')
	document.onkeydown = function (event) {
		if (event.keyCode == 27) {
			closeRegWindow();
		}
		console.log(event);
		document.onkeydown = null;
	}

}

// модальные окна стоп пропагейшн

document.querySelectorAll('.modal-stop').forEach(function (element) {
	element.onclick = freeClick;
})

function freeClick(event) {
	event.stopPropagation();
}

//////////  модальное окно форма-слайдер-правила!

document.querySelector('.agree__rules').onclick = readRules;
let left = 0;

function readRules() {

	let div = document.querySelector('.modal-registr');
	div.style.marginLeft = left - 400 + 'px';
	console.log()
}
document.querySelector('.go__back').onclick = goBack;

function goBack() {
	let div = document.querySelector('.modal-registr');
	div.style.marginLeft = left;
}

//  активная не активная кнопка регистрации

document.querySelector('#input__checkbox').onchange = agree;

function agree() {
	if (this.checked) {
		const btn = document.querySelector('.btn-reg')
		btn.classList.remove('disabled');
		btn.disabled = false;
	} else {
		document.querySelector('.btn-reg').classList.add('disabled');
	}
}


// по нажатию на кружок №1-№2-№3-№4 срабатывает
// событие онклик и выводит нам нужный слайд
// с лозунгами компании

let circles = document.querySelectorAll('.circle');

for (let i = 0; i < circles.length; i++) {

	circles[0].onclick = () => {

		let service = document.querySelectorAll('.section-service');

		for (let j = 0; j < service.length; j++) {
			service[1].classList.add('hide');
			service[2].classList.add('hide');
			service[3].classList.add('hide');
			service[0].classList.remove('hide');
		}

	}

	circles[1].onclick = () => {

		let service = document.querySelectorAll('.section-service');

		for (let j = 0; j < service.length; j++) {
			service[1].classList.remove('hide');
			service[2].classList.add('hide');
			service[3].classList.add('hide');
			service[0].classList.add('hide');
		}
	}

	circles[2].onclick = () => {

		let service = document.querySelectorAll('.section-service');

		for (let j = 0; j < service.length; j++) {
			service[1].classList.add('hide');
			service[2].classList.remove('hide');
			service[3].classList.add('hide');
			service[0].classList.add('hide');
		}
	}

	circles[3].onclick = () => {

		let service = document.querySelectorAll('.section-service');

		for (let j = 0; j < service.length; j++) {
			service[1].classList.add('hide');
			service[2].classList.add('hide');
			service[3].classList.remove('hide');
			service[0].classList.add('hide');
		}
	}
}


// слайдер///////

let blocks = document.querySelectorAll('.slider-rewiev');
let current = 0;

function slider() {
	for (let i = 0; i < blocks.length; i++) {
		blocks[i].classList.add('opacity0');
	}
	blocks[current].classList.remove('opacity0');
}

slider();
document.querySelector('.slider-left').onclick = function () {
	if (current - 1 == -1) {
		current = blocks.length - 1;
	} else {
		current--;
	}
	slider();
}
document.querySelector('.slider-right').onclick = function () {
	if (current + 1 == blocks.length) {
		current = 0
	} else {
		current++;
	}
	slider();
}

// функция вопросы ответы

// в переменную down ложим высоту на которую будет выдвигаться див
// сощдаем пустой массив

// запускаем цикл форИч берем в него все стрелочки
// которые по клику будут выдвигать вниз див

// берем все нижнии дивы в фор
// пушим их в массив

// даем стрелочкам которые будут двигать вниз дивы атрибут датаСет = i
// евент таргетом каждый div двигаем 
// вниз по значению в переменной  down

let down = 87;
let askData = [];

document.querySelectorAll('.arrow-right').forEach(function (element) {

	element.onclick = (event) => {

		let ask = document.querySelectorAll('.low-ask');

		for (let i = 0; i < ask.length; i++) {
			askData.push(ask[i])
		}
		askData[event.target.dataset.i].style.top = down + 'px';
	}
})

////////////////

const form = document.querySelector('#form-reg');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	let name = document.querySelector('.input__login').value;
	let pass = document.querySelector('.input__pass').value;
	let email = document.querySelector('.input__email').value;


	if (email.length <= 4 || email.length > 20) {
		alert('Длина логина должна составлять от 4');

		return false;
	}

	if (parseInt(email.slice(0, 1))) {
		alert('логин должен начинаться с буквы')

		return false;
	}



	// проверка логина при регистрации модальное окно///

	// if (name.length <= 3 || name.length > 20) {
	// 	alert('Длина логина от 4 до 20 символов');
	// 	return false;
	// }

	// if (parseInt(name.substr(0, 1))) {
	// 	alert('Логин должен начинаться с буквы');
	// 	return false;
	// }
	// for (let i = 0; i < name.length; i++) {

	// 	if (/^[a-zA-Z1-9]+$/.test(name) === false) {
	// 		alert('Вы ввели запрещенный символ!')
	// 		return true;
	// 	}
	// }
	// if (pass.length <= 5 || pass.length > 20) {
	// 	alert('Длина пароля от 6 до 20 символов');
	// 	return false;
	// }
	// for (let i = 0; i < pass.length; i++) {
	// 	console.log(pass[i], /^[a-zA-Z1-9]+$/.test(pass[i]));
	// 	if (/^[a-zA-Z1-9]+$/.test(pass) === false) {
	// 		alert('Вы ввели запрещенный символ!')
	// 		return true;
	// 	}
	// }
	const options = {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, cors, *same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrer: 'no-referrer', // no-referrer, *client
		body: JSON.stringify({
			name,
			pass,
			email
		}), // тип данных в body должен соответвовать значению заголовка "Content-Type"
	}
	fetch('/api/register', options).then((response) => {
		return response.json()
	}).then((result) => {
		if (result.ok) chips('Регистрация успешна');;
		console.log(result);
		if (!result.ok) chips(result.message);
		console.log(result);
	}).catch((error) => {
		console.log(error)
	});
})

/////форма вход

const formLogin = document.querySelector('#form-login');
console.log(formLogin);
formLogin.addEventListener('submit', (event) => {
	event.preventDefault();
	let name = document.querySelector('.login__name').value;
	let pass = document.querySelector('.login__pass').value;
	const options = {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, cors, *same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrer: 'no-referrer', // no-referrer, *client
		body: JSON.stringify({
			name,
			pass
		}), // тип данных в body должен соответвовать значению заголовка "Content-Type"
	}
	fetch('/api/auth', options).then((response) => {
		return response.json()
	}).then((result) => {
		console.log(result);
		if (!result.ok) chips(result.message);
		if (result.ok) {
			chips('Вход успешен');
			setCookie('token', result.token, 1);
			location.href = 'welcome';
		}
	}).catch((error) => {
		console.log(error)
	});
})

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// всплывающие чипсы окно при регистрации

function chips(slovo, chipsTime = 3000) {

	let chips = document.createElement('div');
	chips.classList.add('chips');
	chips.textContent = slovo;
	addChips(chips);
	setTimeout(function () {
		deleteChips(chips)
	}, chipsTime)
}

function deleteChips(chips) {
	let wrapChips = document.querySelector('.wrap-chips');
	chips.remove();
	if (wrapChips.children.length == 0) wrapChips.remove();
}

function createWrap() {
	let wrapChips = document.createElement('div');
	wrapChips.classList.add('wrap-chips');
	document.querySelector('body').appendChild(wrapChips);
	return wrapChips;
}

function addChips(chips) {
	let wrapChips = document.querySelector('.wrap-chips');
	if (wrapChips) wrapChips.appendChild(chips);
	else createWrap().appendChild(chips);
}

////////////////////

document.querySelector('.input__login').onkeypress = loginSymbols;
document.querySelector('.input__email').onkeypress = loginSymbols;
document.querySelector('.input__pass').onkeypress = loginSymbols;



function loginSymbols(e) {
	console.log(e);
	if ((e.keyCode < 97 || e.keyCode > 122) && e.key != '@' && (e.keyCode < 46 || e.keyCode > 57)) {
		alert('недопустимые символы');
		console.log(e.keyCode);
		return false;
	}

	else {
		return true;
	}
}
