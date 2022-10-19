// Add/ Remove classes using javaScript
//the modern browser give us access to aproperty called
//"classList"
//this sholds all the classes of an html element
//Add Class:
//using the method add()
// let selectedElement = getElementById('selector')/querySelector('selector')
//syntax: selectedElement.classList.add('MyClass')
//ex: selectedElement.classList.add('show')

let mainNumber = document.getElementById("countdown");

mainNumber.classList.add("big");

setTimeout(function () {
  mainNumber.classList.remove("big");
}, 1500);
