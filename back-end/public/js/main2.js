
// выбор подписки месяц неделя

let radioValue = 'week';
let p = document.querySelector('.form-subscrip__price');
p.textContent = '8 200 рублей';

document.querySelectorAll('.radio').forEach(function (element) {
	element.onclick = checkPrice;
})

function variants() {
	[
		['week', '8 200 рублей'],
		['mounth', '25 500 рублей'],
	].forEach(function (element) {
		if (radioValue == element[0]) {
			p.textContent = element[1];
		}
	})
}

function checkPrice() {
	radioValue = this.value;
	variants();
}



/// функция калькулятор ввод в инпуте
// берем событие онинпут и умножаем
// значение инпута на значение из списка опшинов на их значение
// и выводим в параграф

document.querySelector('input[type="number"]').oninput = function () {

	let select = document.querySelector('#select__rate').value;
	let p = document.querySelector('.your-rate__text');

	p.textContent = this.value * Math.round(select);

	if (this.value <= 0 || this.value.length > 6) {
		this.value = this.value.slice(0, 0);
		p.textContent = this.value;
		return false;
	}
}

// по селекту происходит событие ончендж
// при выбори нужного тарифа
// умножаем значение опшина на значение инпута
// выводим в параграф

document.querySelector('#select__rate').onchange = function () {

	let input = document.querySelector('input[type="number"]').value;
	let p = document.querySelector('.profit__text');

	p.textContent = input * Math.round(this.value);
}


$(".burger").click(function () {
	$(".burger , .menu").toggleClass('active');
	$("body").toggleClass('lock');
});