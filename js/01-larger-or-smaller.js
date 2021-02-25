let num1 = Number(prompt("Pick a number"));
let num2 = Number(prompt("Pick another number"));

if (num1 > num2) {
document.write("The larger number is " + num1 + ".");
} else if (num1 < num2) {
document.write("The larger number is " + num2 + "."); 
} else if (num1 === num2) {
    document.write("The numbers are equal.");
}

