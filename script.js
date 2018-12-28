var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("delete"));//create a button named "delete"
	li.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", deleteItem);//others code with onclick event as follows: deleteBtn.onclick = deleteItem;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function crossItem(event) {
	if (event.target !== event.currentTarget) {
		event.target.classList.toggle("done");
	}//event bubbling and handler accessing elements
}

function deleteItem(event) {
	if (event.target && event.target.parentNode !== event.currentTarget) {
		event.target.parentNode.remove();
	}//same event bubbling
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// ul.addEventListener("click", crossItem, deleteItem);//add two functions here and works not

ul.addEventListener("click", crossItem);

ul.addEventListener("click", deleteItem);







