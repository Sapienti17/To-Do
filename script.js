const inputText = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputText.value === "") {
        alert("Необходимо записать задачу!");
    } else {
        const li = document.createElement("li");
        li.innerText = inputText.value;
        listContainer.appendChild(li);

        const deleteBtn = document.createElement("button");
        li.appendChild(deleteBtn);
        deleteBtn.innerText = "X";
        deleteBtn.classList.add("delete-btn");
    }
    inputText.value = "";
}
