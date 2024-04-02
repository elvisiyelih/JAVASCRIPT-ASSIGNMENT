let age = 25;
let preference = "sports";

if (age < 18){
    console.log("Basic subscription")
}
else if (age >= 18 && preference === "sports"){
    console.log("Premium Sports package")
}
else {
    console.log("Standard package")
}