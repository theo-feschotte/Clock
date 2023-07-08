const textDayWordContainer = document.querySelector(".texts__date--dayword");
const textDayNumberContainer = document.querySelector(
  ".texts__date--daynumber"
);
const textMonthContainer = document.querySelector(".texts__date--month");
const textYearContainer = document.querySelector(".texts__date--year");
const textHoursContainer = document.querySelector(".texts__time--hours");
const textMinutesContainer = document.querySelector(".texts__time--minutes");
const textSecondsContainer = document.querySelector(".texts__time--seconds");
let dayWordArray = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
let monthArray = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const hourNeedle = document.querySelector(".the-clock__hours--needle");
const minNeedle = document.querySelector(".the-clock__minutes--needle");
const secNeedle = document.querySelector(".the-clock__seconds--needle");

setInterval(() => {
  let day = new Date();
  let dayWord = dayWordArray[day.getDay()];
  let dayNumber = day.getDate();
  let month = monthArray[day.getMonth()];
  let year = day.getFullYear();

  let hours = day.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  } else {
    hours = hours;
  }
  let minutes = day.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
    minutes = minutes;
  }
  let seconds = day.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  } else {
    seconds = seconds;
  }

  textDayWordContainer.innerHTML = `${dayWord}&nbsp;`;
  textDayNumberContainer.innerHTML = `${dayNumber}&nbsp;`;
  textMonthContainer.innerHTML = `${month}&nbsp;`;
  textYearContainer.innerHTML = `${year}`;
  textHoursContainer.innerHTML = `${hours}`;
  textMinutesContainer.innerHTML = `${minutes}`;
  textSecondsContainer.innerHTML = `${seconds}`;

  let hoursDegrees = day.getHours() * 30;
  let minutesDegrees = day.getMinutes() * 6;
  let secondsDegrees = day.getSeconds() * 6;
  hourNeedle.style.transform = `rotateZ(${
    hoursDegrees + minutesDegrees / 12
  }deg)`;
  minNeedle.style.transform = `rotateZ(${minutesDegrees}deg)`;
  secNeedle.style.transform = `rotateZ(${secondsDegrees}deg)`;
});

const toggle = document.querySelector(".texts__toggle");
toggle.addEventListener("click", function () {
  $(".clock").toggleClass("clock--dark");
  $(".fa-solid").toggleClass("fa-sun fa-moon");
});
