let secretnumber = Math.floor(Math.random() * 100) + 1;
let guess = 51;

if (guess === secretnumber){
    console.log("Congratulations! You guessed the correct number.")
}
else if(guess < secretnumber){
    console.log("Too low. Try guessing a higher number.")
}
else{
    console.log("Too high. Try guessing a lower number.")
}