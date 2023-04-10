document.addEventListener('DOMContentLoaded', function() {
    const myDiv = document.querySelector(".expandonclick");
    myDiv.addEventListener("click", function() {
    myDiv.classList.toggle("change");
    console.log("toggling menu is working");
});
// Tags
var tagsInput = document.getElementById("tags");
var tagOptions = document.getElementById("tag-options");

tagsInput.addEventListener("click", function() {
  tagOptions.style.display = "block";
});

document.addEventListener("click", function(event) {
  if (!tagsInput.contains(event.target) && !tagOptions.contains(event.target)) {
    tagOptions.style.display = "none";
  }
});
                    
});
