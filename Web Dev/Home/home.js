
if (window.addEventListener("DOMContentLoaded", function()
{
    const myDiv = document.querySelector(".container");
    const menu = document.querySelector(".open_menu");
    myDiv.addEventListener("click", function() {
    myDiv.classList.toggle("change");
    menu.classList.toggle("open_menu_content");
    console.log("toggling menu is working");
                                            });

}));