
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var labelArray = ul.querySelectorAll("label");
var removeArray = ul.querySelectorAll("button");



function toggleEvent(item) {
	item.addEventListener("click", function () {
		item.classList.toggle("done")
	});
}

function removeEvent(removeButton) {
	removeButton.addEventListener("click", function() {
		removeButton.parentElement.remove();
	});
}

labelArray.forEach(toggleEvent);
removeArray.forEach(removeEvent);


function inputLength() {
	return input.value.length;
}

function createListItem() {
	var li = document.createElement("li");
	var item = document.createElement("label");
	var removeButton = document.createElement("button");
  
	item.appendChild(document.createTextNode(input.value));
	item.classList.add("done");
	item.classList.toggle("done");
	li.appendChild(item);
	removeButton.appendChild(document.createTextNode("x"));
	li.appendChild(removeButton);
	ul.appendChild(li);
  
	toggleEvent(item);
	removeEvent(removeButton);

	input.value = "";
}

function addListAfterClick () {
	if (inputLength() > 0) {
		createListItem();
	}
}

button.addEventListener("click", addListAfterClick);

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
			createListItem();
	}
}

input.addEventListener("keypress", addListAfterKeypress)




