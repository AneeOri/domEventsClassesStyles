console.log("js loaded");

let countDownElement = document.getElementById("countdown");
let initialCountdownVal = countDownElement.innerHTML;
console.log(initialCountdownVal);
let bgImegeElement = document.getElementById("bg-image");

setInterval(function () {
  initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;
  countDownElement.innerHTML = initialCountdownVal;

  let backImgPath =
    initialCountdownVal % 2 === 0
      ? "./src/assets/background-1.jpg"
      : "./src/assets/background-2.jpg";

  bgImegeElement.src = backImgPath;
}, 1000);
