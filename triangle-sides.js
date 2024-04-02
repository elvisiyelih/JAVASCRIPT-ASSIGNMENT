let side1 = 5;
let side2 = 4;
let side3 = 2;

if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1){
    console.log("Cannot form a triangle with given side lengths.")
}
else{
    console.log("Triangle can be formed with given side lengths.")
}