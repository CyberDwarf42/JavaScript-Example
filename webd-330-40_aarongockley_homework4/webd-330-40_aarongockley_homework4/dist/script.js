(function () {

      /*
      Assignment - You'll use a number of the query methods we learned about in the lectures. 
      1. Select the list by its id
      2. Change the class name of the first and last items to 'red' using first and last child queries.
      3. Change the class of the 'peaches' node to 'blue', AND change its inner HTML to include italics.
      4. Change the text of the last item from 'liver and onions' to 'watermelons'.
      5. Create a new <li> element, call it 'strawberries' and insert it BEFORE the last item - (use the insertBefore method)
      6. Use comments to walk me through your code!
      
      Hint: Keep in mind the various element nodes! They may prevent you from seeing what you expect.
      */
    //First I load the list into fruit using getElementByID
      //I also edited the list over in the HTML side so that I removed the whitespace.
    let fruit = document.getElementById('fruit');
    let first = fruit.firstChild; //loads the first child into first
    let last = fruit.lastChild; //loads last child into last
    first.setAttribute('class', 'red'); //changes the class to red
    last.setAttribute('class', 'red'); //changes the class to red
    last.innerHTML = 'watermelons' //While we are here, I decided to change the last one to watermelons
     let pine = last.previousSibling; //loads the previous node
     let peaches = pine.previousSibling; //loads the peaches node.
     peaches.setAttribute('class', 'blue'); //This sets the class to blue
     peaches.innerHTML = '<em>peaches</em>' //This changes it to be in italics
     let strawberries = document.createElement('LI'); //creates a new list element
     let contents = document.createTextNode('strawberries'); //creates the contents of that element.
     strawberries.appendChild(contents);//Combines them together
     fruit.insertBefore(strawberries, last);//Then it inserts this before the last element.
    }());