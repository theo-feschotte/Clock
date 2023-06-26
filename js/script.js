const textDayWordContainer = document.querySelector("#text-dayword-container");
const textDayNumberContainer = document.querySelector(
  "#text-daynumber-container"
);
const textMonthContainer = document.querySelector("#text-month-container");
const textYearContainer = document.querySelector("#text-year-container");
const textHoursContainer = document.querySelector("#text-hours-container");
const textMinutesContainer = document.querySelector("#text-minutes-container");
const textSecondsContainer = document.querySelector("#text-seconds-container");
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

const hourNeedle = document.querySelector("#hours-needle");
const minNeedle = document.querySelector("#minutes-needle");
const secNeedle = document.querySelector("#seconds-needle");

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

function toggleLightDark() {
  $("#body").toggleClass("body-background-dark");
  $(".toggle").toggleClass("toggle-shadow-dark");
  $(".toggler").toggleClass("toggler-background-dark");
  $(".points").toggleClass("points-color-light");
  $(".clock-container").toggleClass("clockcontainer-background-dark");
  $(".clock-container").toggleClass("clockcontainer-border-dark");
  $(".clock-container").toggleClass("clockcontainer-shadow-dark");
  $(".hours").toggleClass("hours-background-dark");
  $(".minutes").toggleClass("minutes-background-dark");
  $(".seconds").toggleClass("seconds-background-dark");
}
