document.addEventListener('DOMContentLoaded', function() {
    const exerciseForm = document.getElementById("exercise-form");
    const exerciseList = document.getElementById("exercise-list");
    const exerciseNameInput = document.getElementById("exercise");
    const maxExerciseNameLength = 12;

// Load saved exercises from local storage
let exercises = JSON.parse(localStorage.getItem("exercises")) || [];

// Render exercise list
function renderList() {
  // Clear exercise list
  exerciseList.innerHTML = "";

    // Initialize counter variable
    let count = 1;

  // Render each exercise as a list item
  exercises.forEach((exercise, index) => {
    const listItem = document.createElement("li");
    const outsideDivInsideListItem = document.createElement("div");
    const divInsideListItem = document.createElement("div");
    listItem.classList.add('listItem');

      // Add exercise number to list item
      const exerciseNumber = document.createElement("span");
      exerciseNumber.classList.add("exercise-number");
      exerciseNumber.textContent = count + ". ";
      listItem.appendChild(exerciseNumber);

    // Add exercise name to list item
    const exerciseName = document.createElement("span");
    exerciseName.classList.add("exercise-name");
    exerciseName.textContent = exercise.name;
    listItem.appendChild(exerciseName);

    // Add exercise repetitions to list item
    const repetitions = document.createElement("span");
    repetitions.classList.add("repetitions");
    repetitions.textContent = exercise.repetitions;
    listItem.appendChild(outsideDivInsideListItem);
    outsideDivInsideListItem.classList.add('outerDiv');
    outsideDivInsideListItem.appendChild(repetitions);
    
// Add edit button to list item
const editButton = document.createElement("button");
editButton.textContent = "Edit";
editButton.classList.add('editButton');
editButton.addEventListener("click", () => {
  const option = prompt("Choose edit option: 'Replace' or 'Add'", "Replace");
  if (option !== null) {
    if (option.toLowerCase() === "replace") {
      const newRepetitions = prompt("Enter new repetitions:", exercise.repetitions);
      if (newRepetitions !== null) {
        exercise.repetitions = parseInt(newRepetitions);
        localStorage.setItem("exercises", JSON.stringify(exercises));
        renderList();
      }
    } else if (option.toLowerCase() === "add") {
      const additionalRepetitions = prompt("Enter additional repetitions:", 0);
      if (additionalRepetitions !== null) {
        exercise.repetitions += parseInt(additionalRepetitions);
        localStorage.setItem("exercises", JSON.stringify(exercises));
        renderList();
      }
    }
  }
});
// Add add button to list item
const addButton = document.createElement("button");
addButton.textContent = "Add";
addButton.classList.add('addButton');
addButton.addEventListener("click", () => {
  const additionalRepetitions = prompt("Enter additional repetitions:", 0);
  if (additionalRepetitions !== null) {
    exercise.repetitions += parseInt(additionalRepetitions);
    localStorage.setItem("exercises", JSON.stringify(exercises));
    renderList();
  }
});
divInsideListItem.appendChild(addButton);

// Add resetButton
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.classList.add('resetButton');
resetButton.addEventListener("click", () => {
  exercise.repetitions = 0;
  localStorage.setItem("exercises", JSON.stringify(exercises));
  renderList();
});


listItem.appendChild(outsideDivInsideListItem);
divInsideListItem.classList.add('insideDiv');
// divInsideListItem.appendChild(editButton);
divInsideListItem.appendChild(resetButton);

    // Add delete button to list item
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener("click", () => {
      exercises.splice(index, 1);
      localStorage.setItem("exercises", JSON.stringify(exercises));
      renderList();
    });
    count++;

    listItem.appendChild(divInsideListItem);
    divInsideListItem.appendChild(deleteButton);
    outsideDivInsideListItem.appendChild(divInsideListItem);
    exerciseList.appendChild(listItem);
  });
}

// Add a new exercise to the list
exerciseForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting
  const exerciseNameInput = document.getElementById("exercise");
  // const exerciseName = document.getElementById("exercise").value;
  const exerciseName = exerciseNameInput.value.trim().substring(0, 12); 
  // limit exercise name to 12 characters
  const repetitions = parseInt(document.getElementById("repetitions").value);

  if (exerciseNameInput.value.length > 12) {
    alert("Exercise name cannot be more than 12 characters. Including space lol");
  }

  // Add exercise to list
  exercises.push({ name: exerciseName, repetitions: repetitions });
  localStorage.setItem("exercises", JSON.stringify(exercises));
  renderList();

  // Clear form inputs
  exerciseForm.reset();
});

// Render initial list of exercises
renderList();

});

// There is still a problem with max length of inputs, must fix
// If max 12 for exercise name then max 1 for rep
// If max 11 for exercise name then max 2 for rep
// Gotta find a solution maybe make new line to fit extra length