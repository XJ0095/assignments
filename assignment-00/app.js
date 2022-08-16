//Data Types - Create variable for each data type below using the example provided for a string 




//String - denoted/represented by " " ' ' - they are great for words,language
var firstName = "Andrew"
console.log(firstName)

////////

var firstName = "Takemichi"
console.log(firstName)


//Number - anything of numerical value - just a number
var n = 34

var age = 26
console.log(age - 10 + 10)

////////



//Boolean - true or false 
/////////


//Array - are denoted/represented by [] - are great for holding multple pieces of data
//use bracket notation [] here with the array you created use 

var arr = [ "string", 3, true ]

console.log(arr[0])
console.log(arr[1])


/////////




//Object - denoted/represented by {} - great for describing something in detail - like a billing address
// use dot notation . here with the object you created .

var obj = {
    str: "string",
    num: 6,
    bool: false
}

console.log(obj.num)
console.log(obj.bool)

//////////


//Create an object - use each datatype as a property
//Use dot and bracket notation to display your knowledge
//////////

// // //
if(2 + 2 === 4){
    console.log("MINUS ONE THAT'S THREE")
} else if (2 + 2 !== 8){
    console.log ("QUICK MATHS")
} else if (4 === 6 || 4 === 4){
    console.log ("Regents Prep")
}
// // // 

//Condtional Statement
//if (this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}
//using the variable provided below create a condional statement

//Using below example below to create your own conditional statement.
var color = "red"

if (color === "red") {
    console.log("I am blue!")
} else if (color === 'blue') {
    console.log("I am red!")
} else {
    console.log(" i am something else!")
}



var sport = 'football'


// /////////



//For Loops - At their most elemetary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i

//for (#1Step start point; #2Step end point; #4Step howtogetthere){
//    #3Step what to do 
//} 

//i = i + 1 same i++


//Create 1 for loop

for (var i = 0; i < 13; i++) {
    console.log(i)
}

// // // 
for (var i = 5; i < 25; i += 5){
    console.log(i)
}

var hobbies = ["cycling", "hiking", "archery", "rock climbing"]
for (var i = 0; i < hobbies.length; i++){
    console.log(hobbies[i])
}
// // //

function greeting() {
    alert("Welcome to my Page")
}




//////////////////
//level 0 curriculum last 5 videos cover this material "DOM"

//1. Create button with an ID on it in HTML
//2. Call Button into JS using document and getting element by its ID
//3. Set that button equal to a variable
//4. with that variable use dot notation to access the addeventlistener method


var newButton = document.getElementById("button-one")
newButton.addEventListener( "click", greeting )