

const list = document.querySelector(".list");


let i = 0;
const arrayItem = [];
const addBtn = document.querySelector(".addBtn");
list.innerHTML = ``;


addBtn.addEventListener("click", function () {
	list.innerHTML = ``;
	i = 0;
	let newItem = document.querySelector(".inputText").value;
	arrayItem.push(newItem);
	while (i < arrayItem.length) {
		list.innerHTML += `<li>${arrayItem[i]}</li>`;
		i++;
	}
});
