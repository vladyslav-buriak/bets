// модальные окна регистрация, обертка

document.querySelectorAll(".login__reg").forEach(function (element) {
  element.onclick = showRegWindow;
});

document.querySelectorAll(".close").forEach(function (element) {
  element.onclick = closeRegWindow;
});

document.querySelectorAll(".wrap-registr").forEach(function (element) {
  element.onclick = closeRegWindow;
});

function showRegWindow() {
  let windowId = this.dataset.reg;
  document.querySelector(windowId).classList.remove("hide");
  document.onkeydown = function (event) {
    if (event.keyCode == 27) {
      closeRegWindow();
    }
    console.log(event);
    document.onkeydown = null;
  };
}

function closeRegWindow() {
  document.querySelectorAll(".wrap-registr").forEach(function (element) {
    element.classList.add("hide");
    document.onkeydown = null;
  });
}

// модальное окно обертка вход

document.querySelectorAll(".login__enter").forEach(function (element) {
  element.onclick = showLoginWindow;
});

function showLoginWindow() {
  let modalId = this.dataset.login;
  document.querySelector(modalId).classList.remove("hide");
  document.onkeydown = function (event) {
    if (event.keyCode == 27) {
      closeRegWindow();
    }
    console.log(event);
    document.onkeydown = null;
  };
}

// модальные окна стоп пропагейшн

document.querySelectorAll(".modal-stop").forEach(function (element) {
  element.onclick = freeClick;
});

function freeClick(event) {
  event.stopPropagation();
}

// модальное окно форма-слайдер-правила!

document.querySelector(".form-modal__rules--agree").onclick = readRules;
let left = 0;

function readRules() {
  let div = document.querySelector(".modal-registr");
  div.style.marginLeft = left - 400 + "px";

  if (window.matchMedia("(max-width: 450px)").matches) {
    div.style.marginLeft = left - 300 + "px";
  }
}
document.querySelector(".modal-right__go-back").onclick = goBack;

function goBack() {
  let div = document.querySelector(".modal-registr");
  div.style.marginLeft = left;
}

//  активная не активная кнопка регистрации

document.querySelector("#input__checkbox").onchange = agree;

function agree() {
  if (this.checked) {
    const btn = document.querySelector(".btn-reg");
    btn.classList.remove("disabled");
    btn.disabled = false;
  } else {
    document.querySelector(".btn-reg").classList.add("disabled");
  }
}

// слайдер///////

$(".review-slider-wrap").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

// форма

const form = document.querySelector("#form-reg");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.querySelector("#input__login").value;
  let pass = document.querySelector("#input__pass").value;
  let email = document.querySelector("#input__email").value;

  // проверка логина при регистрации модальное окно///

  if (name.length < 6 || name.length > 20) {
    alert("Длина логина от 6 до 20 символов");
    return false;
  }

  if (parseInt(name.substr(0, 1))) {
    alert("Логин должен начинаться с буквы");
    return false;
  }
  for (let i = 0; i < name.length; i++) {
    if (/^[a-zA-Z1-9]+$/.test(name) === false) {
      alert("Вы ввели запрещенный символ!");
      return true;
    }
  }

  if (pass.length <= 5 || pass.length > 20) {
    alert("Длина пароля от 6 до 20 символов");
    return false;
  }

  for (let i = 0; i < pass.length; i++) {
    if (/^[a-zA-Z1-9]+$/.test(pass) === false) {
      alert("Вы ввели запрещенный символ!");
      return true;
    }
  }

  if (parseInt(email.slice(0, 1))) {
    alert("email должен начинаться с буквы");
    return false;
  }

  const options = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify({
      name,
      pass,
      email,
    }), // тип данных в body должен соответвовать значению заголовка "Content-Type"
  };
  fetch("/api/register", options)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.ok) chips("Регистрация успешна");

      if (!result.ok) chips(result.message);
    })
    .catch((error) => {});
});

/////форма вход

const formLogin = document.querySelector("#form-login");
console.log(formLogin);
formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.querySelector("#login__name").value;
  let pass = document.querySelector("#login__pass").value;
  const options = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify({
      name,
      pass,
    }), // тип данных в body должен соответвовать значению заголовка "Content-Type"
  };
  fetch("/api/auth", options)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (!result.ok) chips(result.message);
      if (result.ok) {
        chips("Вход успешен");
        setCookie("token", result.token, 1);
        location.href = "welcome";
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// всплывающие чипсы окно при регистрации

function chips(slovo, chipsTime = 3000) {
  let chips = document.createElement("div");
  chips.classList.add("chips");
  chips.textContent = slovo;
  addChips(chips);
  setTimeout(function () {
    deleteChips(chips);
  }, chipsTime);
}
// Функция удаление чипсов
function deleteChips(chips) {
  let wrapChips = document.querySelector(".wrap-chips");
  chips.remove();
  if (wrapChips.children.length == 0) wrapChips.remove();
}

// Функция создание обертки
function createWrap() {
  let wrapChips = document.createElement("div");
  wrapChips.classList.add("wrap-chips");
  document.querySelector("body").appendChild(wrapChips);
  return wrapChips;
}

// Функция добавление чипсов
function addChips(chips) {
  let wrapChips = document.querySelector(".wrap-chips");
  if (wrapChips) wrapChips.appendChild(chips);
  else createWrap().appendChild(chips);
}

// Кастомная карта
function initMap() {
  const pos = { lat: 50.391708, lng: 30.492534 };

  let opt = {
    center: pos,
    zoom: 12,
  };
  let map = new google.maps.Map(document.getElementById("map"), opt);

  let marker = new google.maps.Marker({
    position: pos,
    map: map,
  });

  let infoWindow = new google.maps.InfoWindow({
    content: "<p>Smarts Bets</p>",
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}

new WOW().init();

document.querySelector(".burger").onclick = function () {
  this.classList.toggle("active");
  document.querySelector(".menu-body").classList.toggle("active");
};
