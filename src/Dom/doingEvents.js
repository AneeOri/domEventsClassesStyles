//EVENTS
//when some actions happens in the webpage, thet action is called event
// clicking, hovering; pressing, resizing, closing, loading
//submit, video playing, paused and finishing

//there are two ways to handle avents

// let selectedElement = getElementById('selector')/querySelector('selector')
//method 1:
// using events propieties
//syntax: selectedElement.{eventProperty} = function(){}
// example: selectedElement.onClick = function() {}

//method 2:
// Using addEventListener()
//syntax: selectedElement.addEventListener({eventName}, function() {})
//example: selectedElement.addEventLiestener('click' , function() {})

let btn = document.getElementById("click");

function onButtonClicked() {
  btn.style.backgroundColor = "lightcoral";
}

//btn.onclick = onButtonClicked();

btn.addEventListener("click", onButtonClicked);
