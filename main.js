
var num2 = '60';

		// alert('my favorite num is' + num2);

		var training = ['weight training', 'calisthenics', 'martial arts', 'powerlifting'];
		// alert(colors[2]);

		// another way for declaring arrays
		var colors = new Array('red', 'yellow', 'blue');
		colors[3] = 'magenta';

		// dot syntax, calling a funtion on an object
		colors.push('cool-blue');
		// alert(colors);

		// i can put a string with numbers in an array
		var num = [1, 4, 3, 8, 5, 'six']
		// alert(num.reverse());

		

		var numnum = [22, 55, 66, 77, 88, 99, 33, 11];

		// numnum.forEach(function(numnum){
		// 	console.log(numnum);
		// });

		// dynamic iteration
		numnum.reverse();
		for(var i = 0; i < numnum.length; i++){

			//=== ensures same data types
			// if(i==6){
				console.log(numnum[i]);  

			// }

			if(1 == 'one'){
				console.log('true');
			}
		}

		var fruit = ['banana', 'apple', 'orange'];

		for(var i = 0; i < fruit.length; i++){
			switch (fruit[i]){
				case 'banana':
					console.log('banana');
					break;
				case 'apple':
					console.log('an apple a day keeps the doctor away');
					break;
				case 'orange':
					console.log('oranges are citrusy');
					break;
				default:
					console.log('fruits are tasty af in general');
					break;	
			}

		}


// object literal
var person = {
	firstName: 'Prakhar', 
	lastName: 'Keshari',
	age: 34,
	values: ['winner', 'achiever', 'passionate', 'goaloriented', 'courageous'],
	// embedded object
	address : {
		street: '65 E Scott',
		apt: '10k',
		state: 'Chicago'
	},
	// including a function to the object
	fullName: function(){
		// keyword 'this' refers to the curren tobject we are in
		return this.address.apt;
	}
}

console.log(person.age);
console.log(person.lastName);
console.log(person.values[3]);
console.log(person.fullName());


// object constructor, another way to create objects
var apple = new Object();
//addding properties to the object
apple.color = 'red';
apple.taste = 'tasty';
// adding a function to the object
apple.description = function(){
	return this.color + this.taste;
} 

console.log(apple.description());

// constructor pattern for multiple objects of same kind
function Fruit(name, color, shape){
	this.name = name;
	this.color = color;
	this.shape = shape;

	this.describe = function(){
		return 'name: ' + this.name + 'color: ' + this.color + 'shape: ' + this.shape; 
	}
}

// create a new fruit object
var apple = new Fruit('apple', 'red', 'pear-like');
console.log(apple);

var grape = new Fruit('grape', 'green', 'oval');
console.log(grape);

console.log(grape.describe());

// add another fruit to the object Fruit 
var blueBerry = new Fruit('blue berry', 'blue', 'round');
console.log(blueBerry.describe());

// arrays of objects
var users = [

	{
		name: 'James Fletcher',
		age: 32
	},

	{
		name: 'Abhinav Pesh',
		age: 44
	},

	{
		name: 'John Doe',
		age: 50
	}
];

console.log(users[1].name);

//created an event for a button called do click
function doClick(){
	alert(users[1].name);
}

function changeText(id ){
	id.innerHTML = 'you clicked this now';
}

function changeHeading(){
	var heading = document.getElementById('change-heading');
	heading.innerHTML = 'On my Way!';
}

function showDate(){
	var time = document.getElementById('time')
	time.innerHTML = Date();
}

function clearDate(){
	var time = document.getElementById('time');
	time.innerHTML = 'Show Time'
}


// forms

 









