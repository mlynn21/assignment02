let coinFlip = Math.round(Math.random());
let choice = prompt("Heads or tails?")
let outcome;

// >= .5 is heads, < .5 is tails 

if (choice === "heads") {
    if (coinFlip >= .5) {
       outcome = "The flip was heads and you chose heads... you win!"
    } else if (coinFlip < .5) {
        outcome = "The flip was tails but you chose heads... you lose!"
    }
} else if (choice === "tails") { 
    if (coinFlip >= .5) {
        outcome = "The flip was heads but you chose tails... you lose!"
     } else if (coinFlip < .5) {
         outcome = "The flip was tails and you chose tails... you win!"
     }
} else {
    outcome = "Make sure you're typing heads or tails in lowercase."
}


document.write(outcome)

