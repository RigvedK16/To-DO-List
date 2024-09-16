let submit = document.querySelector('#form');
let list = document.querySelector('#display-tasks');
let input = document.querySelector('#input-tasks');
let msg = document.createElement('div');

function feedback() {
    if (list.children.length === 0) {
        msg.textContent = "Congratulations!! All tasks completed!";
        msg.style.width = "75%";
        msg.style.height = "30px";
        msg.style.fontSize = "2rem";
        msg.style.fontWeight = "600";
        msg.style.marginTop = "150px";
        msg.style.padding = "10px";
        msg.style.textAlign = "center";
        msg.style.color = "#003459";
        msg.style.letterSpacing = "1px";
        msg.style.transitionProperty.transform = "translateY(-15px)";
        msg.style.transitionDuration = "500ms";
        list.appendChild(msg);
    }
}

submit.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (list.contains(msg)) {
        list.removeChild(msg);
    }
    let tasks = document.createElement('div');
    let taskContent = document.createElement('div');
    tasks.style.width = "75%";
    tasks.style.height = "30px";
    tasks.style.fontSize = "1.2rem";
    tasks.style.fontWeight = "600";
    tasks.style.borderRadius = "10px";
    tasks.style.borderColor = "yellogreen";
    tasks.style.borderStyle = "solid";
    tasks.style.borderBlockWidth = "3px"
    tasks.style.marginBottom = "10px";
    tasks.style.padding = "10px";
    tasks.style.backgroundColor = "#14213d";
    tasks.style.color = "#fca311";
    tasks.style.fontFamily = "IBM Plex Serif,serif";
    tasks.style.letterSpacing = "2px"

    let deleteTask = document.createElement('div');
    deleteTask.style.backgroundColor = "red";
    deleteTask.style.height = "25px";
    deleteTask.style.width = "25px";
    deleteTask.style.borderRadius = "50%";
    deleteTask.style.textAlign = "center"
    deleteTask.style.borderColor = "white";
    deleteTask.style.borderWidth = "3px"
    deleteTask.style.borderStyle = "solid";
    deleteTask.textContent = '▬';
    deleteTask.style.fontSize = "0.8rem";
    deleteTask.style.fontWeight = "bold";
    deleteTask.style.cursor = "pointer"
    deleteTask.style.color = "white";

    tasks.textContent = input.value;
    tasks.style.display = "flex";
    tasks.style.alignItems = "center";
    tasks.style.justifyContent = "space-between";

    tasks.appendChild(deleteTask);
    list.append(tasks);
    input.value = "";

    deleteTask.addEventListener('click', function () {
        list.removeChild(tasks);
        feedback();
    });

});
