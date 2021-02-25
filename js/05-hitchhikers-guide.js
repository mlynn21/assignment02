let direction;
let startGame = prompt("Are you ready to start the game? (Y/N)");

if (startGame == "Y") {
    alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.");

    let direction = prompt("Which direction would you like to head (please enter forward, left, or right)?");
    if (direction == "forward") {
        alert("You walk 100 yards and safely make your way out of the cave.");
    } else if (direction == "left") {
        alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
    } else if (direction == "right") {
        alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
    } else {
        alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
    }
} else if (startGame == "N") {
    alert("Thank you, play again sometime.");
} else {
    alert("Thank you, play again sometime.")
}


let rating = prompt("The game is now over. Please give the game a rating between 1 and 10:");
if ( rating <= 10 && rating >= 6 ) {
    alert("Thank you! Please play again!");
} else if (rating <= 5 && rating >= 1 ) {
    alert("Thank you for your feedback. We are working hard to improve the game!");
}  else {
    alert("Thank you for playing.");
}

