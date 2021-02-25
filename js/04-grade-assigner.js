/* 
let grade = Number(prompt("Enter the student\'s grade"));
if (grade >= 90) {
    document.write("Student received an A");
} else if (grade >= 80) {
    document.write("Student received a B");
} else if (grade >= 70) {
    document.write("Student received a C");
} else if (grade >= 60) {
    document.write("Student received a D");
} else {
    document.write("You failed the course!");} */


let score = Number(prompt("Enter a score between 1 and 100."));
if ( score <= 69 && score >= 60 ) {
    console.log("You received a D.")
} else if  ( score <= 79 && score >= 70 ) {
    console.log("You received a C.")
} else if  ( score <= 89 && score >= 80 ) {
    console.log("You received a B.")
} else if  ( score <= 100 && score >= 99 ) {
    console.log("You received an A.")
} else if (score < 60) {
    console.log("You failed the course.")
} else {
    console.log("Make sure the score is between 1 and 100.")
}
