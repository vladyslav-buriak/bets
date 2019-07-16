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
		document.querySelector('.btn-reg').classList.remove('disabled');
	} else {
		document.querySelector('.btn-reg').classList.add('disabled');
	}
}
////////////
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

// форма регистрации слушатель
console.log('before-script');
document.querySelector('#form-reg').addEventListener((event)=>{
	event.preventDeafault();
	console.log('test');

})


////////////////////
console.log('test');
setTimeout(()=>{
	console.log('start')
	particlesJS.load('particles-js', 'json/particles.json', function() {
		console.log('callback - particles.js config loaded');
	  });
},2000)


