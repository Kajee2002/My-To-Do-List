var addBtn = document.querySelector(".addBtn");
var userInput = document.querySelector("#userInput");
var taskList = document.querySelector(".tasksList"); // Fixed class name
var checkBox = document.querySelector(".checkBox");


globalThis.i = 0; // Global variable to keep track of the task number

function addTask() {
    i++;
    if (userInput.value.trim().length !== 0) { // Trim to avoid empty spaces
        var div = document.createElement("div");
        div.id = `${i}`;
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

        div.querySelector(".checkBox").addEventListener("change",moveTask);
        
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

//Function to move task div to completed & task list

function moveTask(){
    var completedList = document.querySelector(".completedList");
    var taskList = document.querySelector(".tasksList");
    let taskArray = Array.from(taskList.children); // Convert HTMLCollection to Array **
    let CompletedArray = Array.from(completedList.children); 

    if(this.checked){
        CompletedArray.push(this.parentElement);   //Add checked items to completed array
        this.parentElement.querySelector("span").style.textDecoration = "line-through";  //Change text to splitthrough to checked items
        CompletedArray.sort((a,b)=>parseInt(a.id) -parseInt(b.id)); //Sort the completed array
        CompletedArray.forEach(task => completedList.appendChild(task));       //Append the sorted array to completed list (modify the DOM)
    }
    else{
        this.parentElement.querySelector("span").style.textDecoration = "none";
        taskArray.push(this.parentElement);
        taskArray.sort((a,b)=>parseInt(a.id) -parseInt(b.id));
        taskArray.forEach(task => taskList.appendChild(task));

    }

}   

