// выбор подписки месяц неделя
let radioValue = 'week';
let p = document.querySelector('.sub__price');
document.querySelectorAll('.input__sub').forEach(function (element) {
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
var button = document.querySelector('.btn-sub');
var checkmark = document.querySelector('svg');
var className = "animate";
button.addEventListener('click', function () {
	if (!checkmark.classList.contains(className)) {
		checkmark.classList.add(className);
		setTimeout(function () {
			checkmark.classList.remove(className);
		}, 1000);
	}
});
// он инпут ончендж калькулятор
document.querySelector('.input__earn').oninput = plusInput;
document.querySelector('#select__rate').onchange = plusSelect;
let select = document.querySelector('#select__rate');

function plusInput() {
	let resultRate = document.querySelector('.profit__rate');
	resultRate.textContent = this.value * select.value;
}

function plusSelect() {
	let resultRate = document.querySelector('.profit__rate');
	resultRate.textContent = this.value * select.value;
}


// смотреть статистику ремув дисплей нон
document.querySelector('.arrow-top').onclick = function () {
	let table = document.querySelector('.table');
	table.classList.remove('table-opacity0');
}
document.querySelector('.up').onclick = function () {
	let table = document.querySelector('.table');
	table.classList.add('table-opacity0');
}