"use strict";

document.querySelector("button").addEventListener("click", function () {
	document.querySelector(".shown").classList.add("hidden");
	document.querySelector(".more").classList.remove("hidden");
});
document.querySelector(".close-more").addEventListener("click", function () {
	document.querySelector(".shown").classList.remove("hidden");
	document.querySelector(".more").classList.add("hidden");
});

const now = new Date();
const time = now.toUTCString();
console.log(time);
document.querySelector(".time").innerHTML = time;
