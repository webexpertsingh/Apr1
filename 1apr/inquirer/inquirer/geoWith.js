var geocoder = require('geocoder');
var inquirer = require('inquirer');

inquirer.prompt([
{
	type: "input",
	message: "what is name of city?",
	name: "city"
},
{
	type: "input",
	message: "what is name of state?",
	name: "state"
}
]).then(function(user){
	var city = user.city;
	var state = user.state;
	var address = city, state;
	geocoder.geocode(address, function ( err, data ) {
  	// do something with data 
  	var results = data;
  	console.log(JSON.stringify(results));
});
})
