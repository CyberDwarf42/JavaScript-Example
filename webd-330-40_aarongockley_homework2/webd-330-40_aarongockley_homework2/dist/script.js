for (var x = 0; x <= 5; x++) {
	(function(y){setTimeout(function() {
		console.log(y);
	}, y*1000);
             })(x);
}

//When you use a variable the javascript looks to what is the most recent value of that variable. Since the variable is 6 at the end of the loop, the Loop prints that value 5 times. Since let works on a block scope, each loop is by itself a block, then it prints the value each time.
//One way to look at it is that let is declared for each new time through the loop. 

//My ultimate solution is to make a nested function. The way it works is that on each cycle of the loop, the program creates a second variable, that variable is equal to whatever the value of x is at that loop. In short each loop is a new scope now. Before it was one big scope, and now each loop has its own scope.