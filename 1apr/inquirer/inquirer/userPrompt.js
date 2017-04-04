// Create a basic command line Node application using the inquirer package.
var inquirer = require('inquirer');
// Your application should ask the user any five questions of your choosing.
inquirer.prompt([
{
	type: "input",
	message: "what is your name?",
	name: "name"
},
{
	type: "password",
	message: "set your password",
	name: "password"
},
{
	type: "list",
	message: "which is your fav movie?",
	choices: ["frozen", "day&night","border"],
	name: "movie" 
},
{
	type: "confirm",
	message: "are you sure?",
	name: "confirm",
	default: true
},
{
	type: "checkbox",
	message: "gender?",
	choices: ["male", "female", "other"],
	name: "checkbox"
}

	]).then(function(user){
		console.log(JSON.stringify(user, null, 2));

		if(user.confirm){
			console.log("welcome "+user.name + " i know you like "+user.movie);
		}else{
			console.log("bad other choices!");
		}
		if(user.checkbox){
			console.log("your gender is "+user.checkbox);
		}else{
			console.log("oops !!");
		}

	})

// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================