//Setting and Swapping
//Set myNumber to 42. Set myName to your name.
//Now swap myNumber into myName & vice versa.
var myNumber = 42;

var myName = jose;


var temp = 42; 
var myNumber = jose;
var myName = temp;
console.log(myNumber);
console.log(myName);



//Print -52 to 1066
//Print integers from -52 to 1066 using a FOR loop.
for (var num = -52; num < 1066; num = num + 1)
{
    console.log("Print from -52 to 1066 ", num);
}

//Don’t Worry, Be Happy
//Create beCheerful(). Within it, console.log
//string "good morning!" Call it 98 times.

function beCheerful()
{
	var happy = "good morning!";
	for(var i = 0; i<=98; i++ ){
		console.log(happy);
	}

}  

//Using FOR, print multiples of 3 from -300 to 0.
//Skip -3 and -6

for (var a = 0; a >= -300; --a*3 ){
	if ( a == -3 || -6 ){
		continue;
	}
    console.log(a);
}


// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.
var num2k = 2000
while (num2k < 5280){
	console.log(num2k);
	num2k = num2k + 1;
}

