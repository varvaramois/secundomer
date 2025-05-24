const minuta = document.querySelector(".minuta");
const btn = document.querySelector(".btn");
const stopBtn = document.querySelector(".btn-stop");

let totalMilisec = 2 * 60 * 60 * 1000;
let timerId;

btn.addEventListener("click", function () {
  stopBtn.addEventListener("click", function () {
    clearInterval(timerId);
  });
  timerId = setInterval(function timer() {
    const milisecTimer = totalMilisec % 1000;
    const totalSec = Math.floor(totalMilisec / 1000);
    const secTimer = totalSec % 60;
    const minTimer = Math.floor(totalSec / 60) % 60;
    const hourTimer = Math.floor(totalSec / 3600);

    minuta.innerHTML = `
      <p class="minutes">
      ${hourTimer}:${minTimer}:${secTimer}:${Math.floor(milisecTimer / 10)}
      </p>`;

    if (totalMilisec <= 0) {
      clearInterval(timerId);
    } else {
      totalMilisec -= 10; // Зменшуємо кожні 10 мс
    }
  }, 10);
});


//new Date(year, month, day, hours, minutes, seconds, miliseconds)
// const date = new Date(2016, 7, 23, 12, 57, 18, 0);
// console.log(date);

// const dateNow = Date.now();
// console.log(dateNow);

// const text = document.querySelector(".time");
// // text.textContent = data;

// const meow = setInterval(function() {
//     let data = new Date();
//     text.textContent = data;
//     console.log(data);
// }, 1000);

// const getDate = new Date();
// console.log(getDate.toLocaleString());

// const dates = new Date();
// console.log(dates.getFullYear());

//Створіть функцію getSecondsToTomorrow(), що повертає кількість секунд до завтра.
const getSecondsToTomorrow = function() {
    const nowDate = Date.now(2025, 4, 16, 11, 50, 0, 0);
    console.log(nowDate);
};
getSecondsToTomorrow();
//meoooooow