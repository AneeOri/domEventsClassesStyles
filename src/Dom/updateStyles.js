let countdownElement = document.getElementById("countdown");
let initialCountdownVal = countdownElement.innerHTML;
let image = document.getElementById("bg-image");

setInterval(function () {
  initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;

  countdownElement.innerHTML = initialCountdownVal;
  countdownElement.style.fontSize = initialCountdownVal * 20 + "px";

  image.style.width = initialCountdownVal * 10 + "%";
}, 1000);

let btn = document.getElementById("click");

function onButtonClicked() {
  btn.style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";
}

//btn.onclick = onButtonClicked();

btn.addEventListener("click", onButtonClicked);
