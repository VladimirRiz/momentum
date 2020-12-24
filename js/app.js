const time = document.querySelector("#time"),
  greeting = document.querySelector("#greeting"),
  name = document.querySelector("#name"),
  focus = document.querySelector("#focus"),
  date = document.querySelector(".date");

// add zero to numbers
const addZero = (n) => (parseInt(n, 10) < 10 ? `0${n}` : n);

// show time every second
const showTime = () => {
  let today = new Date(),
    hour = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds();
  time.innerHTML = `<div>${hour}</div> : <div>${addZero(
    minutes
  )}</div> : <div>${addZero(seconds)}</div>`;
  if (minutes == 0 && seconds == 0) {
    setBgGreeting();
  }
  setTimeout(showTime, 1000);
};

const showDate = () => {
  let today = new Date(),
    dates = today.getDate(),
    months = today.getMonth(),
    week = today.getDay();

  date.innerText = `${getWeekDay(week)}, ${dates} ${getMonths(months + 1)}`;
};

const getMonths = (n) => {
  let month;
  switch (n) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }
  return month;
};

const getWeekDay = (n) => {
  let day;
  switch (n) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }
  return day;
};

//set background and greeting

//get name to local storage

const getName = () => {
  if (
    (localStorage.getItem("name") === null && name.textContent === "") ||
    localStorage.getItem("name") === ""
  ) {
    name.textContent = "Enter Your Name";
  } else name.textContent = localStorage.getItem("name");
};

const check = (e, name, str) => {
  if (e.type == "focus") {
    input.push(name.textContent);
  } else if (e.type == "keypress") {
    console.log(input);
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem(str, e.target.innerText);
      name.blur();
    }
  } else if (e.code === "Enter") {
    if (name.textContent.trim().length == 0) {
      name.textContent = input[0];
    }
    localStorage.setItem(str, e.target.innerText);
    input.length = 0;
    name.blur();
  } else {
    if (name.textContent == "") {
      name.textContent = input[0];
    }
    localStorage.setItem(str, e.target.innerText);
    input.length = 0;
  }
};

let input = [];

const setName = (e) => {
  check(e, name, "name");
};

const getFocus = () => {
  if (
    (localStorage.getItem("focus") === null && focus.textContent === "") ||
    localStorage.getItem("focus") === ""
  ) {
    focus.textContent = "Enter Your Focus";
  } else focus.textContent = localStorage.getItem("focus");
};

const setFocus = (e) => {
  check(e, focus, "focus");
};

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
name.addEventListener("focus", setName);
name.addEventListener("click", () => {
  name.textContent = "";
});

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
focus.addEventListener("focus", setFocus);
focus.addEventListener("click", () => {
  focus.textContent = "";
});

showTime();
showDate();

getName();
getFocus();

// setInterval(setBgGreeting, 5000);
