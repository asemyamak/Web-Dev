document.addEventListener('DOMContentLoaded', function() {
    const myDiv = document.querySelector(".container");
    const menu = document.querySelector(".open_menu");
    myDiv.addEventListener("click", function() {
    myDiv.classList.toggle("change");
    menu.classList.toggle("open_menu_content");
    console.log("toggling menu is working");
                                            });
});

// Check if the clicked element is a button with the "myButton" class
// if (event.target.classList.contains('myButton')) {


//       if (event.ctrlKey) {  working  Checks if control is being pressed.
//       console.log('working');