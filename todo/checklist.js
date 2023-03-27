function addItem() {
    var list = document.getElementById("listItem")
    var input = document.getElementById("todoInput");
    var textValue = todoInput.value; 
    var div = document.createElement("div");
    var i = document.createElement("i");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    var buttonDiv = document.createElement("div");

    if (input.value !== ''){
        div.innerHTML = textValue;
        div.classList.add("bob");
        editButton.classList.add("editButton");
        deleteButton.classList.add("deleteButton");
        buttonDiv.classList.add("buttonDiv");
        list.appendChild(div);
        div.appendChild(buttonDiv);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(deleteButton);
        editButton.textContent="Edit";
        deleteButton.textContent="Delete";
        console.log("success");
        input.value=("");
    }
        else{
            console.error("Enter some text");
            console.log(alert("Enter text"));
        }

}

document.addEventListener("DOMContentLoaded", function(){
    
    document.getElementById("todoInput").addEventListener("keydown", function(e){
        console.log(e);
        if(e.key === 'Enter'){
            addItem();
            console.warn(e)
        }
    });
    

});

//Switch, case case