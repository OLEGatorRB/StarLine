var button = document.querySelector(".button");
var popup = document.querySelector(".popup");

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("not-show")
	console.log("hello");
})