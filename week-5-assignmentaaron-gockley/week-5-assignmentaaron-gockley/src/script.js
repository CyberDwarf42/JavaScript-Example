    (function(){
   
    const btn = document.getElementById("todo-btn"); //this is for adding an item
    const ul = document.querySelector("ul"); //this is for the delete function
    const box = document.getElementById("todo-form"); //this is for the reset function
    
      
    function AddItem(e) { // add item
      const list = document.getElementById("todo-ul") //gets the list
      const item = document.getElementById("todo-input").value; //gets the new value
      const trash = document.querySelector("i"); //this gets the trash info
      const todo = document.createElement('LI'); //creates new list element
      const content = document.createTextNode(item); //creates the contents
      const newtrash = trash.cloneNode(true);
      todo.appendChild(content); //combines the elements
      todo.appendChild(newtrash);
      todo.setAttribute("class", "list-group-item") //sets it to be the same class as other list items
      
      list.appendChild(todo); //adds the item to the end of the list. 
      e.preventDefault();
    }
    
    function Reset() {
      document.getElementById("todo-form").reset(); //this resets the form.
    }
      
    function trashItem(e) { //This trashes the items
      if(e.target.tagName === 'I') { //if the event target tag is I
        const info = e.target.parentNode; // It loads the parent node
        info.remove(); //and deletes it.
      }
    }
     
    btn.addEventListener("click", AddItem); //creates event listeners for all three things.
    ul.addEventListener("click", trashItem);
    box.addEventListener("click", Reset);

    })();