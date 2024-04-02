let age = 18;
let PreExistingConditions = false;

if (age >= 18 && age <= 60 && !PreExistingConditions){
    console.log("Application approved")
}
else if (age > 60 && !PreExistingConditions){
    console.log("Limited coverage")
}
else{
    console.log("Application rejected")
}