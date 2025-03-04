var addBtn = document.querySelector(".addBtn");
var userInput = document.querySelector("#userInput");
var taskList = document.querySelector(".tasksList"); // Fixed class name

function addTask() {
    if (userInput.value.trim().length !== 0) { // Trim to avoid empty spaces
        var div = document.createElement("div");
        div.innerHTML = `
            <input type="checkbox" class="checkBox">
            <span>${userInput.value}</span>
            <button class="delete">Remove</button>
        `;

        // Append the new task to the task list
        taskList.appendChild(div);
        
        // Clear input field after adding a task
        userInput.value = ""; 
        
        // Add event listener for delete button
        div.querySelector(".delete").addEventListener("click", function () {
            this.parentElement.remove();
        });
        
    } else {
        alert("Please enter a task!");
    }
}




// Add event listener to the button
addBtn.addEventListener("click", addTask);
userInput.addEventListener("keydown", function(event){
    if(event.key =="Enter"){
        addTask();  //call add task function if user pressed Enter key
    }
})
