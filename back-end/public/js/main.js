// canvas
let canvas = document.querySelector('.c1')
let ctx = canvas.getContext('2d');
ctx.strokeStyle = '#40c4ff';
ctx.moveTo(90, 5);
ctx.lineTo(285, 5);
ctx.lineWidth = '5'
ctx.stroke();
//
// модальные окна регистрация, обертка 
document.querySelectorAll('.login__reg').forEach(function(element) {
	element.onclick = showRegWindow;
})
document.querySelectorAll('.close').forEach(function(element) {
	element.onclick = closeRegWindow;
})
document.querySelectorAll('.wrap-registr').forEach(function(element) {
	element.onclick = closeRegWindow;
})

function showRegWindow() {
	let windowId = this.dataset.reg;
	document.querySelector(windowId).classList.remove('hide');
	document.onkeydown = function(event) {
		if (event.keyCode == 27) {
			closeRegWindow();
		}
		console.log(event);
		document.onkeydown = null;
	}
}

function closeRegWindow() {
	document.querySelectorAll('.wrap-registr').forEach(function(element) {
		element.classList.add('hide');
		document.onkeydown = null;
	})
}
// модальное окно обертка вход
document.querySelectorAll('.login__enter').forEach(function(element) {
	element.onclick = showLoginWindow;
})

function showLoginWindow() {
	let modalId = this.dataset.login;
	document.querySelector(modalId).classList.remove('hide')
	document.onkeydown = function(event) {
		if (event.keyCode == 27) {
			closeRegWindow();
		}
		console.log(event);
		document.onkeydown = null;
	}
}
// модальные окна стоп пропагейшн
document.querySelectorAll('.modal-stop').forEach(function(element) {
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
document.querySelector('.input__checkbox').onchange = agree;

function agree() {
	if (this.checked) {
		const btn = document.querySelector('.btn-reg')
		btn.classList.remove('disabled');
		btn.disabled = false;
	} else {
		document.querySelector('.btn-reg').classList.add('disabled');
	}
}
// слайдер///////
let blocks = document.querySelectorAll('.slider-rewiev');
let current = 0;
// document.querySelector('.slider-wrap').onclick = f1;
function slider() {
	for (let i = 0; i < blocks.length; i++) {
		blocks[i].classList.add('opacity0');
	}
	blocks[current].classList.remove('opacity0');
}
slider();
document.querySelector('.slider-left').onclick = function() {
	if (current - 1 == -1) {
		current = blocks.length - 1;
	} else {
		current--;
	}
	slider();
}
document.querySelector('.slider-right').onclick = function() {
	if (current + 1 == blocks.length) {
		current = 0
	} else {
		current++;
	}
	slider();
}
/////////////////////////главный слайдер
let pictures = document.querySelectorAll('.bg');
let data = [];
let step = 0;
let offset = 0;

function innit() {
	for (let i = 0; i < pictures.length; i++) {
		data[i] = pictures[i].className;
		pictures[i].remove();
	}
}
innit();

function draw() {
	let img = document.createElement('img');
	img.className = data[step];
	img.classList.add('bg');
	img.style.left = offset * 1170 + 'px';
	document.querySelector('.header-slider > .container').appendChild(img);
	if (step + 1 == data.length) {
		step = 0;
	} else {
		step++;
	}
	offset = 1;
}

function imgLeft() {
	let pictures2 = document.querySelectorAll('.bg');
	let offset2 = 0;
	for (let i = 0; i < pictures2.length; i++) {
		pictures2[i].style.left = offset2 * 1170 - 1170 + 'px';
		offset2++;
	}
	setTimeout(function() {
		draw();
		pictures2[0].remove();
	}, 4000)
}
draw();
draw();
setInterval(function() {
	imgLeft();
}, 10000)
// выпадающии ответы
document.querySelector('.arrow__ask').onclick = readAsk;
document.querySelector('.low__ask').onclick = closeAsk;
let down = 0;

function readAsk() {
	let askBlock = document.querySelector('.low-ask');
	askBlock.style.marginTop = down + 70 + 'px';
}

function closeAsk() {
	let divAsk = document.querySelector('.low-ask');
	divAsk.style.marginTop = down + 'px';
}
//////2
document.querySelector('.arrow__second').onclick = readAsk2;
document.querySelector('.low__second').onclick = closeAsk2;

function readAsk2() {
	let divAsk = document.querySelector('.low-second');
	divAsk.style.marginTop = down + 70 + 'px';
}

function closeAsk2() {
	let divAsk = document.querySelector('.low-second');
	divAsk.style.marginTop = down + 'px';
}
//////3
document.querySelector('.arrow__third').onclick = readAsk3;
document.querySelector('.low__third').onclick = closeAsk3;

function readAsk3() {
	let divAsk = document.querySelector('.low-third');
	divAsk.style.marginTop = down + 70 + 'px';
}

function closeAsk3() {
	let divAsk = document.querySelector('.low-third');
	divAsk.style.marginTop = down + 'px';
}
//////4
document.querySelector('.arrow__fourth').onclick = readAsk4;
document.querySelector('.low__fourth').onclick = closeAsk4;

function readAsk4() {
	let divAsk = document.querySelector('.low-fourth');
	divAsk.style.marginTop = down + 70 + 'px';
}

function closeAsk4() {
	let divAsk = document.querySelector('.low-fourth');
	divAsk.style.marginTop = down + 'px';
}
////////////////
const form = document.querySelector('#form-reg');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	let name = document.querySelector('.input__login').value;
	let pass = document.querySelector('.input__pass').value;
	let email = document.querySelector('.input__email').value;
	// проверка логина при регистрации модальное окно///
	if (name.length <= 3 || name.length > 20) {
		alert('Длина логина от 4 до 20 символов');
		return false;
	}
	if (parseInt(name.substr(0, 1))) {
		alert('Логин должен начинаться с буквы');
		return false;
	}
	for (let i = 0; i < name.length; i++) {
		
		if (/^[a-zA-Z1-9]+$/.test(name) === false) {
			alert('Вы ввели запрещенный символ!')
			return true;
		}
	}
	if (pass.length <= 5 || pass.length > 20) {
		alert('Длина пароля от 6 до 20 символов');
		return false;
	}
	for (let i = 0; i < pass.length; i++) {
		console.log(pass[i], /^[a-zA-Z1-9]+$/.test(pass[i]));
		if (/^[a-zA-Z1-9]+$/.test(pass) === false) {
			alert('Вы ввели запрещенный символ!')
			return true;
		}
	}
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
	let pass = document.querySelector('.login__pass').value;
	let email = document.querySelector('.login__email').value;
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
			pass,
			email
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
	// document.querySelector('.modal-wrap').appendChild(chips);
	chips.textContent = slovo;
	addChips(chips);
	setTimeout(function() {
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
console.log('test');
setTimeout(()=>{
	console.log('start')
	particlesJS.load('particles-js', 'json/particles.json', function() {
		console.log('callback - particles.js config loaded');
	  });
},2000)