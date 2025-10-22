function Skier (first, last, type, ability) {
  this.first = first;
  this.last = last;
  this.type = type;
  this.ability = ability;
}

Skier.prototype.name = function() {
  let name = this.first.concat(" ", this.last);
  return(name);
}
// create your Skier object here.

var person = new Skier("Aaron", "Gockley", "skier", "beginner");




// Then, un-comment the lies below and replace the empty strings with the correct code to display your person's name, type and ability in the HTML output window. 

       fullname.textContent = person.name();
       type.textContent = person.type;
       ability.textContent = person.ability;
