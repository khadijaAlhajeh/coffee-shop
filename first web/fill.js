// data type
// 1 type number
// Represents numeric values

document.write(10 );

// 2 type string
// Represents letters and texts
document.write("<br> hello");

// 3 type boolean
// Represents value either false or true

var x=5
var a=5
var v=6
document.write("<br>");
document.write( x == a );
document.write("<br>");
document.write( a == v );

// 4 type null
// Represents no value 
var a=null;
document.write( "<br>" + a +"<br>");

//5 type Undefined
// Represents undefined value
var c;
document.write(c +"<br>");

//6 type object 
// Represents instance through which we can access members
var A = {"Name" : "Khadija" , "Age" : "24"}
document.write(A +"<br>");
console.log(A);

// 7 type array
// represents group of similar values
var colors = [ "Red" , "Green" , "Pink"];
document.write(colors[0] + "<br>");
document.write(colors[1] + "<br>");

//8 type symbol 
// 
var firstName = Symbol('khadija')
var lastName = Symbol('alhajeh');
console.log(firstName);
console.log(lastName);

// 9 type bigint
//represent whole numbers larger than 253 – 1.
var data=90025623n
document.write(data +"<br>");

 var x=3n/2n
 document.write(x)