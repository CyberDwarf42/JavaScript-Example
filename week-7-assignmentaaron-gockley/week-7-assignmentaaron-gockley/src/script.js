(function() {
function contact (first, last, email, phone) { //this creates a contact type
  this.first = first;
  this.last = last;
  this.email = email;
  this.phone = phone;
}

let contacts = []

let info = new contact ("Aaron", "Gockley", "genesisfan1@gmail.com", "717-466-8885");

contacts.push(info);

contact.prototype.hello = function() { //This displays all the entered information for the specific contact. 
  let contactinfo = this.first + " " + this.last + " " + this.email + " " + this.phone;
  alert(contactinfo);
}

const btn = document.getElementById("add-btn"); //this is for adding an item.
const ul = document.querySelector("ul"); //this is for displaying an item and for deleting it.

function displaylist() {
  const sortedlist =  contacts.sort((p1, p2) =>
                                   (p1.first > p2.first) ? 1 : (p1.first < p2.first) ? -1 : 0);
  const display = sortedlist.map(function(contact) {
    return `<li class="list-group-item" id="contactname">${contact.first + " " + contact.last}
          <span class="hidden" id="phone" style="display:none" >${contact.phone}</span>
          <span class="hidden" id="email" style="display:none">${contact.email}</span>
          <i class='fas fa-trash-alt'> </i>         
        </li>`
  });
  const html = display.join(" ");
  document.getElementById('contact-ul').innerHTML = html;  
}
  function additem(e) {
    let first = document.getElementById("first").value
    let last = document.getElementById("last").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    
    let newcontact = new contact(first, last, email, phone);
    contacts.push(newcontact);
    newcontact.hello();
    displaylist();
    e.preventDefault();
    document.getElementById("contact-form").reset();
  }
  
  function GetInfo(e) { //This function displays the contact information of the contact in an alert.
    if (e.target.tagName === "LI"){
    let children = e.target.childNodes; //This gets the child nodes of the event.
    let information = "" //this sets a blank string for use later.
    for (const node of children) { //this loops through the list of child nodes
      if (node.className == "hidden"){ //if the class is hidden
        information = information + " " + node.innerText; //this will create the information for display. 
      }
    }
    alert(information);// Once the loop is done, it will alert with the information. 
  }
  }
  
  function trashItem(e) {
    if(e.target.tagName === "I") {
      const info = e.target.parentNode;
      const details = info.innerText;
      const first = details.split(' ');
      contacts = contacts.filter(item => item.first !== first[0]);
      displaylist();
    }
  }

  ul.addEventListener("click", GetInfo);
  btn.addEventListener("click", additem);
  ul.addEventListener("click", trashItem);
displaylist();
})();