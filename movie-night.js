let friend1 = true;
let friend2 = true;
let friend3 = false;
let availabeFriends = [friend1, friend2, friend3];
let availableCount = availabeFriends.filter(friend => friend).length;

if (availableCount >= 2){
    console.log("Movie night is on!")
}
else{
    console.log("Movie night is off!")
}