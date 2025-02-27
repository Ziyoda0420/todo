const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const tasks = document.getElementById('tasks');

addTaskButton.addEventListener('click',()=>{
    const taskText = taskInput.value.trim();

    const taskDiv = document.createElement('div');
    taskDiv.textContent = taskText;
    taskDiv.style.marginLeft = '400px';


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'ochirish';
    deleteButton.style.width = '64px';
    deleteButton.style.height = '38px';
    deleteButton.style.background = 'grey';
    deleteButton.style.marginLeft = '2em';
    deleteButton.style.marginTop='20px'
    deleteButton.addEventListener('click',()=>{
        taskDiv.remove()
    } );
    taskDiv.appendChild(deleteButton);
    tasks.appendChild(taskDiv);

    taskInput.value = ''

})


document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    
    // Tema holatini saqlash
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Brauzerda oldin saqlangan mavzuni tekshirish
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}
