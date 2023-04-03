// Run the code when the DOM content has loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the list and form elements
    const todoList = document.getElementById('todos');
    const todoForm = document.querySelector('form');

    // Get any existing todos from localStorage or initialize an empty array
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    // This function takes an array of todos and populates the list element with them
    function populateList(todos, todoList) {
        // Use map to loop over each todo and create a list item with a checkbox, label, and delete button
        todoList.innerHTML = todos.map((todo, index) => {
            return `
              <li>
                <input type="checkbox" data-index=${index} id="todo${index}" ${todo.completed ? 'checked' : ''}>
                <label for="todo${index}">${todo.text}</label>
                <button data-index=${index}>Delete</button>
              </li>
            `;
        }).join(''); // Join the list items together into a single string
    }
    
    // This function adds a new todo to the list
    function addTodo(e) {
        e.preventDefault(); // Prevent the form from submitting and reloading the page
        const text = this.querySelector('[name=todo]').value; // Get the value of the todo input field
        if (text === '') {
            console.warn('User submitted without typing text');
            // window.open('https://www.example.com', 'example', 'width=500,height=500');
            alert("type some text to add");
        } else {
            const todo = {
                text: text,  // Assign value of text variable to the text property of the todo object
                completed: false // Initialize the completed property to false
            };
            todos.push(todo); // Add the new todo to the todos array
            populateList(todos, todoList); // Update the list with the new todo
            localStorage.setItem('todos', JSON.stringify(todos)); // Store the updated todos array in localStorage
            this.reset(); // Reset the form input field
        }
        }
    
    // This function toggles the completed status of a todo when the checkbox is clicked
    function toggleDone(e) {
        // Ignore the event if the clicked element is not an input field
        if (!e.target.matches('input')) return;
        const el = e.target;
        const index = el.dataset.index; // Get the index of the clicked todo item
        todos[index].completed = !todos[index].completed; // Toggle the completed status of the todo
        localStorage.setItem('todos', JSON.stringify(todos)); // Store the updated todos array in localStorage
        populateList(todos, todoList); // Update the list with the toggled todo
    }
    
    // This function deletes a todo when the delete button is clicked
    function deleteTodo(e) {
        // Ignore the event if the clicked element is not a button
        if (!e.target.matches('button')) return;
        const index = e.target.dataset.index; // Get the index of the clicked todo item
        todos.splice(index, 1); // Remove the clicked todo from the todos array
        localStorage.setItem('todos', JSON.stringify(todos)); // Store the updated todos array in localStorage
        populateList(todos, todoList); // Update the list without the deleted todo
    }
    
    // Add event listeners to the form and list elements
    todoForm.addEventListener('submit', addTodo); // Add a new todo when the form is submitted
    todoList.addEventListener('click', toggleDone); // Toggle the completed status of a todo when its checkbox is clicked
    todoList.addEventListener('click', deleteTodo); // Delete a todo when its delete button is clicked

    // Populate the list with any existing
    populateList(todos, todoList);
    
  });
