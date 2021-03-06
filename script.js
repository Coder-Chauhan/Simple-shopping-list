let button = document.getElementById("enter");
let item = document.getElementById("userinput");
let ul = document.querySelector("ul");

function checkLength() {
	return item.value.length;
}

function createListItem() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(item.value));
	ul.appendChild(li);
	item.value = "";
}

function addListAfterClick() {
	if (checkLength() != 0) {
		createListItem();
	}
}

function addListAfterEnter(event) {
	if (checkLength() != 0 && event.which === 13) {
		createListItem();
	}
}

button.addEventListener("click", addListAfterClick);
item.addEventListener("keypress", addListAfterEnter);


// My Task
let li = document.querySelectorAll("li");
function lineThrough() {
	for (let i = 0; i < li.length; i++) {
		li[i].addEventListener("click", function () {
			li[i].classList.toggle("done");
		});
	}
}
lineThroughb();