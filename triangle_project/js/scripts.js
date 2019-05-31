var sideA = parseInt(prompt("Enter the first side"));
var sideB = parseInt(prompt("Enter the second side"));
var sideC = parseInt(prompt("Enter the third side"));

if(sideA===sideB && sideA===sideC && sideB===sideC){
  alert("This is an Equilateral Triangle.");
}
else if(sideA===sideB || sideA===sideC || sideB===sideC){
  alert("This is an Isosceles Triangle.");
}
else if(sideA!==sideB && sideA!==sideC && sideB!==sideC){
  alert("This is Scalene Triangle.");
}
else{
  alert("This is not a Triangle!")
}
